/**
 * Created by NICK on 15/10/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports", 'settings/routers/default', 'settings/routers/home', 'settings/routers/modules', 'settings/roles/anonymous', 'settings/roles/user', 'settings/themes/blue', 'settings/themes/dark', 'settings/themes/white_cyan', 'settings/themes/amazing'], function (require, exports, defaultRouter, homeRouter, modulesRouter, anonymousUser, userUser, defaultTheme, darkTheme, whiteCyanTheme, amazingTheme) {
    var Settings = (function () {
        function Settings() {
        }
        /*路由配置*/
        Settings.prototype.initRouter = function ($urlRouterProvider, $stateProvider) {
            defaultRouter.init.apply(this, arguments);
            homeRouter.init.apply(this, arguments);
            modulesRouter.init.apply(this, arguments);
        };
        /*http的初始化*/
        Settings.prototype.initHttpInfo = function ($httpProvider) {
            $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            // Override $http service's default transformRequest
            $httpProvider.defaults['transformRequest'] = [function (data) {
                    /**
                     * The workhorse; converts an object to x-www-form-urlencoded serialization.
                     * @param {Object} obj
                     * @return {String}
                     */
                    var param = function (obj) {
                        var query = '';
                        var name, value, fullSubName, subName, subValue, innerObj, i;
                        for (name in obj) {
                            value = obj[name];
                            if (value instanceof Array) {
                                for (i = 0; i < value.length; ++i) {
                                    subValue = value[i];
                                    //fullSubName = name + '[' + i + ']';
                                    fullSubName = name + '[]';
                                    innerObj = {};
                                    innerObj[fullSubName] = subValue;
                                    query += param(innerObj) + '&';
                                }
                            }
                            else if (value instanceof Object) {
                                for (subName in value) {
                                    subValue = value[subName];
                                    fullSubName = name + '[' + subName + ']';
                                    innerObj = {};
                                    innerObj[fullSubName] = subValue;
                                    query += param(innerObj) + '&';
                                }
                            }
                            else if (value !== undefined && value !== null) {
                                query += encodeURIComponent(name) + '='
                                    + encodeURIComponent(value) + '&';
                            }
                        }
                        return query.length ? query.substr(0, query.length - 1) : query;
                    };
                    return angular.isObject(data) && String(data) !== '[object File]'
                        ? param(data)
                        : data;
                }];
            //添加http拦截器
            $httpProvider.interceptors.push('HttpInterceptorFactory');
        };
        /*错误信息初始化*/
        Settings.prototype.initMessage = function (sfErrorMessage) {
            sfErrorMessage.setDefaultMessage(10000, '邮箱格式不正确');
            sfErrorMessage.setDefaultMessage(10001, '两次密码不一致');
            sfErrorMessage.setDefaultMessage(10002, '用户名中存在非法字符');
            sfErrorMessage.setDefaultMessage(10003, '手机格式不正确');
            sfErrorMessage.setDefaultMessage(302, '[{{title}}]是必填项');
            sfErrorMessage.setDefaultMessage('url', '[{{title}}]格式不正确');
            sfErrorMessage.setDefaultMessage('103', '[{{title}}]超过了最大值{{schema.maximum}}');
            sfErrorMessage.setDefaultMessage('101', '[{{title}}]小于最小值{{schema.minimum}}');
            sfErrorMessage.setDefaultMessage('200', '[{{title}}]字符长度小于最小值({{schema.minLength}})');
            sfErrorMessage.setDefaultMessage('201', '[{{title}}]字符长度大于最大值({{schema.maxLength}})');
        };
        /*角色配置*/
        Settings.prototype.initRoles = function ($q, $cookieStore, Permission, passportService, config) {
            anonymousUser.init.apply(this, arguments);
            userUser.init.apply(this, arguments);
        };
        /*ngMaterial默认配置*/
        Settings.prototype.initMdTheme = function ($mdThemingProvider) {
            defaultTheme.init.apply(this, arguments);
            darkTheme.init.apply(this, arguments);
            whiteCyanTheme.init.apply(this, arguments);
            amazingTheme.init.apply(this, arguments);
        };
        return Settings;
    })();
    exports.settings = new Settings();
});
//# sourceMappingURL=settings.js.map