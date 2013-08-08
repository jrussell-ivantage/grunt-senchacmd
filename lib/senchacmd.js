/**
 *  ------------------------------------------------------------------------
 *  @project: grunt-senchacmd
 *  @date: 2013-08-08
 *  @author: Justin Russell, Evan Sheffield
 *
 *  Copyright (c) 2013, iVantage Health Analytics, Inc.
 *  ------------------------------------------------------------------------
*/

var cp = require("child_process")
	, fs = require("fs")
	, path = require("path")
	, checkOpts;

exports.buildApp = function(opts, infoLogger, errorLogger, successLogger, cb) {

	var info = infoLogger
		, error = errorLogger
		, success = successLogger
		, cmd
		, stderrlog = ""
		, errors = "";

	if(2 === arguments.length) {
		info = console.log;
		error = console.error;
		cb = infoLogger;
	} else if(3 === arguments.length) {
		error = console.error;
		cb = errorLogger;
	}

	info("Building Sencha app: " + opts.appName + " (" + opts.appenvironment +")...");

	cmd = cp.exec("sencha app build " + opts.appenvironment, { cwd: opts.appRoot });

	cmd.stderr.on("data", function(data) {
		stderrlog += data;
	});

	cmd.stderr.on("end", function() {
		if(stderrlog) {
			error("Error building application for " + opts.appRoot +": " + stderrlog);
			cb(false);
		}
	});

	cmd.stdout.on("data", function(data) {
		if(errors || data.indexOf('[ERR]') !== -1) {
			errors += data;
		}
	});

	cmd.on("exit", function() {
		if(errors) {
      var errorMsg = "Error building application for " + opts.appRoot;
			error(errors);
			error(errorMsg);
			cb(new Error(errorMsg));
		}
		fs.exists(path.join(opts.buildRoot, opts.appenvironment, "app-all-sencha-build.js"), function(exists) {
			if(!exists) {
				error("Failed to create file: " + path.join(opts.buildRoot, opts.appenvironment, "app-all-sencha-build.js"));
				cb(false);
			}
		});

		success("Finished building " + opts.appName + " (" + opts.appenvironment + ")!");

		cb();
	});
};
