/**
 * Created by NICK on 15/11/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../../../node_modules/nick_common_static/common/common/controller/grid_material_controller', '../../../../node_modules/nick_common_static/common/models/common/client_data', '../../../../node_modules/nick_common_static/common/models/common/query_base', '../../../../node_modules/nick_common_static/common/models/common/toolbar_item', 'lodash'], function (require, exports, gridCon, client, query, toolbar, _) {
    var ModulesManagerController = (function (_super) {
        __extends(ModulesManagerController, _super);
        function ModulesManagerController() {
            _super.call(this, arguments);
            this.levels = [];
            this.initToolbar();
            this.init();
            this.getLevelData(null, 0);
        }
        ModulesManagerController.prototype.initToolbar = function () {
            this.rootToolbars.push(new toolbar.Common.ToolbarItem({
                title: '新建模块',
                icon: 'add'
            }));
        };
        ModulesManagerController.prototype.getLevelData = function (module, level) {
            var _this = this;
            if (module && module.selected == true)
                return;
            if (module && !module.modules.length)
                return;
            _this.queryData.where = {
                parent_module: module ? module.module_code : 0
            };
            _this.levels = _.slice(_this.levels, 0, level) || [];
            _.forEach(_.last(_this.levels), function (module) {
                module['selected'] = false;
            });
            module && (module.selected = true);
            _this.getServerData().finally(function () {
                _this.levels.push([].concat(_this.clientData.datas));
            });
        };
        ModulesManagerController.prototype.init = function () {
            var _this = this;
            this.clientData = new client.Common.ClientData();
            this.queryData = new query.Common.QueryBase();
            this.serverInterface = this.PermissionService.modules;
            this.dataFilter = function (serverData) {
                _this.clientData.total = serverData.total;
                _this.clientData.datas.length = 0;
                _this.clientData.datas = serverData.records;
                return _this.clientData;
            };
        };
        ModulesManagerController._name = 'ModulesManagerController';
        ModulesManagerController.$inject = ['$rootScope', '$scope', 'PermissionService'];
        return ModulesManagerController;
    })(gridCon.GridController);
    exports.ModulesManagerController = ModulesManagerController;
});
//# sourceMappingURL=manager_controller.js.map