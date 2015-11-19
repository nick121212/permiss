/**
 * Created by NICK on 15/11/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

module.exports = function (grunt) {
    grunt.config.set('less', {
        compileCore: {
            options: {
                strictMath: true,
                sourceMap: false,
                outputSourceFiles: true,
                compress: true,
                strictImports: false,
                syncImport: true
//                sourceMapURL: '<%= pkg.name %>.css.map',
//                sourceMapFilename: '../css/<%= pkg.name %>.css.map'
            },
            src: 'dest/contents/dashboard.less',
            dest: 'dest/contents/dashboard1.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
};