# Exit on Error
set -e

OUTPUT_DIR=/secrets/certs
ZIP_CA_FILE=$OUTPUT_DIR/ca.zip
ZIP_FILE=$OUTPUT_DIR/certs.zip

printf "======= Generating Elastic Stack Certificates =======\n"
printf "=====================================================\n"

if ! command -v unzip &>/dev/null; then
    printf "Installing Necessary Tools... \n"
    yum install -y -q -e 0 unzip;
fi

printf "Clearing Old Certificates if exits... \n"
mkdir -p $OUTPUT_DIR
find $OUTPUT_DIR -type d -exec rm -rf -- {} +
mkdir -p $OUTPUT_DIR/ca


printf "Generating CA Certificates... \n"
PASSWORD=`openssl rand -base64 32`
/usr/share/elasticsearch/bin/elasticsearch-certutil ca --pass "$PASSWORD" --pem --out $ZIP_CA_FILE &> /dev/null
printf "Generating Certificates... \n"
unzip -qq $ZIP_CA_FILE -d $OUTPUT_DIR;
/usr/share/elasticsearch/bin/elasticsearch-certutil cert --silent --pem  --ca-cert $OUTPUT_DIR/ca/ca.crt --ca-key $OUTPUT_DIR/ca/ca.key --ca-pass "$PASSWORD" --in /setup/instances.yml -out $ZIP_FILE  &> /dev/null

printf "Unzipping Certifications... \n"
unzip -qq $ZIP_FILE -d $OUTPUT_DIR;

printf "======= Generating Logstash Certificates =======\n"
printf "=====================================================\n"

printf "Installing Necessary Tools... \n"
mkdir $OUTPUT_DIR/logstash

printf "Generating Certificates... \n"
openssl req -addext 'subjectAltName=IP:35.240.140.173' -x509 -days 3650 -batch -nodes -newkey rsa:4096 -keyout $OUTPUT_DIR/logstash/logstash-forwarder.key -out $OUTPUT_DIR/logstash/logstash-forwarder.crt &> /dev/null

printf "Applying Permissions... \n"
chown -R 1000:0 $OUTPUT_DIR
find $OUTPUT_DIR -type f -exec chmod 655 -- {} +

printf "=====================================================\n"
printf "SSL Certifications generation completed successfully.\n"
printf "=====================================================\n"
