const gulp = require("gulp");
const rename = require("gulp-rename");
const iconfont = require("gulp-iconfont");
const consolidate = require("gulp-consolidate");

/**
 * Font settings
 */
const fontName = "symbols"; // set name of your symbol font
const className = "css-icon"; // set class name in your CSS
const template = "fontawesome-style"; // or 'foundation-style'

/**
 * Recommended to get consistent builds when watching files
 * See https://github.com/nfroidure/gulp-iconfont
 */
const timestamp = Math.round(Date.now() / 1000);

function symbols(cb) {
  gulp
    .src(["./svgs/*.svg"])
    .pipe(
      iconfont({
        fontName,
        formats: ["ttf", "eot", "woff", "woff2", "svg"],
        timestamp,
        log: () => {} // suppress unnecessary logging
      })
    )
    .on("glyphs", glyphs => {
      const options = {
        className,
        fontName,
        fontPath: "../fonts/", // set path to font (from your CSS file if relative)
        glyphs: glyphs.map(mapGlyphs)
      };
      gulp
        .src(`templates/${template}.css`)
        .pipe(consolidate("lodash", options))
        .pipe(rename({ basename: fontName }))
        .pipe(gulp.dest("dist/css/")); // set path to export your CSS

      // if you don't need sample.html, remove next 4 lines
      gulp
        .src(`templates/${template}.html`)
        .pipe(consolidate("lodash", options))
        .pipe(rename({ basename: "sample" }))
        .pipe(gulp.dest("dist/")); // set path to export your sample HTML
    })
    .pipe(gulp.dest("dist/fonts/")); // set path to export your fonts
  cb();
}

exports.buildFontAndCss = gulp.task("buildFontAndCss", symbols);

/**
 * This is needed for mapping glyphs and codepoints.
 */
function mapGlyphs(glyph) {
  return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) };
}
