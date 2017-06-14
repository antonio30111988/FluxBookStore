var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
// in order to convert the gulp string to the output stream to be used by browserify input stream
var source =  require('vinyl-source-stream');

//define the gulp tasks
gulp.task('browserify', function(){
	browserify('./src/js/main.js')
	.transform('reactify') //output of JSX to be transformed by reactify into js
	.bundle() //output of that has to be bundled
	.pipe(source('main.js'))
	.pipe(gulp.dest('dest/js'));
  });

gulp.task('copy',function(){
	gulp.src('src/index.html')
		.pipe(gulp.dest('dest'));
	gulp.src('src/assets/**/*.*')
	        .pipe(gulp.dest('dest/assets'));

});

gulp.task('default',['browserify', 'copy'], function(){
	return gulp.watch('src/**/*.*', ['browserify','copy']) //watch for any change in the js and rerun the tasks defined in the gulpfile.
});




