#!/bin/sh

set -e

# Inject only env variables suited this mask
MASK="WEB_APP_"

MARKER='%%%ENV_JSON%%%'

# welcome to backslash hell
ENV_JSON=$(sh ./env-to-json.sh $MASK | sed 's/\\/\\\\\\\\/g' | sed "s/'/\\\\\\\\'/g")

sed "s/$MARKER/$ENV_JSON/" ./site.tpl.conf > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'
