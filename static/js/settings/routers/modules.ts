/**
 * Created by NICK on 15/10/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


import ref = require('ref');

export var init = ($urlRouterProvider, $stateProvider)=> {
    $stateProvider
        .state('home.modules', {
            url: 'modules',
            data: {
                permission: {
                    except: ['']
                }
            },
            views: {
                'content_main': {
                    templateUrl: 'js/partials/controllers/permission/modules/manager.html',
                    controller: 'ModulesManagerController',
                    controllerAs: 'modulesManagerCtl'
                }
            }
        });
};