import gulp        from 'gulp';
import runSequence from 'run-sequence';
import { reload }  from 'browser-sync';
import watch       from 'gulp-watch';
import settings    from '../settings';

gulp.task('watch', () => {
    watch([`${settings.baseSrc}/{sass,blocks}/**/*.scss`], function(event, cb) {
        gulp.start('styles');
    });

    watch([`${settings.baseSrc}/blocks/**/*.js`], function(event, cb) {
        runSequence('scripts', reload)
    });

    watch([`${settings.baseSrc}/{pages,jade,blocks}/**/*.jade`], function(event, cb) {
    	runSequence('markup', reload)
  	});

    watch(['package.json'], function(event, cb) {
        runSequence('styles-dependencies', 'styles', 'scripts-dependencies', 'scripts', reload)
    });

  	watch([`${settings.src.images}/*.{jpg,png,svg}`], function(event, cb) {
    	runSequence('images', reload)
  	});
});