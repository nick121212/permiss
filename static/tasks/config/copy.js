/**
 * Created by NICK on 15/11/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

module.exports = function (grunt) {
    grunt.config.set('copy', {
        js_files: {
            files: [{
                expand: true,
                src: ['**/*.js', '**/*.html', '**/*.json'],
                cwd: 'js/',
                dest: 'dest/js/'
            }]
        },
        css_files: {
            files: [{
                expand: true,
                src: ['**'],
                cwd: 'contents',
                dest: 'dest/contents/'
            }]
        },
        html_files: {
            files: [{
                src: ['index_product.html'],
                cwd: './',
                dest: 'dest/index.html'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};