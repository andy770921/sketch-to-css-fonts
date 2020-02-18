#!/bin/sh
cd temp/Sketch.app/Contents/MacOS/
chmod +x ./sketchtool
sw_vers
ls
./sketchtool export slices ../../../../sketch/demo.sketch --output=../../../../svgs --formats=svg