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
define(["require", "exports", '../../node_modules/nick_common_static/common/directives/directives', 'directives/root_directive', 'directives/sidemenu_directive'], function (require, exports, common, root, sidemenu) {
    var Directives = (function (_super) {
        __extends(Directives, _super);
        function Directives(module) {
            _super.call(this, module);
            module.directive(root.RootDirective._name, root.RootDirective.directive);
            module.directive(sidemenu.SideMenuDirective._name, sidemenu.SideMenuDirective.directive);
            module.directive(sidemenu.SideMenuChildDirective._name, sidemenu.SideMenuChildDirective.directive);
            module.directive(sidemenu.SideMenuContentTransclude._name, sidemenu.SideMenuContentTransclude.directive);
            module.directive(sidemenu.SideMenuSearchbarDirective._name, sidemenu.SideMenuSearchbarDirective.directive);
        }
        return Directives;
    })(common.Directives);
    exports.Directives = Directives;
});
//# sourceMappingURL=directives.js.map