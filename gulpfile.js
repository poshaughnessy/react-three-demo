/**
 * NB. The gulpfile isn't ES6 yet - looks like we need to wait for Gulp v0.4:
 * https://github.com/gulpjs/gulp/issues/830
 */

// Enable ES6 - this will make it automatically transpile required files. See: http://babeljs.io/docs/usage/require/
require('babel/register');

// TEMP fix for this issue: https://github.com/babel/babel/issues/489
Object.getPrototypeOf.toString = function() {return Object.toString();};

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    fs = require('fs'),
    path = require('path'),
    server = require('./server'),
    Builder = require('systemjs-builder');

/**
 * SystemJS / Babel build
 */
function buildJS(isForProd) {

    return new Promise(function(resolve, reject) {

        var builder = new Builder();

        builder.reset();

        builder.loadConfig('./config.js')
            .then(function() {

                //builder.loader.baseURL = path.resolve('.');

                var hrTime = process.hrtime();
                var t1 = hrTime[0] * 1000 + hrTime[1] / 1000000;

                console.log('Building bundle...');

                // Make a Self-Executing (SFX) bundle
                builder.buildSFX('src/main', isForProd ? 'dist/js/bundle.min.js' : 'dist/js/bundle.js',
                    {minify: isForProd, sourceMaps: isForProd})
                    .then(function() {

                        hrTime = process.hrtime();
                        var t2 = hrTime[0] * 1000 + hrTime[1] / 1000000;

                        console.log('Bundle built in ' + Math.round(t2-t1) + ' ms' );

                        resolve();

                    })
                    .catch(function(err) {
                        console.log('Error!', err);
                        reject(Error('Builder error'));
                    });
            })

    });

}

/**
 *  Compile and concatenate the SCSS files into dist/styles.css
 */
gulp.task('sass', function() {

    return gulp.src('./styles/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/css'));

});

/**
 * Build JS for development
 */
gulp.task('build-dev', function(cb) {

    return buildJS(false).then(function() {

        gulp.src('src/index.html')
            .pipe(gulp.dest('dist'));

    });

});

/**
 * Build JS for production
 */
gulp.task('build-prod', function() {

    return buildJS(true).then(function() {

        gulp.src('src/index.html')
            .pipe(replace(/bundle/g, 'bundle.min'))
            .pipe(gulp.dest('dist'));

    });

});

/**
 * Compile SCSS
 */
gulp.task('compile-dev', ['sass', 'build-dev'], function() {
});

/**
 * Compile and watch for changes
 */
gulp.task('watch', ['compile-dev'], function() {
    gulp.watch('./styles/*.scss', ['sass']);
    gulp.watch('./src/**/*.js', ['build-dev']);
});

/**
 * Compile and start watching, then start the development server
 * (Production doesn't use gulp for the server, just for building beforehand).
 */
gulp.task('serve', ['watch'], function() {
    server.start();
});

/**
 * By default, runs the compile task
 */
gulp.task('default', ['compile-dev'], function() {
});
