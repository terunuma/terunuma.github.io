// Links:
//   http://qiita.com/y_hokkey/items/31f1daa6cecb5f4ea4c9
//   

var gulp    = require('gulp');
var fs      = require('fs');
var ejs     = require('gulp-ejs');
var plumber = require('gulp-plumber');

var appDir    = './app/'
var publicDir = '../';

gulp.task('ejs', function() {
    var json = JSON.parse(fs.readFileSync(appDir + 'ejs_option.json'));
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