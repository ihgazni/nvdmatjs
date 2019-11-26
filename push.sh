#!/bin/bash
git add .
git commit -m $1

set -x
XYZ=$(expect -c "
    spawn git push origin master
    expect \": \"
    send \"${2}\r\"
    expect \": \"
    send \"${3}\r\"
    expect \"${PWD}\"
    send \"ls -l\r\"
")

