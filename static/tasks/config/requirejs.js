/**
 * Created by NICK on 15/11/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

module.exports = function (grunt) {
    grunt.config.set('requirejs', {
        compile: {
            options: {
                baseUrl: "js",
                mainConfigFile: "js/main.js",
                out: "dest/js/dashboard.js",
                almond: true,
                paths: {
                    'main': 'main',
                    'angular': '../node_modules/angular/angular',
                    'angular-ui-route': '../node_modules/ui-router/release/angular-ui-router',
                    'angular-permission': '../node_modules/angular-permission/dist/angular-permission',
                    'angular-animate': '../node_modules/angular-animate/angular-animate',
                    'angular-aria': '../node_modules/angular-aria/angular-aria',
                    'angular-cookies': '../node_modules/angular-cookies/angular-cookies',
                    'angular-material': '../node_modules/angular-material/angular-material',
                    'schemaForm': '../node_modules/angular-schema-form/dist/schema-form',
                    'angular-sanitize': '../node_modules/angular-sanitize/angular-sanitize',
                    'objectpath': '../node_modules/objectpath/lib/objectpath',
                    'tv4': '../node_modules/tv4/tv4',
                    'angular-material-icons': '../node_modules/angular-material-icons/angular-material-icons',
                    'angular-schema-form-material': '../node_modules/nick_common_static/common/libs/material-decorator',
                    'angular-loading-bar': '../node_modules/angular-loading-bar/build/loading-bar',
                    'angular-touch': '../node_modules/angular-touch/angular-touch',
                    'angular-qupload': '../bower_components/angular-qiniu-upload/src/qupload',
                    'angular-local-storage': '../bower_components/angular-local-storage/dist/angular-local-storage',
                    'angular-material-datatable': '../node_modules/nick_common_static/common/libs/angular-material-datatable',
                    'angular-material-sidenav': '../node_modules/nick_common_static/common/libs/angular-material-sidenav',
                    'angular-filter': '../node_modules/angular-filter/dist/angular-filter',
                    'common': '../node_modules/nick_common_static/common/',
                    'template': './partials/partials'
                },
                shim: {
                    'angular': {
                        exports: 'angular'
                    },
                    'angular-animate': {
                        deps: ['angular']
                    },
                    'angular-ui-route': {
                        deps: ['angular']
                    },
                    'angular-aria': {
                        deps: ['angular']
                    },
                    'angular-permission': {
                        deps: ['angular']
                    },
                    'angular-material': {
                        deps: ['angular-aria', 'angular-animate']
                    },
                    'angular-sanitize': {
                        deps: ['angular']
                    },
                    'schemaForm': {
                        deps: ['angular', 'objectpath', 'tv4', 'angular-sanitize']
                    },
                    'angular-cookies': {
                        deps: ['angular']
                    },
                    'angular-schema-form-material': {
                        deps: ['schemaForm']
                    },
                    'angular-loading-bar': {
                        deps: ['angular']
                    },
                    'angular-material-icons': {
                        deps: ['angular']
                    },
                    'angular-touch': {
                        deps: ['angular']
                    },
                    template: {
                        deps: ['angular']
                    },
                    'angular-local-storage': {
                        deps: ['angular']
                    },
                    'angular-qupload': {
                        deps: ['angular-local-storage']
                    },
                    'angular-material-datatable': {
                        deps: ['angular-material']
                    },
                    'angular-material-sidenav': {
                        deps: ['angular-material']
                    },
                    'angular-filter': {
                        deps: ['angular']
                    }
                },
                deps: [
                    'angular-ui-route',
                    'angular-permission',
                    'angular-material',
                    'angular-schema-form-material',
                    'angular-cookies',
                    'angular-loading-bar',
                    'angular-material-icons',
                    'angular-material-datatable',
                    'angular-material-sidenav',
                    'angular-touch',
                    'angular-qupload',
                    'common/libs/svg-morpheus',
                    'angular-filter',
                    'template',
                ],
                include: ['bootstrap/bootstrap', 'main']
            }
        }
    });

    grunt.loadNpmTasks('grunt-requirejs');
};