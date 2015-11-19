/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var PermissionService = (function () {
        function PermissionService() {
        }
        PermissionService._name = 'PermissionService';
        PermissionService.factory = ['$rootScope', '$q', '$http', 'config', function ($rootScope, $q, $http, config) {
                return {
                    /*
                     * 拉取所有的模块
                     * */
                    getNestedModules: function () {
                        return $http({
                            method: 'GET',
                            url: config.permiss_api + '' + "/moduletable/getNestedModules",
                            params: {
                                where: {
                                    'parent_module': '0'
                                }
                            },
                            needToken: false
                        });
                    },
                    modules: function (query) {
                        return $http({
                            method: 'GET',
                            url: config.permiss_api + '' + "/moduletable",
                            params: {
                                where: query.where
                            },
                            needToken: false
                        });
                    }
                };
            }];
        return PermissionService;
    })();
    exports.PermissionService = PermissionService;
});
//# sourceMappingURL=permission_service.js.map