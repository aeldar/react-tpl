#!/bin/sh

set -e

MASK="WEB_APP_"

export WEB_APP_ONE="Backslashes\ and\n quotes \"example\""
export WEB_APP_TWO="ordinary string"
export WEB_APP_THREE="slash/equals = something"
export WEB_APP_DIGITS=123
export WEB_APP_BOOL1=true
export WEB_APP_BOOL2=false

RESULT=$(sh ./env-to-json.sh $MASK)

EXPECTED_RESULT='{"WEB_APP_THREE":"slash/equals = something","WEB_APP_DIGITS":123,"WEB_APP_BOOL2":"false","WEB_APP_BOOL1":true,"WEB_APP_TWO":"ordinary string","WEB_APP_ONE":"Backslashes\ and\n quotes \"example\""}'

test "$RESULT" = "$EXPECTED_RESULT" && echo "Test 1 OK" || ( echo Test failed && echo Expected result:; echo $EXPECTED_RESULT; echo but have got this:; echo $RESULT ) >&2

# test empty case
test "$(sh ./env-to-json.sh NO_MATCHES_MASK_)" = "{}" && echo "Test 2 OK" || echo "Test for empty case failed" >&2
