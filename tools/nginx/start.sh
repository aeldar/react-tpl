#!/bin/sh

set -e

MARKER='%%%ENV_JSON%%%'

# welcome to backslash hell, there is no escaping here.
ENV_JSON=$(sh ./env-to-json.sh WEB_APP_ | sed 's/\\/\\\\/g' | sed "s/'/\\\\\\\\'/g")

echo $ENV_JSON

cat ./site.tpl.conf | sed "s/$MARKER/${ENV_JSON}/" > ./site.conf
