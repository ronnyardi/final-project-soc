# Exit on Error
set -e

OUTPUT_DIR=/secrets/certs
ZIP_CA_FILE=$OUTPUT_DIR/ca.zip
ZIP_FILE=$OUTPUT_DIR/certs.zip

printf "======= Generating Logstash SSL Certificates =======\n"
printf "=====================================================\n"

if ! command -v openssl &>/dev/null; then
    printf "Installing Necessary Tools... \n"
    yum install -y -q -e 0 openssl;
fi

mkdir -p $OUTPUT_DIR/logstash
openssl req -addext "subjectAltname: DNS:35.240.140.173" -x509 -days 3650 -batch -nodes -newkey rsa:2048 -keyout $OUTPUT_DIR/logstash/logstash-forwarder.key -out $OUTPUT_DIR/logstash/logstash-forwarder.crt


printf "=====================================================\n"
printf "Creation of SSL for Logstash is completed successfully.\n"
printf "=====================================================\n"