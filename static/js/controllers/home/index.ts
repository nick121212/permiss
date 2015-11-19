/**
 * Created by NICK on 15/10/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

import ref = require('ref');
import base = require('../../../node_modules/nick_common_static/common/common/controller/base_material_controller');

export class HomeIndexController extends base.BaseController {
    public static _name:string = 'HomeIndexController';
    public static $inject:Array<any> = ['$rootScope', '$scope', '$state', '$stateParams', '$mdBottomSheet', '$mdToast'];

    public $mdBottomSheet:angular.material.IBottomSheetService;

    constructor() {
        super(arguments);
        //
        //var defer = this.$q.defer();
        //
        //this.$mdBottomSheet.show({
        //    template: '<md-bottom-sheet>Hello!</md-bottom-sheet>',
        //    controller: 'TestController',
        //    resolve: {
        //        'index': ()=>{
        //            return defer.promise;
        //        }
        //    }
        //});
        //
        //defer.resolve(21);
    }
}