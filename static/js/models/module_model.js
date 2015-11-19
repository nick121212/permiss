/**
 * Created by NICK on 15/9/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../node_modules/nick_common_static/common/models/common/base_data'], function (require, exports, bd) {
    var ModuleModel = (function (_super) {
        __extends(ModuleModel, _super);
        function ModuleModel() {
            _super.call(this, arguments);
        }
        return ModuleModel;
    })(bd.Common.BaseData);
    exports.ModuleModel = ModuleModel;
});
//# sourceMappingURL=module_model.js.map