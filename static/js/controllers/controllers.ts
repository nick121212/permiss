/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import home_index = require('controllers/home/index');
import home_side_nav = require('controllers/home/side_nav');
import mmc = require('controllers/permission/modules/manager_controller');

export class Controllers {
    constructor(module:ng.IModule) {
        module.controller(home_index.HomeIndexController._name, home_index.HomeIndexController);
        module.controller(home_side_nav.HomeSideNavController._name, home_side_nav.HomeSideNavController);
        module.controller(mmc.ModulesManagerController._name, mmc.ModulesManagerController);
    }
}