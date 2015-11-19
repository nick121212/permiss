/**
 * Created by NICK on 15/9/2.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


import ref = require('ref');
import commonService = require('../../node_modules/nick_common_static/common/services/services');
import permission = require('services/permission_service');

export class Services extends commonService.Services {
    constructor(module:ng.IModule) {
        super(module);

        module.service(permission.PermissionService._name, permission.PermissionService.factory);
    }
}