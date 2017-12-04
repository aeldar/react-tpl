#!/bin/sh

set -e

# Inject only env variables suited this mask
MASK="WEB_APP_"

MARKER='%%%ENV_JSON%%%'

# welcome to backslash hell, there is no escaping here.
ENV_JSON=$(sh ./env-to-json.sh $MASK | sed 's/\\/\\\\\\\\/g' | sed "s/'/\\\\\\\\'/g")

echo $ENV_JSON

cat ./site.tpl.conf | sed "s/$MARKER/${ENV_JSON}/" > /etc/nginx/conf.d/default.conf

nginx -g 'daemon off;'
