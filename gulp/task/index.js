'use strict';

/**
 * Import all required functions.
 */
import gulp from 'gulp';
import { clean } from './clean';
import { css } from './styles';
import { cssAssets } from './styles';
import { fontAssets } from './styles';
import { js } from './scripts';
import { jsAssets } from './scripts';
import { jsCopy } from './scripts';
import { validateJs } from './scripts';
import { validateScss } from './styles';
import { watch } from './watch';

/**
 * All tasks to run.
 */
gulp.task(
	'default',
	gulp.series(
		clean,
		validateScss,
		css,
		cssAssets,
		fontAssets,
		validateJs,
		js,
		jsAssets,
		jsCopy,
	)
);
gulp.task('clean', clean);
gulp.task('css', css);
gulp.task('cssAssets', cssAssets);
gulp.task('fontAssets', fontAssets);
gulp.task('js', js);
gulp.task('jsAssets', jsAssets);
gulp.task('jsCopy', jsCopy);
gulp.task('validate', gulp.series(
	validateScss,
	validateJs,
));
gulp.task('validateJs', validateJs);
gulp.task('validateScss', validateScss);
gulp.task('watch', watch);
