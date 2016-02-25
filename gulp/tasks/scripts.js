import gulp         from 'gulp';
import uglify       from 'gulp-uglify';
import source       from 'vinyl-source-stream';
import buffer       from 'vinyl-buffer';
import browserify   from 'browserify';
import errorHandler from '../utils/errorHandler';
import settings     from '../settings';

gulp.task('scripts', () => {
	let bundler = browserify(`${settings.src.scripts}/main.js`, { debug: true });
	return bundler
		.bundle()
		.on('error', function(err) { console.error(err); this.emit('end'); })
		.pipe(source('build.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(settings.dist.scripts));
});