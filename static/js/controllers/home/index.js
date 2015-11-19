/**
 * Created by NICK on 15/10/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../../node_modules/nick_common_static/common/common/controller/base_material_controller'], function (require, exports, base) {
    var HomeIndexController = (function (_super) {
        __extends(HomeIndexController, _super);
        function HomeIndexController() {
            _super.call(this, arguments);
            //
            //var defer = this.$q.defer();
            //
            //this.$mdBottomSheet.show({
            //    template: '<md-bottom-sheet>Hello!</md-bottom-sheet>',
            //    controller: 'TestController',
            //    resolve: {
            //        'index': ()=>{
            //            return defer.promise;
            //        }
            //    }
            //});
            //
            //defer.resolve(21);
        }
        HomeIndexController._name = 'HomeIndexController';
        HomeIndexController.$inject = ['$rootScope', '$scope', '$state', '$stateParams', '$mdBottomSheet', '$mdToast'];
        return HomeIndexController;
    })(base.BaseController);
    exports.HomeIndexController = HomeIndexController;
});
//# sourceMappingURL=index.js.map