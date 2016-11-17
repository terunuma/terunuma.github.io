var gulp    = require('gulp');
var fs      = require('fs');
var ejs     = require('gulp-ejs');
var plumber = require('gulp-plumber');

var appDir    = './app/'
var publicDir = '../';

gulp.task('ejs', function() {
    var json = JSON.parse(fs.readFileSync(appDir + 'variables.json'));
    gulp.src([appDir + 'ejs/*.ejs'])
        .pipe(plumber({
            handleError: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(ejs(json))
        .pipe(gulp.dest(publicDir));
});