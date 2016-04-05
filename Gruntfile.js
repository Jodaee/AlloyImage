module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        concat: {
            dist: {
                src: ['new/*.js'],
                dest: 'dist/alloyimage.js'
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: {
                    'tnew/all.js': 'new/*.js'
                }
            }
        }
        
    });

    grunt.registerTask('default', ['babel']);
};
