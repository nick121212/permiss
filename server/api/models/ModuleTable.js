/**
 * ModuleTable.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        module_code: {
            type: 'string',
            primaryKey: true,
            required: true,
            size: 4
        },
        module_name: {
            type: 'string',
            size: 20
        },
        module_value: {
            type: 'string',
            size: 20
        },
        link_url: {
            type: 'string',
            size: 256
        },
        module_description: {
            type: 'string',
            size: 256
        },
        parent_module: {
            model: 'ModuleTable',
            size: 4
        },
        modules: {
            collection: 'ModuleTable',
            via: 'parent_module'
        }
    }
};

