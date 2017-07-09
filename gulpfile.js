var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var del = require('del');
var htmlreplace = require('gulp-html-replace');
var rename = require('gulp-rename');
var insert = require('gulp-insert');

var resource_dir = __dirname + '/vendor';
var output_dir = __dirname + '/docs';
var output_temp_dir = __dirname + '/docs/temp';
var app_js = "app.vendor.js";
var app_css = "app.vendor.css";

gulp.task('clean', function() {
    return del([output_dir + '/*']);
});

gulp.task('copy-js', function() {
    return gulp.src([
             resource_dir + '/js/*'
        ])
        .pipe(gulp.dest(output_temp_dir+'/js'));
});

gulp.task('copy-css', function() {
    return gulp.src([
             resource_dir + '/css/startup-materialize.min.css'
        ])
        .pipe(gulp.dest(output_temp_dir+'/css'));
});

gulp.task('copy-style-css', function() {
    return gulp.src([
            resource_dir + '/css/custom-release.css'
    ])
    .pipe(gulp.dest(output_dir+'/css'));
});

gulp.task('copy-init-js', function() {
    return gulp.src([
            resource_dir + '/js/jquery.min.js',
            resource_dir + '/js/materialize.min.js',
            resource_dir + '/js/imagesloaded.pkgd.min.js',
            resource_dir + '/js/masonry.pkgd.min.js',
            resource_dir + '/js/TweenMax.min.js',
            resource_dir + '/js/ScrollMagic.min.js',
            resource_dir + '/js/animation.gsap.min.js',
            resource_dir + '/js/startup.js',
            resource_dir + '/js/init.js'
        ])
        .pipe(gulp.dest(output_dir+'/js'));
});

gulp.task('copy-images', function() {
    return gulp.src([
            resource_dir + '/images/*',
            resource_dir + '/images/*/**'
        ])
        .pipe(gulp.dest(output_dir+'/images'));
});

gulp.task('copy-fonts', function() {
    return gulp.src([
             resource_dir + '/fonts/*/**',
        ])
        .pipe(gulp.dest(output_dir+'/fonts'));
});

gulp.task('copy-sites', function() {
    return gulp.src([
            __dirname + '/favicon.ico',
            __dirname + '/CNAME',
            __dirname + '/index.html',
        ])
        .pipe(gulp.dest(output_dir));
});

gulp.task('copy-en-index', function() {
    return gulp.src([
            __dirname + '/index.html',
        ])
        .pipe(gulp.dest(output_dir+'/id'));
});

gulp.task('copy-id-index', function() {
    return gulp.src([
            __dirname + '/index.html',
        ])
        .pipe(gulp.dest(output_dir+'/id'));
});

gulp.task('concat-js', function() {
    return gulp.src([
            output_temp_dir + '/js/jquery.min.js',
            output_temp_dir + '/js/materialize.min.js',
            output_temp_dir + '/js/imagesloaded.pkgd.min.js',
            output_temp_dir + '/js/masonry.pkgd.min.js',
            output_temp_dir + '/js/TweenMax.min.js',
            output_temp_dir + '/js/ScrollMagic.min.js',
            output_temp_dir + '/js/animation.gsap.min.js'
        ])
        .pipe(concat(app_js))
        .pipe(gulp.dest(output_dir+'/js'));
});

gulp.task('concat-css', function() {
    return gulp.src([
             output_temp_dir + '/css/*.css'
        ])
        .pipe(concat(app_css))
        .pipe(gulp.dest(output_dir+'/css'));
});

gulp.task('replace-en-html', function() {
  gulp.src(__dirname+'/index.html')
    .pipe(htmlreplace(
    {        
        htmlLang: {
            src: 'en',
            tpl: '<html lang="%s">'
        },
        htmlTitle:{
            src: 'Epoker88 - The best and trusted online mobile poker cummunity in Indonesia. Using local currency on playing chips.',
            tpl: '<title>%s</title>'
        },
        app:{
            src: 'app',
            tpl: '<div id="%s" class="section">Loading...</div>'
        },
        customCSS: {
            src: 'css/custom-release.css',
            tpl: '<link rel="stylesheet" href="%s">'
        },
        vendorCSS: {
            src: 'css/app.vendor.css',
            tpl: '<link rel="stylesheet" href="%s">'
        },
        vendorJS: {
            src: 'js/app.vendor.js',
            tpl: '<script src="%s"></script>'
        }
    }))
    .pipe(gulp.dest(output_dir));
});

gulp.task('replace-id-html', function() {
  gulp.src(__dirname+'/index.html')
    .pipe(htmlreplace(
    {
        htmlLang: {
            src: 'id',
            tpl: '<html lang="%s">'
        },
        htmlTitle:{
            src: 'Epoker88 - online poker ponsel terbaik dan terpercaya untuk komunitas di indoneia. menggunakan mata uang lokal untuk koin bermain.',
            tpl: '<title>%s</title>'
        },
        app:{
            src: 'app_id',
            tpl: '<div id="%s" class="section">Loading...</div>'
        },
        customCSS: {
            src: 'css/custom-release.css',
            tpl: '<link rel="stylesheet" href="%s">'
        },
        vendorCSS: {
            src: 'css/app.vendor.css',
            tpl: '<link rel="stylesheet" href="%s">'
        },
        vendorJS: {
            src: 'js/app.vendor.js',
            tpl: '<script src="%s"></script>'
        }
    }))
    .pipe(gulp.dest(output_dir+'/id'));
});

gulp.task('finish-task', function() {
    return del(output_temp_dir);
});

gulp.task('default', function() {
    runSequence('clean',['copy-js','copy-css','copy-init-js','copy-style-css','copy-images','copy-fonts','copy-sites','copy-id-index'],['concat-js','concat-css'],['replace-en-html','replace-id-html'],'finish-task');
});