/**
 * Created by NICK on 15/11/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


module.exports = function (grunt) {
    grunt.config.set('replace', {
        env: {
            src: ['dest/js/dashboard.js'],
            overwrite: true,
            replacements: [{
                from: '\"dev\"',
                to: '\"pro\"'
            }]
        },
        version: {
            src: ['dest/js/dashboard.js', 'dest/index.html'],
            overwrite: true,
            replacements: [{
                from: '@@version',
                to: new Date().valueOf()
            }]
        }
    });

    grunt.loadNpmTasks('grunt-text-replace');
};