/**
 * Created by chenzhen on 15/12/14.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
//
gulp.task('js', function(){
    gulp.src(['src/js/*.js', 'src/js/**/*.js', '!src/js/vendor/*.js'])
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(gulp.dest('assets/js'))
});

//
gulp.task('vendor-js', function(){
    gulp.src([
        'src/js/vendor/angular.min.js',
        'src/js/vendor/angular-animate.min.js',
        'src/js/vendor/angular-ui-router.min.js',
        'src/js/vendor/off-canvas.js',
        ])
        .pipe(concat('vendor.js'))
        //.pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(gulp.dest('assets/js'))
});

gulp.task('sass', function(){
    //gulp.src(['src/sass/app.scss'])
    //    .pipe(sass())
    //    .pipe(gulp.dest('assets/css'));
    return sass('src/sass/app.scss')
            .on('error', sass.logError)
            //.pipe(minifyCss())
            .pipe(gulp.dest('assets/css'));
})

gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
})

// define the default task
gulp.task('default', ['watch', 'vendor-js', 'sass']);