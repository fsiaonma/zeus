var gulp = require("gulp");
var connect = require("gulp-connect");
var ejs = require("gulp-ejs");
var less = require("gulp-less");
var cssmin = require('gulp-minify-css');

gulp.task("connectDev", function () {
	connect.server({
		root: ["./"],
		port: 3333,
		livereload: true
	});
});
 
gulp.task("less", function () {
    gulp.src("app/**/*.less")
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
});

gulp.task("watch", function () {
	gulp.watch(["./app/**/less/*.less"], ["less"]);
});
 
gulp.task("default", [
	"less",
	"connectDev", 
	"watch"
]);