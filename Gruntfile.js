module.exports = function(grunt){
	
	// Load Grunt tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	grunt.initConfig({
		watch: {
			karma: {
				files: ['angular-starts-with-filter.js', 'test/{,**/}*.js'],
				tasks: ['karma:unit']
			},
			js: {
				files: ['angular-starts-with-filter.js', 'test/{,**/}*.js', '*.css'],
				tasks: ['build']
			}
		},

		bump: {
			options: {
				commitMessage: 'chore: release v%VERSION%',
				commitFiles: ['package.json', 'bower.json', 'angular-starts-with-filter.min.js'],
				files: ['package.json', 'bower.json'],
				pushTo: 'origin'
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			},
		},

		jshint: {
			all: ['Gruntfile.js', 'angular-starts-with-filter.js', 'test/*.js']
		},

		ngmin: {
			dist: {
				files: {
					'angular-starts-with-filter.min.js': ['angular-starts-with-filter.js']
					
				}
			}
		},

		'npm-contributors': {
			options: {
				commitMessage: 'chore: update contributors'
			}
		},

		uglify: {
			options: {
				mangle: false
			},
			dist: {
				files: {
					'angular-starts-with-filter.min.js': ['angular-starts-with-filter.min.js'],
					'angular-starts-with-filter.min.css': ['angular-starts-with-filter.min.css']
				}
			}
		},
		
		copy: {
			example: {
				src: ['angular-starts-with-filter.js', 'angular-starts-with-filter.css'],
				dest: 'example/',
			}
		}
		
	});
	
	grunt.registerTask('test', [
		'jshint:all',
		'karma:unit'
	]);
	
	grunt.registerTask('build', [
		'jshint:all',
		'ngmin',
		'uglify',
		'copy:example'
	]);
	
	// Default task
	grunt.registerTask('default', ['watch']);
};