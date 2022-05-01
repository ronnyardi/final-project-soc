#!/bin/bash

DIR=/filebeat/installer
VERSION="7.17.0"
OUTPUT_DIR=/etc/filebeat
SECRET_DIR=secrets/certs/logstash

printf "============  Filebeat Installer v7.17.0 ============\n"
printf "=====================================================\n"

mkdir -p /certs
cp $SECRET_DIR/logstash-forwarder.crt /certs
echo -e " "

printf "============ Installing Filebeat ============\n"
printf "Downloading filebeat package... \n"
mkdir -p $OUTPUT_DIR
cd $OUTPUT_DIR
wget https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-$VERSION-linux-x86_64.tar.gz --show-progress

printf "Extracting package... \n"
FILENAME=$(ls -tr *.tar.gz | head -1)
tar -xf $FILENAME -C $OUTPUT_DIR --strip-components=1
rm -fr $FILENAME
sleep 1

printf "Configuring filebeat output... \n"
cat <<END >filebeat.yml
filebeat.inputs:
- type: filestream
  enabled: false
  paths:
    - filename.log

filebeat.config.modules:
  path: /etc/filebeat/modules.d/*.yml
  reload.enabled: false

setup.template.settings:
  index.number_of_shards: 1

output.logstash:
  hosts: ["35.240.140.173:5044"]
  ssl.certificate_authorities: ["/certs/logstash-forwarder.crt"]

processors:
  - add_host_metadata:
      when.not.contains.tags: forwarded
  - add_cloud_metadata: ~
  - add_docker_metadata: ~
  - add_kubernetes_metadata: ~
END
sleep 1

printf "============ Configuring Modules ============\n"
read -e -p 'Activate Apache module? [y/n] ' ACT_1
if [[ $ACT_1 == "y" ]]; then
	./filebeat modules enable apache
  read -e -p 'Path to Apache access log? [e.g /var/log/apache2/access.log*] ==> ' A1
  /bin/sed -i "11s#.*#    var.paths: [\"$A1\"]#" modules.d/apache.yml
  read -e -p 'Path to Apache error log? [e.g /var/log/apache2/error.log*] ==> ' A2
  /bin/sed -i "19s#.*#    var.paths: [\"$A2\"]#" modules.d/apache.yml
  printf "Apache module enabled success... \n"
else [[ $ACT_1 == "n" ]]
  printf "Apache module disabled... \n"
fi

sleep 2
read -e -p 'Activate System module? [y/n] ' ACT_2
if [[ $ACT_2 == "y" ]]; then
	./filebeat modules enable system
  read -e -p 'Path to Syslog? [e.g /var/log/syslog*] ==> ' S1
  /bin/sed -i "11s#.*#    var.paths: [\"$S1\"]#" modules.d/system.yml
  read -e -p 'Path to Authorization log? [e.g /var/log/auth.log*] ==> ' S2
  /bin/sed -i "19s#.*#    var.paths: [\"$S2\"]#" modules.d/system.yml
  printf "System module enabled success... \n"
else [[ $ACT_2 == "n" ]]
  printf "System module disabled... \n"
fi

printf "============ Starting up Filebeat Service ============\n"
printf "Setting up systemd filebeat.service... \n"
sleep 1
cat <<END >/lib/systemd/system/filebeat.service
[Unit]
Description=Filebeat sends log files to Logstash or directly to Elasticsearch.
Documentation=https://www.elastic.co/beats/filebeat
Wants=network-online.target
After=network-online.target

[Service]
Type=simple
Restart=always
User=root
Group=root
WorkingDirectory=/etc/filebeat
Environment="BEAT_PATH_OPTS=--path.home /usr/share/filebeat --path.config /etc/filebeat --path.data /var/lib/filebeat --path.logs /var/log/filebeat"
ExecStart=/etc/filebeat/filebeat -c /etc/filebeat/filebeat.yml

[Install]
WantedBy=multi-user.target
END

printf "Enabling and starting filebeat.service... \n"
systemctl daemon-reload
sleep 3
systemctl start filebeat.service && systemctl enable filebeat.service 
systemctl is-active filebeat.service >/dev/null 2>&1 && echo "Filebeat is now enabled and start to sending logs... " || echo "Something wrong, please check the configuration... "
