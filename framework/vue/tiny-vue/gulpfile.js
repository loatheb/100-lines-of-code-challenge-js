var gulp = require('gulp'),
    rjs = require('gulp-requirejs');
//
// gulp.task('requirejsBuild', function() {
//     return rjs({
//         name: 'index',
//         baseUrl: './scripts',
//         out: 'tinyVue.js',
//         include: [
//             'require'
//         ]
//     })
//     .pipe(gulp.dest('./dist/'));
// });
// gulp.task('default', ['requirejsBuild']);

var rjs = require("gulp-r");
gulp.task('requirejsBuild', function () {
    gulp.src("./scripts/index.js")
        .pipe(rjs({
            "baseUrl": "./scripts",
            "name": require.resolve("almond")
        }))
        .pipe(gulp.dest("dist/scripts"));
})
gulp.task('default', ['requirejsBuild']);
