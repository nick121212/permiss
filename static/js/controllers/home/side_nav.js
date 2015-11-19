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
    var HomeSideNavController = (function (_super) {
        __extends(HomeSideNavController, _super);
        function HomeSideNavController() {
            _super.call(this, arguments);
            this.filterExpression = '';
            this.filterComparator = false;
            this.treeOptions = {
                children: "modules1",
                key: 'module_code',
                showSearchBar: true,
                dirSelectable: false,
                orderBy: 'module_code',
                filterField: 'module_code'
            };
        }
        HomeSideNavController._name = 'HomeSideNavController';
        HomeSideNavController.$inject = ['$rootScope', '$scope', '$http', 'modules'];
        return HomeSideNavController;
    })(base.BaseController);
    exports.HomeSideNavController = HomeSideNavController;
});
//# sourceMappingURL=side_nav.js.map