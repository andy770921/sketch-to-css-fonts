
## Introduction 

This repo are able to convert your sketch file into css and fonts files.
<div style="text-align: center">
<img src="https://github.com/andy770921/sketch-to-css-fonts/blob/master/readme-Imgs/pic1.png"/>
</div>

<div style="text-align: center">
<img src="https://github.com/andy770921/sketch-to-css-fonts/blob/master/readme-Imgs/pic2.png"/>
</div>

## Installation:

1. Install all packages:
   `npm install`

## Usage:

1. put your source `.sketch` file in the folder `/sketch`

2. Single command for total conversion process:
   `npm run convert`

3. final css and fonts files will be exported in the `/dist` folder   

## GitHub Action

1. You can replace `demo.sketch` with your customized `.sketch` file in the folder `/sketch`

2. when an new commit pushes into Repo, the workflows of GitHub Action will be fired.

3. After all command is done, you will get an `artifact` zip file which contains fonts and css.

<div style="text-align: center">
<img src="https://github.com/andy770921/sketch-to-css-fonts/blob/master/readme-Imgs/pic3.png"/>
</div>

## Detail:

1. The sketchtool cli, offered by [Sketch B.V.](https://developer.sketch.com/cli/), was executed for converting `.sketch` into `.svg`

2. The gulp-related packages was used for converting `.svg` into `.css`, `.ttf`, `.eot`, `.woff`, `.woff2`, `.svg`, and sample html.

3. Beacuse of the compatibility of sketchtool, this repo can **only run in Mac-OS**.



