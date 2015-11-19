/**
 * Created by NICK on 15/10/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    exports.init = function ($urlRouterProvider, $stateProvider) {
        $stateProvider.state('home', {
            url: '/',
            data: {
                permission: {
                    except: ['']
                }
            },
            views: {
                '': {
                    templateUrl: 'js/partials/controllers/home/index.html',
                    controller: 'HomeIndexController',
                    controllerAs: 'homeIndexCtl'
                },
                'sidenav_left@home': {
                    templateUrl: 'js/partials/controllers/home/sidenav_left.html',
                    resolve: {
                        modules: ['$q', 'PermissionService', function ($q, PermissionService) {
                                var defer = $q.defer();
                                PermissionService.getNestedModules().success(function (data) {
                                    defer.resolve(data);
                                }).error(function () {
                                    defer.resolve(null);
                                });
                                return defer.promise;
                            }]
                    },
                    controller: 'HomeSideNavController',
                    controllerAs: 'homeSideNavCtl'
                }
            }
        });
    };
});
//# sourceMappingURL=home.js.map