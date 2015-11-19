angular.module('partialsModule', ['js/partials/controllers/home/index.html', 'js/partials/controllers/home/sidenav_left.html', 'js/partials/controllers/permission/modules/manager.html', 'js/partials/directives/sidemenu.html']);

angular.module("js/partials/controllers/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/partials/controllers/home/index.html",
    "<md-toolbar ui-view=\"toolbar_main\"\n" +
    "            layout=\"row\"\n" +
    "            class=\"md-whiteframe-glow-z1\">\n" +
    "    <div class=\"md-toolbar-tools\">\n" +
    "        <h2>beyond admin</h2>\n" +
    "\n" +
    "        <span flex></span>\n" +
    "\n" +
    "        <div class=\"md-toolbar-item\" layout=\"row\">\n" +
    "            <md-button ng-repeat=\"item in $root.toolbars\"\n" +
    "                       ng-click=\"item.onClick($event)\"\n" +
    "                       md-theme=\"amazing\"\n" +
    "                       class=\"md-icon-button\">\n" +
    "                <md-tooltip>\n" +
    "                    {{item.title}}\n" +
    "                </md-tooltip>\n" +
    "                <ng-md-icon icon=\"{{ item.icon }}\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "\n" +
    "            <md-button ng-click=\"$root.doOpenRightMenu()\" class=\"md-icon-button\">\n" +
    "                <md-tooltip>\n" +
    "                    菜单\n" +
    "                </md-tooltip>\n" +
    "                <ng-md-icon icon=\"more_vert\"></ng-md-icon>\n" +
    "            </md-button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</md-toolbar>\n" +
    "<md-content layout=\"row\" flex>\n" +
    "    <md-sidenav class=\"md-sidenav-left md-whiteframe-z2\"\n" +
    "                ui-view=\"sidenav_left\"\n" +
    "                md-theme=\"amazing\"\n" +
    "                md-component-id=\"left\"\n" +
    "                md-is-locked-open=\"$mdMedia('gt-md')\">\n" +
    "    </md-sidenav>\n" +
    "\n" +
    "    <md-sidenav class=\"md-sidenav-right md-whiteframe-z2\"\n" +
    "                md-component-id=\"right\"\n" +
    "                ui-view=\"sidenav_right\"\n" +
    "                layout=\"column\">\n" +
    "    </md-sidenav>\n" +
    "    <md-content layout=\"column\" flex\n" +
    "                class=\"slide-right noneleave\"\n" +
    "                md-theme=\"{{ $root.theme }}\"\n" +
    "                ui-view=\"content_main\">\n" +
    "    </md-content>\n" +
    "</md-content>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("js/partials/controllers/home/sidenav_left.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/partials/controllers/home/sidenav_left.html",
    "<md-content >\n" +
    "    <div layout=\"row\">\n" +
    "        <md-input-container style=\"padding-bottom:0;\"\n" +
    "                            flex\n" +
    "                            class=\"md-float-icon\">\n" +
    "            <ng-md-icon icon=\"search\"></ng-md-icon>\n" +
    "            <input style=\"border: none;\" ng-model=\"homeSideNavCtl.filterExpression\">\n" +
    "        </md-input-container>\n" +
    "        <md-checkbox ng-model=\"homeSideNavCtl.filterComparator\">\n" +
    "            精确查询\n" +
    "        </md-checkbox>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "    <md-divider></md-divider>\n" +
    "\n" +
    "\n" +
    "    <side-menu flex\n" +
    "               class=\"sidemenu\"\n" +
    "               filter-expression=\"homeSideNavCtl.filterExpression\"\n" +
    "               opts=\"homeSideNavCtl.treeOptions\"\n" +
    "               modules=\"homeSideNavCtl.modules\">\n" +
    "        <md-button class=\"md-primary layout-fill\"\n" +
    "                   style=\"text-align: left;\"\n" +
    "                   aria-label=\"{{node.module_name}}\"\n" +
    "                   ng-href=\"{{ node.link_url }}\">\n" +
    "            <md-content flex layout=\"row\">\n" +
    "                <ng-md-icon icon=\"{{ node.icon||'apps'}}\"></ng-md-icon>\n" +
    "                <span flex ng-bind=\"node.module_name\"></span>\n" +
    "                <ng-md-icon ng-if=\"!isLeaf(node)\" icon=\"{{ isShowChildren(node)?'expand_more':'chevron_right' }}\"></ng-md-icon>\n" +
    "            </md-content>\n" +
    "        </md-button>\n" +
    "    </side-menu>\n" +
    "</md-content>");
}]);

angular.module("js/partials/controllers/permission/modules/manager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/partials/controllers/permission/modules/manager.html",
    "<md-toolbar class=\"md-warn md-hue-3\">\n" +
    "    <div class=\"md-toolbar-tools\">\n" +
    "        <h2>模块管理</h2>\n" +
    "    </div>\n" +
    "</md-toolbar>\n" +
    "\n" +
    "<md-content flex=\"\"\n" +
    "            layout=\"row\">\n" +
    "    <md-content flex\n" +
    "                class=\"md-whiteframe-z1\"\n" +
    "                style=\"max-width: 300px;\"\n" +
    "                ng-repeat=\"modules in modulesManagerCtl.levels\">\n" +
    "        <md-list flex>\n" +
    "            <md-list-item ng-repeat=\"module in modules\"\n" +
    "                          ng-click=\"modulesManagerCtl.getLevelData(module,$parent.$index+1)\">\n" +
    "                <md-checkbox ng-disabled=\"true\" ng-model=\"module.selected\"></md-checkbox>\n" +
    "                <p>{{ module.module_name }}</p>\n" +
    "                <ng-md-icon ng-if=\"module.modules.length\" icon=\"chevron_right\"></ng-md-icon>\n" +
    "                <md-divider></md-divider>\n" +
    "            </md-list-item>\n" +
    "        </md-list>\n" +
    "    </md-content>\n" +
    "</md-content>\n" +
    "");
}]);

angular.module("js/partials/directives/sidemenu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/partials/directives/sidemenu.html",
    "<ul ng-if=\"node.{{opts.children}}.length\">\n" +
    "    <li ng-repeat=\"node in node.{{opts.children}} | filter:filterExpression:filterComparator {{options.orderBy}}\"\">\n" +
    "        <div side-menu-content-transclude ng-click=\"showChildren(node)\"></div>\n" +
    "\n" +
    "        <side-menu-child ng-if=\"isShowChildren(node)\" class=\"sidemenu-child am-fade-and-scale\"></side-menu-child>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<md-divider ng-if=\"node.{{opts.children}}.length>0 && !$last\"></md-divider>\n" +
    "\n" +
    "");
}]);
