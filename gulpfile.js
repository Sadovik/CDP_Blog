var gulp = require('gulp'),
    compass = require('gulp-compass'),
    spritesmith = require('gulp.spritesmith');

gulp.task('default', function() {

});

gulp.task('compass', function() {
    gulp.src('./app/scss/**/*.scss')
        .pipe(compass({
            css: 'app/css',
            sass: 'app/scss',
            image: 'app/images',
            //style: 'compressed'
            style: 'expanded'
        }))
        .on('error', function(error) {
            // Would like to catch the error here
            console.log(error);
            this.emit('end');
        })
        .pipe(gulp.dest('app/css'));
});

gulp.task('sprite', function () {
    var spriteData = gulp.src('./app/images/icons/*.png')
        .pipe(spritesmith({
        imgName: '../images/sprite.png',
        cssName: '_sprite.scss',
        algorithm: 'top-down',
        padding: 20
    }));
    spriteData.img.pipe(gulp.dest('./app/images/'));
    spriteData.css.pipe(gulp.dest('./app/scss/modules/'));
});

gulp.task('watch', function() {
    gulp.watch('./app/scss/**/*.scss',['compass'])
});