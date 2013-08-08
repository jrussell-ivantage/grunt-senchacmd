/**
 *  ------------------------------------------------------------------------
 *  @project: grunt-senchacmd
 *  @date: 2013-08-08
 *  @author: Justin Russell
 *
 *  Copyright (c) 2013, iVantage Health Analytics, Inc.
 *  ------------------------------------------------------------------------
*/

"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/*.js",
        "<%= nodeunit.tests %>"
      ],
      options: {
        jshintrc: ".jshintrc"
      }
    },

    clean: {
      tests: ["tmp", "test/fixtures/testworkspace/build"]
    },

    senchacmd: {
      simpledefault: {
        appName: "TestApp",
        appRoot: "test/fixtures/testworkspace/testapp",
        buildRoot: "test/fixtures/testworkspace/build/testapp"
      },
      simplecustom: {
        options: {
          environment: "testing"
        },
        appName: "TestApp",
        appRoot: "test/fixtures/testworkspace/testapp",
        buildRoot: "test/fixtures/testworkspace/build/testapp"
      }

    },

    nodeunit: {
      tests: ["test/*_test.js"]
    }
  });

  grunt.loadTasks("tasks");

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-nodeunit");
  grunt.loadNpmTasks("grunt-shell");

  grunt.registerTask("test", ["clean", "senchacmd", "nodeunit"]);
  grunt.registerTask("default", ["senchacmd"]);
};

