## Introduction

This repo is able to convert your sketch file into css and icon-fonts files.

<div align="center">
<img src="https://github.com/andy770921/sketch-to-css-fonts/blob/master/readme-Imgs/pic1.png"/>
</div>
<div align="center">
<img src="https://github.com/andy770921/sketch-to-css-fonts/blob/master/readme-Imgs/pic2.png"/>
</div>

## Installation:

1. Install all packages:
   `npm install`

## Usage:

1. Put your source `.sketch` file in the folder `/sketch`.

2. One command for entire conversion process:
   `npm run convert`

3. Final css and fonts files will be exported in the `/dist` folder.

```
  dist
    ├── sample.html           # html file for listing all icons
    ├── css                   # css file
    │    └──    symbols.css
    └── fonts                 # icon-font file
         ├──    symbols.woff
         ├──    symbols.woff2
         ├──    symbols.eot
         ├──    symbols.svg
         └──    symbols.ttf
```

## GitHub Actions:

<div align="center">
   <img src="https://github.com/andy770921/sketch-to-css-fonts/blob/master/readme-Imgs/pic4.png"/>
</div>

1. Replace `demo.sketch` with your customized `.sketch` file in the folder `/sketch`.

2. When an new commit pushes into Repo, the workflows of GitHub Actions will be fired.

3. After all commands are done, you will get an `artifact.zip` file, which contains fonts and css.

<div align="center">
   <img src="https://github.com/andy770921/sketch-to-css-fonts/blob/master/readme-Imgs/pic3.png"/>
</div>
  
4. Import a single line in your `HTML` file and use your own icons!
```html
// Import css
<link rel='stylesheet' href='https://your.domain.com/symbols.css />
```
```html
// An Example of using icon
<div class="css-icon css-icon-YOUR_ICON_NAME_HERE"></div>
```

## Details:

1. The sketchtool cli, offered by [Sketch B.V.](https://developer.sketch.com/cli/), was executed for converting `.sketch` into `.svg`.

2. The gulp-related packages was used for converting `.svg` into `.css`, `.ttf`, `.eot`, `.woff`, `.woff2`, `.svg`, and `sample.html`.

3. Because of the compatibility of the sketchtool, this repo can **only run in Mac-OS** locally.

4. GitHub Actions supports Mac-OS runner, so output file `artifact.zip` can be downloaded in GitHub website, no matter what your local Operating System is.

## Acknowledgement:

[Symbols for Sketch Repo](https://github.com/cognitom/symbols-for-sketch)
