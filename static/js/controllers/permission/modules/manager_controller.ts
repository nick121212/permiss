/**
 * Created by NICK on 15/11/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import model = require('models/module_model');
import gridCon = require('../../../../node_modules/nick_common_static/common/common/controller/grid_material_controller');
import client = require('../../../../node_modules/nick_common_static/common/models/common/client_data');
import query = require('../../../../node_modules/nick_common_static/common/models/common/query_base');
import toolbar = require('../../../../node_modules/nick_common_static/common/models/common/toolbar_item');
import _ = require('lodash');

export class ModulesManagerController extends gridCon.GridController<model.ModuleModel> {
    public static _name:string = 'ModulesManagerController';
    public static $inject:Array<any> = ['$rootScope', '$scope', 'PermissionService'];

    public PermissionService:any;
    public levels:Array<any> = [];

    constructor() {
        super(arguments);
        this.initToolbar();
        this.init();
        this.getLevelData(null, 0);
    }

    initToolbar() {
        this.rootToolbars.push(new toolbar.Common.ToolbarItem({
            title: '新建模块',
            icon: 'add'
        }));
    }

    getLevelData(module, level) {
        var _this = this;

        if (module && module.selected == true) return;
        if (module && !module.modules.length) return;
        _this.queryData.where = {
            parent_module: module ? module.module_code : 0
        };
        _this.levels = _.slice(_this.levels, 0, level) || [];
        _.forEach(_.last(_this.levels), function (module) {
            module['selected'] = false;
        });
        module && (module.selected = true);
        _this.getServerData().finally(()=> {
            _this.levels.push([].concat(_this.clientData.datas));
        });
    }

    init() {
        this.clientData = new client.Common.ClientData<model.ModuleModel>();
        this.queryData = new query.Common.QueryBase();

        this.serverInterface = this.PermissionService.modules;
        this.dataFilter = (serverData:any)=> {
            this.clientData.total = serverData.total;
            this.clientData.datas.length = 0;
            this.clientData.datas = serverData.records;

            return this.clientData;
        };
    }
}
