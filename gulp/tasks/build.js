import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', () => (
	runSequence(
		'clean',
		'markup',
		'styles-dependencies',
		'styles',
		'images',
		'copy',
		'svg'
	)
));