/**
 * Created by NICK on 15/10/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    exports.init = function ($mdThemingProvider) {
        $mdThemingProvider.theme('default').primaryPalette('blue', {
            'default': '700'
        });
        $mdThemingProvider.alwaysWatchTheme(true);
    };
});
//# sourceMappingURL=blue.js.map