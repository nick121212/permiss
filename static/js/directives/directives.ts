/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import common = require('../../node_modules/nick_common_static/common/directives/directives');
import root = require('directives/root_directive');
import sidemenu = require('directives/sidemenu_directive');

export class Directives extends common.Directives {
    constructor(module:ng.IModule) {
        super(module);
        module.directive(root.RootDirective._name, root.RootDirective.directive);


        module.directive(sidemenu.SideMenuDirective._name, sidemenu.SideMenuDirective.directive);
        module.directive(sidemenu.SideMenuChildDirective._name, sidemenu.SideMenuChildDirective.directive);
        module.directive(sidemenu.SideMenuContentTransclude._name, sidemenu.SideMenuContentTransclude.directive);
        module.directive(sidemenu.SideMenuSearchbarDirective._name, sidemenu.SideMenuSearchbarDirective.directive);
    }
}