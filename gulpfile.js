const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-dart-sass");

const path = {
    "css" : "./src/scss/**/*.scss"
}

function compilarCss(){
    return src(path.css)
        .pipe( sass() )
        .pipe( dest("./build/css") )
}

function watchArchivos(){
    watch( path.css, compilarCss );
}

exports.compilarCss = compilarCss;
exports.watchArchivos = watchArchivos;