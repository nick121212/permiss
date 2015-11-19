/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../node_modules/nick_common_static/common/common/controller/base_material_controller'], function (require, exports, common) {
    var RootDirective = (function (_super) {
        __extends(RootDirective, _super);
        function RootDirective() {
            _super.apply(this, arguments);
        }
        RootDirective._name = "root";
        RootDirective.directive = ['$rootScope', '$mdToast', '$cookieStore', 'config', '$state', function ($rootScope, $mdToast, $cookieStore, config, $state) {
                var directive = {}, con;
                common.BaseController.$inject = ['$rootScope', '$mdToast', '$cookieStore', 'config', '$state'];
                con = new common.BaseController(arguments);
                directive.link = function ($scope) {
                    $rootScope.$on("userIntercepted", function (state, ename, data) {
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
        return RootDirective;
    })(common.BaseController);
    exports.RootDirective = RootDirective;
});
//# sourceMappingURL=root_directive.js.map