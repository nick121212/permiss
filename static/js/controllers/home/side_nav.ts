/**
 * Created by NICK on 15/10/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import base = require('../../../node_modules/nick_common_static/common/common/controller/base_material_controller');

export class HomeSideNavController extends base.BaseController {
    public static _name:string = 'HomeSideNavController';
    public static $inject:Array<string> = ['$rootScope', '$scope', '$http', 'modules'];
    public treeOptions:any;
    public modules:Array<any>;
    public filterExpression:string = '';
    public filterComparator:boolean = false;

    constructor() {
        super(arguments);

        this.treeOptions = {
            children: "modules1",
            key: 'module_code',
            showSearchBar: true,
            dirSelectable: false,
            orderBy: 'module_code',
            filterField: 'module_code'
        };
    }
}