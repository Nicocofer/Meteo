var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
var browserSync = require('browser-sync');



/***** lance gulp avec toutes les fonctions ****/

gulp.task('default', ['refresh','compress','image','sass'],function() {
	gulp.watch('assets/scss/*.scss', ['sass']);
	gulp.watch('assets/js/*.js', ['compress']);
	gulp.watch('assets/img/*', ['image']);
	gulp.watch('dist/css/min/*.css', ['minify-css']);

});



/**** CSS optimisation *****/
gulp.task('sass', function () {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()) /* necessaire pour refresh avec browser-sync **/
});
 
gulp.task('sass:watch', function () {
  gulp.watch('assets/scss/*.scss', ['sass']);
});


// gulp.task('cleancss', () => {
//   return gulp.src('dist/css/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('dist/css/min'));
// });




/**** img opti ****/

gulp.task('image', () =>
    gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream())
);





/***** Js opti *****/


gulp.task('compress', function() {
  gulp.src('assets/js/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
});


/****** browser-sync *****/

gulp.task('refresh', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});