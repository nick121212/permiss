/**
 * ActionTable.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        action_code: {
            type: 'string',
            size: 2
        },
        action_name: {
            type: 'string',
            size: 10
        },
        action_value: {
            type: 'string',
            size: 20
        }
    }

};

