/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');


export class PermissionService {
    public static _name:string = 'PermissionService';

    public static factory:Array<any> = ['$rootScope', '$q', '$http', 'config', ($rootScope, $q, $http, config):any=> {
        return {
            /*
             * 拉取所有的模块
             * */
            getNestedModules: ()=> {
                return $http({
                        method: 'GET',
                        url: config.permiss_api + '' + "/moduletable/getNestedModules",
                        params: {
                            where: {
                                'parent_module': '0'
                            }
                        },
                        needToken: false
                    }
                );
            },
            modules: (query:Common.QueryBase)=> {
                return $http({
                        method: 'GET',
                        url: config.permiss_api + '' + "/moduletable",
                        params: {
                            where: query.where
                        },
                        needToken: false
                    }
                );
            }
        };
    }];
}