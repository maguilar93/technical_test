const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task("styles", async function() {
    gulp
      .src("sass/**/*.scss")
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest("./css"))
      .pipe(browserSync.stream());
  });
  

  gulp.task("default", ["styles"], function() {
    gulp.watch("sass/**/*.scss", ["styles"]);
  
    browserSync.init({
      server: {
        index: "./question_6.html"
      }
    });
  });