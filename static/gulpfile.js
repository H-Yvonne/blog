var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var fpath = {
    'scss': 'scss/!(core)*/*.scss'
};

gulp.task('watch:style', function () {
    gulp.watch(fpath['scss'], function (e) {
        compileScss(e.path);
    });
});

function compileScss (path) {
    return gulp.src(path)
        .pipe($.changed('.tmp/css', {extension: 'css'}))
        .pipe($.sourcemaps.init())
        .pipe($.sass({precision:10}).on('error',$.sass.logError))
        .pipe(gulp.dest('.tmp/css'))
        .pipe($.if('*.css', $.minifyCss()))
        .pipe($.sourcemaps.write('./map'))
        .pipe(gulp.dest('./css'))
        .pipe($.size({title:'style'}))
}