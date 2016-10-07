// gulpfile.js
var gulp = require('gulp'),
    bundle = require('gulp-bundle-assets');

gulp.task('bundle1', function() {
    return gulp.src('./bundle.1.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./scripts/bundles'));
});