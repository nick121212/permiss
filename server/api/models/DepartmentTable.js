/**
 * DepartmentTable.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        department_code: {
            type: 'string'
        },
        department_name: {
            type: 'string'
        },
        parent_department_code: {
            type: 'string'
        },
        department_description: {
            type: 'string'
        },
        company_code: {
            type: 'string'
        }
    }
};

