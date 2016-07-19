'use strict';

var path = require('path');
var zip = require('gulp-zip');

var TASK_PLUGIN_WAR = 'plugin:war';

module.exports = function(options) {
	var gulp = options.gulp;

	gulp.task(TASK_PLUGIN_WAR, function() {
		return gulp.src(path.join(options.rootDir, '**/*'))
			.pipe(zip(options.distName + '.war'))
			.pipe(gulp.dest(options.pathSrc));
	});

	gulp.task('build', [TASK_PLUGIN_WAR]);
};
