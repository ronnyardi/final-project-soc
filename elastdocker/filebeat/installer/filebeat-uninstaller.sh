#!/bin/bash

printf "===========  Filebeat Uninstaller v7.17.0 ===========\n"
printf "=====================================================\n"

echo -e " "
printf "Uninstalling Filebeat... \n"
rm -r /etc/filebeat/
systemctl stop filebeat.service
rm -r /lib/systemd/system/filebeat.service
sleep 2

printf "Filebeat successfully uninstalled \n"
