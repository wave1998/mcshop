var gulp = require("gulp")
var cleanCss = require("gulp-clean-css")
var concat = require("gulp-concat")
var rename = require("gulp-rename")
var sass = require("gulp-sass")
var connect = require("gulp-connect")
const open = require("open")

gulp.task("sass",function(){
    return gulp.src("sass/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("css/"))
    .pipe(connect.reload())
})

gulp.task("server",["default"],function(){
    connect.server({
        root:"./",
        port:1998,
        livereload:true
    });
    open("http://localhost:1998/");
    gulp.watch("./sass/index.scss",["sass"])
})
gulp.task("default",["sass"])