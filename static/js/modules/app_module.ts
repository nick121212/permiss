/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import setting = require('settings/settings');

class AppModule {
    public module:ng.IModule;
    public deps:Array<string> = [
        'ui.router',
        'permission',
        'ngMaterial',
        'schemaForm',
        'ngTouch',
        'ngAnimate',
        'ngCookies',
        'ngMdIcons',
        'partialsModule',
        //'treeControl',
        //'elasticsearch',
        'angular-loading-bar'
    ];

    constructor(name:string) {
        this.module = angular.module(name, this.deps);
        this.config();
        this.run();
    }

    config() {
        var _this = this;

        _this.module.config([
            '$stateProvider',
            '$urlRouterProvider',
            '$httpProvider',
            '$mdThemingProvider',
            'sfErrorMessageProvider',
            function ($stateProvider, $urlRouterProvider, $httpProvider, $mdThemingProvider, sfErrorMessageProvider) {
                setting.settings.initRouter($urlRouterProvider, $stateProvider);
                setting.settings.initHttpInfo($httpProvider);
                setting.settings.initMessage(sfErrorMessageProvider);
                setting.settings.initMdTheme($mdThemingProvider);
            }]);
    }

    run() {
        var _this = this;

        _this.module.run([
            '$rootScope',
            '$state',
            '$stateParams',
            '$q',
            '$cookieStore',
            'config',
            'Permission',
            'PassportService',
            ($rootScope, $state, $stateParams, $q, $cookieStore, config, Permission, passportService) => {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                setting.settings.initRoles($q, $cookieStore, Permission, passportService, config);
            }
        ]);
    }


}

export var module = new AppModule('app_module').module;