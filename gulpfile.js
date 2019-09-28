const gulp  = require("gulp");
const cleancss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const imagemin = require("gulp-imagemin");
const babel = require('gulp-babel');
const rename = require('gulp-rename');

// 压缩css
gulp.task("css",function(){
    gulp.src("./src/static/css/*.css")
    .pipe(cleancss())
    .pipe(gulp.dest("./dest/static/css"))
});

// 压缩js失败
gulp.task("js",function(){
     gulp.src("./src/static/js/promise.js")
     .pipe(babel({
         presets: ['es2015'] 
     }))
    .pipe(uglify())
    .pipe(gulp.dest("./dest/static/js"))
})

// 压缩html
gulp.task("html",function(){
    gulp.src("./src/templates/*.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("./dest/templates"))
})
gulp.task("htmlindex",function(){
    gulp.src("./src/index.html")
    .pipe(htmlmin())
    .pipe(gulp.dest("./dest"))
})
// 压缩图片
gulp.task('image',function(){
    gulp.src('./src/static/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true, 
            interlaced: true, 
        }))
        .pipe(gulp.dest('./dest/static/images'))
})