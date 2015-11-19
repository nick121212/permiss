/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports", 'settings/settings'], function (require, exports, setting) {
    var AppModule = (function () {
        function AppModule(name) {
            this.deps = [
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
            this.module = angular.module(name, this.deps);
            this.config();
            this.run();
        }
        AppModule.prototype.config = function () {
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
        };
        AppModule.prototype.run = function () {
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
                function ($rootScope, $state, $stateParams, $q, $cookieStore, config, Permission, passportService) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;
                    setting.settings.initRoles($q, $cookieStore, Permission, passportService, config);
                }
            ]);
        };
        return AppModule;
    })();
    exports.module = new AppModule('app_module').module;
});
//# sourceMappingURL=app_module.js.map