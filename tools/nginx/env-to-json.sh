#!/bin/sh

MASK=$1

[ -z $MASK ] && echo " ERROR. Variable mask not specified." >&2 && exit 1

printenv \
 | grep $MASK \
 | sed 's/\"/\\\"/g' \
 | sed -r 's/([^=]+)=(.*)/"\1":"\2"/' \
 | sed -r 's/^("[^"]+"):"([[:digit:]]+|true| false)"/\1:\2/g' \
 | paste -s -d',' \
 | sed 's/.*/{&}/'
