/**
 * ModuleTableController
 *
 * @description :: Server-side logic for managing moduletables
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var async = require('async');
var _ = require('lodash');
var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');

module.exports = {
    getNestedModules: function (req, res) {
        var Model = actionUtil.parseModel(req),
            where = actionUtil.parseCriteria(req),
            limit = actionUtil.parseLimit(req),
            skip = actionUtil.parseSkip(req),
            sort = actionUtil.parseSort(req);

        async.auto({
            first: function (cb) {
                Model.find().where(where).sort(sort).populate('modules').exec(cb);
            },
            second: ['first', function (cb, results) {
                var childrenIds = [];

                _.forEach(results.first, function (module) {
                    _.forEach(module.modules, function (module) {
                        childrenIds.push(module.module_code);
                    });
                    module.modules1 = [];
                    module.modules = [];
                });

                if (childrenIds.length) {
                    Model.findByModule_code(childrenIds).populate('modules').exec(cb);
                }
                else {
                    cb(null, []);
                }
            }],
            third: ['first', 'second', function (cb, results) {
                var childrenIds = [];

                _.forEach(results.second, function (module) {
                    _.forEach(module.modules, function (module) {
                        childrenIds.push(module.module_code);
                    });
                    module.modules1 = [];
                    module.modules = [];
                });

                if (childrenIds.length) {
                    Model.findByModule_code(childrenIds).populate('modules').exec(cb);
                }
                else {
                    cb(null, []);
                }
            }],
            forth: ['first', 'second', 'third', function (cb, results) {
                var childrenIds = [];

                _.forEach(results.third, function (module) {
                    _.forEach(module.modules, function (module) {
                        childrenIds.push(module.module_code);
                    });
                    module.modules1 = [];
                    module.modules = [];
                });

                if (childrenIds.length) {
                    Model.findByModule_code(childrenIds).populate('modules').exec(cb);
                }
                else {
                    cb(null, []);
                }
            }],
            fifth: ['first', 'second', 'third', 'forth', function (cb, results) {
                var first = _.indexBy(results.first, 'module_code'),
                    second = _.indexBy(results.second, 'module_code'),
                    third = _.indexBy(results.third, 'module_code'),
                    forth = _.indexBy(results.forth, 'module_code');

                _.forEach(forth, function (m) {
                    third[m.parent_module] && third[m.parent_module].modules1.push(m);
                });
                _.forEach(third, function (m) {
                    second[m.parent_module] && second[m.parent_module].modules1.push(m);
                });
                _.forEach(second, function (m) {
                    first[m.parent_module] && first[m.parent_module].modules1.push(m);
                });
                _.forEach(first, function (m) {
                   return m;
                });
                cb(null, results.first);
            }]
        }, function finish(err, result) {
            if (err) {
                res.serverError(err);
            } else {
                res.ok(result.fifth);
            }
        });
    }
};

