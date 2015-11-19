/**
 * CompanyTable.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        company_code: {
            type: 'string',
            size: 3
        },
        company_name: {
            type: 'string',
            size: 20
        }
    }
};

