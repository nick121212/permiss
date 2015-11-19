module.exports = function (grunt) {
    grunt.registerTask('build', ['clean', 'copy', 'replace:env', 'html2js', 'requirejs', 'less', 'concat', 'cssmin', 'replace']);
};
