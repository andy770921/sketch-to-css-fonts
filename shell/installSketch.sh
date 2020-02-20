#!/bin/sh
rm -Rf temp
mkdir temp
cd temp
curl -L -o sketch.zip http://www.sketchapp.com/download/sketch.zip
unzip -q sketch.zip
rm -Rf sketch.zip