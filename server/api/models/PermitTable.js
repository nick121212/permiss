/**
 * PermitTable.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        permit_code: {
            type: 'string',
            size: 6
        },
        module_code: {
            type: 'string',
            size: 4
        },
        action_code: {
            type: 'string',
            size: 2
        },
        permit_value: {
            type: 'string',
            size: 20
        },
        action: {
            model: 'ActionTable'
        },
        module: {
            model: 'ModuleTable'
        }
    }
};

