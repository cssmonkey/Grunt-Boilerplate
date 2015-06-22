module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
         browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'assets/js/*.js',
                        'assets/css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/css/style.css': 'assets/sass/style.scss'
                }
            }
        },
        watch: {
            js: {
                files: ["assets/js/**/*.js"],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ["assets/sass/**/*.scss"],
                tasks: ['sass'],
                 options: {
                    livereload: true
                }
            },

        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task definitions
    grunt.registerTask('serve', ['browserSync', 'watch']);
};