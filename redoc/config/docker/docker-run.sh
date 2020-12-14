#!/bin/sh

set -e

sed -i -e "s|\(listen\s*\) [0-9]*|\1 ${PORT}|g" /etc/nginx/nginx.conf

exec nginx -g 'daemon off;'
