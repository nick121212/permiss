/**
 * Created by NICK on 15/10/13.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import _  = require('lodash');


export class SideMenuChildDirective {
    public static _name:string = "sideMenuChild";

    public static directive:Array<any> = ['$rootScope', function ($rootScope) {
        var directive:ng.IDirective = {
            restrict: 'EA',
            require: '^sideMenu',
            link: ($scope, $element, $attrs, $ctrl)=> {
                $scope['showSearchBar'] = false;
                $ctrl['template']($scope, function (clone) {
                    $element.html('').append(clone);
                });
            }
        };

        return directive;
    }];
}

export class SideMenuSearchbarDirective {
    public static _name:string = "sideMenuSearchbar";

    public static directive:Array<any> = ['$rootScope', '$compile', function ($rootScope, $compile) {
        var directive:ng.IDirective = {
            restrict: 'EA',
            //require: '^sideMenuSearchbar',
            templateUrl: 'js/partials/directives/sidemenu_searchbar.html',
            scope: true,
            link: ($scope, $element, $attrs, $ctrl)=> {
                console.log($scope);
                //$element.find('input').attr('ngModel', 'aa');
            }
        };

        return directive;
    }];
}

export class SideMenuContentTransclude {
    public static _name:string = "sideMenuContentTransclude";

    public static directive:Array<any> = ['$rootScope', function ($rootScope) {
        var directive:ng.IDirective = {
            link: ($scope, $element, $attrs, $ctrl)=> {
                $scope['$sideMenuTransclude']($scope, function (clone) {
                    $element.empty();
                    $element.append(clone);
                });
            }
        };

        return directive;
    }];
}

export class SideMenuDirective {
    public static _name:string = "sideMenu";

    public static directive:Array<any> = ['$rootScope', '$compile', function ($rootScope, $compile) {
        var directive:ng.IDirective = {
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
                $scope.showChildren = (node)=> {
                    if ($scope.selectedNodes.hasOwnProperty(node[opts.key])) {
                        delete $scope.selectedNodes[node[opts.key]];
                    } else {
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
            compile: ($ele, $attrs, childTranscludeFn)=> {
                return ($scope, $element, attrs, $ctrl)=> {
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
                }
            }
        };

        return directive;
    }];
}