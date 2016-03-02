import gulp         from 'gulp';
import inline       from 'gulp-inline';
import settings     from '../settings';

gulp.task('svg', () => {
	gulp.src(settings.baseDist + '/*.html')
		.pipe(inline({
			base: 'static/',
			disabledTypes: ['css', 'img', 'js']
		}))
		.pipe(gulp.dest(settings.baseDist));
});