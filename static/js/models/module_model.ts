/**
 * Created by NICK on 15/9/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import bd = require('../../node_modules/nick_common_static/common/models/common/base_data');


export class ModuleModel extends bd.Common.BaseData {
    public module_code:string;
    public module_name:string;
    public module_value:string;
    public link_url:string;
    public parent_module_code:string;
    public module_description:string;
    public parent_module:ModuleModel;
    public modules:Array<ModuleModel>;

    constructor() {
        super(arguments);
    }
}