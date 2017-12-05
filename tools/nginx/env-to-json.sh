#!/bin/sh

MASK="$1"

[ -z $MASK ] && echo "Usage: $0 MASK" >&2 && exit 1

# Description:
#  filter by mask ->
#  escape quotes ->
#  prepare json props ->
#  unquote bool and int ->
#  join ->
#  remove last comma
PROPS=$( \
  printenv \
   | grep $MASK \
   | sed 's/\"/\\\"/g' \
   | sed -r 's/([^=]+)=(.*)/"\1":"\2"/' \
   | sed -r 's/^("[^"]+"):"([[:digit:]]+|true|false)"/\1:\2/g' \
   | tr "\n" "," \
   | sed "s/,$//" \
)

#  wrap with curly braces
echo "{$PROPS}"
