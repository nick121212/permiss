/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var config = {
        baseUrl: 'js',
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
            'angular-meterial-icons': {
                deps: ['angular']
            },
            'angular-touch': {
                deps: ['angular']
            },
            template: {
                deps: ['angular']
            },
            elasticsearch: {
                deps: ['angular']
            },
            'angular-tree-control': {
                deps: ['angular']
            }
        },
        paths: {
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
            'angular-meterial-icons': '../node_modules/angular-material-icons/angular-material-icons',
            'angular-schema-form-material': '../node_modules/nick_common_static/common/libs/material-decorator',
            'angular-loading-bar': '../node_modules/angular-loading-bar/build/loading-bar',
            'angular-touch': '../node_modules/angular-touch/angular-touch',
            'common': '../node_modules/nick_common_static/common/',
            'template': 'partials/partials',
            'angular-tree-control': '../bower_components/angular-tree-control/angular-tree-control',
            'lodash': '../node_modules/lodash/index'
        },
        deps: [
            'angular-ui-route',
            'angular-permission',
            'angular-material',
            'angular-schema-form-material',
            'angular-cookies',
            'angular-loading-bar',
            'angular-meterial-icons',
            'angular-touch',
            'common/libs/svg-morpheus',
            //'angular-tree-control',
            'template',
            'lodash'
        ],
        config: {
            'common/services/config_constant': 'dev'
        },
        callback: function () {
            requirejs(["bootstrap/bootstrap"]);
        },
        urlArgs: '@@version'
    };
    requirejs.config(config);
});
//export var r = requirejs; 
//# sourceMappingURL=main.js.map