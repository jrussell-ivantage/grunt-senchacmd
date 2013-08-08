/**
 *  ------------------------------------------------------------------------
 *  @project: grunt-senchacmd
 *  @date: 2013-08-08
 *  @author: Justin Russell
 *
 *  Copyright (c) 2013, iVantage Health Analytics, Inc.
 *  ------------------------------------------------------------------------
*/

'use strict';

var senchacmd = require("../lib/senchacmd.js");

module.exports = function(grunt) {

  grunt.registerMultiTask('senchacmd', 'Grunt wrapper for the senchacmd cli', function() {
    this.requiresConfig([this.name, this.target, "appName"]);
    this.requiresConfig([this.name, this.target, "appRoot"]);
    this.requiresConfig([this.name, this.target, "buildRoot"]);

    var options = this.options({
      environment: "production"
    });

    senchacmd.buildApp({
        appName: this.data.appName,
        appRoot: this.data.appRoot,
        buildRoot: this.data.buildRoot,
        appenvironment: options.environment
      },
      grunt.log.writeln,
      grunt.log.error,
      grunt.log.ok,
      this.async()
    );
  });
};
