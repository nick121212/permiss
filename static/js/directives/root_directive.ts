/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import common = require('../../node_modules/nick_common_static/common/common/controller/base_material_controller');

export class RootDirective extends common.BaseController {
    public static _name:string = "root";

    public static directive:Array<any> = ['$rootScope', '$mdToast', '$cookieStore', 'config', '$state', function ($rootScope, $mdToast, $cookieStore, config, $state) {
        var directive:ng.IDirective = {}, con;

        common.BaseController.$inject = ['$rootScope', '$mdToast', '$cookieStore', 'config', '$state'];
        con = new common.BaseController(arguments);

        directive.link = ($scope)=> {
            $rootScope.$on("userIntercepted", (state, ename, data)=> {
                //清除登录标志
                $cookieStore.remove(config.prefix + 'access_token');
                $cookieStore.remove(config.prefix + 'refresh_token');
                //$state.go('account');
            });
            $rootScope.$on('showError', function (state, ename, data) {
                con.showErrMsg(data);
            });
        };

        return directive;
    }];
}