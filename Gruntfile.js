module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    hostname: '*',
                    open: true,
                    keepalive: true
                }
            }
        },
        'gh-pages': {
            options: {
                clone: 'bower_components/aha-table'
            },
            src: [
                'bower_components/**/*',
                '!bower_components/aha-table/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        },
        'less' : {
          build : {
            options : {
              compress : true
            },
            files : [{
              expand: true,
              cwd: 'src/styles/',
              src: '**/*.css',
              dest: 'dist/styles/'
            }]
          }
        },
        'replace': {
            example: {
                src: ['src/*.html'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('build',  ['less', 'replace']);
    grunt.registerTask('deploy', ['build', 'gh-pages']);
    grunt.registerTask('server', ['build', 'connect']);

};
