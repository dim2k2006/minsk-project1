import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => (
	runSequence(
		'clean',
		'markup',
		'styles-dependencies',
		'styles',
		'scripts-dependencies',
		'scripts',
		'images',
		'copy',
		'connect',
		'watch'
	)
));