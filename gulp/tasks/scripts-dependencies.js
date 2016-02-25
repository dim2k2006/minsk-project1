import gulp       from 'gulp';
import glob       from 'glob';
import file       from 'gulp-file';
import fileExists from 'file-exists';
import settings   from '../settings';

gulp.task('scripts-dependencies', () => {
    let levels = glob.sync(settings.baseSrc + '/blocks/*/'),
        str = '';

    levels.map(level => {
    	let block = level.split('/').reverse()[1],
    		file = level + block + '.js';

    	if (fileExists(file)) {
    		str += "require(\"../blocks/" + block + "/" + block + ".js\");\n";
    	}
    });

    return file('main.js', str, { src: true }).pipe(gulp.dest(settings.src.scripts));
});