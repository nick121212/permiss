/**
 * Created by NICK on 15/11/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

//@import url("ng-animate/ng-animation.css");
//@import url("../node_modules/angular-material/angular-material.css");
//@import url("../node_modules/angular-material-icons/angular-material-icons.css");
//@import url("../node_modules/angular-loading-bar/build/loading-bar.css");
//@import url("docs.css");
//@import url("ng-material/angular-material-sidenav.css");
//@import url("ng-material/angular-material-datatable.css");
//@import url("login.css");
//@import url("gridtiles.css");

module.exports = function (grunt) {
    grunt.config.set('concat', {
        css: {
            src: [
                'node_modules/angular-material/angular-material.css',
                'node_modules/angular-material-icons/angular-material-icons.css',
                'node_modules/angular-loading-bar/build/loading-bar.css',
                'dest/contents/ng-animate/ng-animation.css',
                'dest/contents/docs.css',
                'dest/contents/ng-material/angular-material-sidenav.css',
                'dest/contents/ng-material/angular-material-datatable.css',
                'dest/contents/login.css',
                'dest/contents/loading.css',
                'dest/contents/gridtiles.css'
            ],
            dest: 'dest/contents/dashboard.min.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
};