import gulp       from 'gulp';
import glob       from 'glob';
import file       from 'gulp-file';
import fileExists from 'file-exists';
import minifyCss  from 'gulp-minify-css';
import concatCss  from 'gulp-concat-css';
import settings   from '../settings';
import vendor     from '../../package.json';

gulp.task('styles-dependencies', () => {
    gulp.src(vendor.vendorStyles.path, {base: './src/bower_components/'})
        .pipe(concatCss('vendor.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(settings.dist.styles))

    let levels = glob.sync(settings.baseSrc + '/blocks/*/'),
        str = '';

    levels.map(level => {
    	let block = level.split('/').reverse()[1],
    		file = level + block + '.scss';

    	if (fileExists(file)) {
            str += "@import \"../blocks/" + block + "/" + block + ".scss\";\n";
    	}
    });

    return file('blocks.scss', str, { src: true }).pipe(gulp.dest(settings.src.styles));
});