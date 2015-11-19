/**
 * Created by NICK on 15/11/12.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


module.exports.autoreload = {
    active: true,
    usePolling: false,
    dirs: [
        "api/models",
        "api/controllers",
        "api/services",
        "config/locales"
    ],
    ignored: [
        // Ignore all files with .ts extension
        "**.ts"
    ]
};