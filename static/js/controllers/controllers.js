/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports", 'controllers/home/index', 'controllers/home/side_nav', 'controllers/permission/modules/manager_controller'], function (require, exports, home_index, home_side_nav, mmc) {
    var Controllers = (function () {
        function Controllers(module) {
            module.controller(home_index.HomeIndexController._name, home_index.HomeIndexController);
            module.controller(home_side_nav.HomeSideNavController._name, home_side_nav.HomeSideNavController);
            module.controller(mmc.ModulesManagerController._name, mmc.ModulesManagerController);
        }
        return Controllers;
    })();
    exports.Controllers = Controllers;
});
//# sourceMappingURL=controllers.js.map