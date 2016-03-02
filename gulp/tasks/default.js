import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => (
	runSequence(
		'clean',
		'markup',
		'styles-dependencies',
		'styles',
		'images',
		'copy',
		'svg',
		'connect',
		'watch'
	)
));