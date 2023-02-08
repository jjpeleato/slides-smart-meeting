'use strict';

/**
 * Import config file and required resources.
 */
import config from './../config';
import del from 'del';

/**
 * Delete all files.
 */
function clean()
{
	return del([
		config.paths.sassAssets.dest,
		config.paths.sassAssets.destVendor,
		config.paths.jsAssets.dest,
		config.paths.jsAssets.destVendor,
	]);
}

exports.clean = clean;
