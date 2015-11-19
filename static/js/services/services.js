/**
 * Created by NICK on 15/9/2.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../node_modules/nick_common_static/common/services/services', 'services/permission_service'], function (require, exports, commonService, permission) {
    var Services = (function (_super) {
        __extends(Services, _super);
        function Services(module) {
            _super.call(this, module);
            module.service(permission.PermissionService._name, permission.PermissionService.factory);
        }
        return Services;
    })(commonService.Services);
    exports.Services = Services;
});
//# sourceMappingURL=services.js.map