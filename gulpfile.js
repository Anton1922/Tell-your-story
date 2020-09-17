const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const gcmq = require('gulp-group-css-media-queries');

gulp.task('sass', function() {
  return gulp
  .src('./src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer({
    cascade: false,
    grid: true
  }))
  .pipe(gcmq())
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp
  .src('./src/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(concat('index.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.stream());
});

gulp.task('watch', function () {
  browserSync.init({
    server:'./dist'
  });
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));
  gulp.watch("./dist/*.html").on("change", browserSync.reload);
});
