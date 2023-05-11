#!/bin/sh
bench build --apps dealsthatclick
sudo supervisorctl stop all
sudo supervisorctl start all