var gulp = require('gulp');
var webserver = require('gulp-webserver');

var app = {
    srcPath: 'src/',
    devPath: 'build/'
};



gulp.task('webserver', function() {
    gulp.src(app.srcPath)
        .pipe(webserver({
            livereload: false,
            directoryListing: true,
            open: false
        }));
});