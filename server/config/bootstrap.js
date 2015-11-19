/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function (cb) {

    var modules = [{
        module_code: '0001',
        module_value: '0001',
        module_name: '模块1',
        link_url: '#modules',
        parent_module: '0',
        module_description: '模块1'
    }, {
        module_code: '0002',
        module_value: '0002',
        module_name: '模块2',
        link_url: '#modules',
        parent_module: '0',
        module_description: '模块2'
    }, {
        module_code: '0201',
        module_value: '0201',
        module_name: '模块2-1',
        link_url: '#modules',
        parent_module: '0002',
        module_description: '模块2-1'
    }, {
        module_code: '2101',
        module_value: '2101',
        module_name: '模块2-1-2',
        link_url: '#modules',
        parent_module: '0201',
        module_description: '模块2-1-1'
    }, {
        module_code: '2102',
        module_value: '2102',
        module_name: '模块2-1-2',
        link_url: '#modules',
        parent_module: '0201',
        module_description: '模块2-1-2'
    }, {
        module_code: '1101',
        module_value: '2102',
        module_name: '模块2-1-2',
        link_url: '#modules',
        parent_module: '0001',
        module_description: '模块2-1-2'
    }, {
        module_code: '1102',
        module_value: '2102',
        module_name: '模块2-1-2',
        link_url: '#modules',
        parent_module: '0001',
        module_description: '模块2-1-2'
    }];

    ModuleTable.create(modules).exec(cb);
};
