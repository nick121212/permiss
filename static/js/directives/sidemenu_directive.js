/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
define(["require", "exports"], function (require, exports) {
    var SideMenuChildDirective = (function () {
        function SideMenuChildDirective() {
        }
        SideMenuChildDirective._name = "sideMenuChild";
        SideMenuChildDirective.directive = ['$rootScope', function ($rootScope) {
                var directive = {
                    restrict: 'EA',
                    require: '^sideMenu',
                    link: function ($scope, $element, $attrs, $ctrl) {
                        $scope['showSearchBar'] = false;
                        $ctrl['template']($scope, function (clone) {
                            $element.html('').append(clone);
                        });
                    }
                };
                return directive;
            }];
        return SideMenuChildDirective;
    })();
    exports.SideMenuChildDirective = SideMenuChildDirective;
    var SideMenuSearchbarDirective = (function () {
        function SideMenuSearchbarDirective() {
        }
        SideMenuSearchbarDirective._name = "sideMenuSearchbar";
        SideMenuSearchbarDirective.directive = ['$rootScope', '$compile', function ($rootScope, $compile) {
                var directive = {
                    restrict: 'EA',
                    //require: '^sideMenuSearchbar',
                    templateUrl: 'js/partials/directives/sidemenu_searchbar.html',
                    scope: true,
                    link: function ($scope, $element, $attrs, $ctrl) {
                        console.log($scope);
                        //$element.find('input').attr('ngModel', 'aa');
                    }
                };
                return directive;
            }];
        return SideMenuSearchbarDirective;
    })();
    exports.SideMenuSearchbarDirective = SideMenuSearchbarDirective;
    var SideMenuContentTransclude = (function () {
        function SideMenuContentTransclude() {
        }
        SideMenuContentTransclude._name = "sideMenuContentTransclude";
        SideMenuContentTransclude.directive = ['$rootScope', function ($rootScope) {
                var directive = {
                    link: function ($scope, $element, $attrs, $ctrl) {
                        $scope['$sideMenuTransclude']($scope, function (clone) {
                            $element.empty();
                            $element.append(clone);
                        });
                    }
                };
                return directive;
            }];
        return SideMenuContentTransclude;
    })();
    exports.SideMenuContentTransclude = SideMenuContentTransclude;
    var SideMenuDirective = (function () {
        function SideMenuDirective() {
        }
        SideMenuDirective._name = "sideMenu";
        SideMenuDirective.directive = ['$rootScope', '$compile', function ($rootScope, $compile) {
                var directive = {
                    restrict: 'EA',
                    replace: false,
                    require: 'sideMenu',
                    transclude: true,
                    scope: {
                        modules: '=',
                        opts: '=',
                        filterExpression: '=?',
                        filterComparator: '=?',
                        orderBy: "@",
                        reverseOrder: "@"
                    },
                    controller: ['$scope', '$templateCache', '$interpolate', function ($scope, $templateCache, $interpolate) {
                            var opts = $scope.opts;
                            $scope.selectedNodes = {};
                            $scope.showChildren = function (node) {
                                if ($scope.selectedNodes.hasOwnProperty(node[opts.key])) {
                                    delete $scope.selectedNodes[node[opts.key]];
                                }
                                else {
                                    if (node[$scope.opts.children] && node[opts.children].length) {
                                        $scope.selectedNodes[node[opts.key]] = node;
                                    }
                                }
                            };
                            $scope.isShowChildren = function (node) {
                                return $scope.selectedNodes[node[opts.key]];
                            };
                            $scope.isLeaf = function (node) {
                                return !node[opts.children] || !node[opts.children].length;
                            };
                            this.template = $compile($interpolate($templateCache.get('js/partials/directives/sidemenu.html'))({
                                opts: opts
                            }));
                        }],
                    compile: function ($ele, $attrs, childTranscludeFn) {
                        return function ($scope, $element, attrs, $ctrl) {
                            $scope.$watch("modules", function updateNodeOnRootScope(newValue) {
                                if (angular.isArray(newValue)) {
                                    if (angular.isDefined($scope.node) && angular.equals($scope.node[$scope.opts.children], newValue))
                                        return;
                                    $scope.node = {};
                                    $scope.node[$scope.opts.children] = newValue;
                                }
                                else {
                                    if (angular.equals($scope.node, newValue))
                                        return;
                                    $scope.node = newValue;
                                }
                            });
                            $scope.showSearchBar = $scope.opts.showSearchBar;
                            $ctrl.template($scope, function (clone) {
                                $element.html('').append(clone);
                            });
                            $scope.$sideMenuTransclude = childTranscludeFn;
                        };
                    }
                };
                return directive;
            }];
        return SideMenuDirective;
    })();
    exports.SideMenuDirective = SideMenuDirective;
});
//# sourceMappingURL=sidemenu_directive.js.map