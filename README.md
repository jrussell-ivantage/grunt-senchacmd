# NOTE on LICENSING

The license for project has not yet been determined.

# grunt-senchacmd

> A grunt wrapper for `sencha app build`

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-senchacmd --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-senchacmd');
```

If the plugin has been installed correctly, running `grunt --help` at the
command line should list the newly-installed plugin's task or tasks. In
addition, the plugin should be listed in package.json as a `devDependency`,
which ensures that it will be installed whenever the `npm install` command is
run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

## The "senchacmd" task

### Overview
In your project's Gruntfile, add a section named `senchacmd` to the data object
passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  senchacmd: {
    options: {
      environment: 'production'
    },
    your_target: {
      appName: 'MyApp',          // Name of the app you're building
      appRoot: 'path/to/myapp',  // The working directory for your app
      buildRoot: 'dist'          // Where built files will be placed
    }
  }
})
```

### Options

#### options.environment
Type: `String`
Default value: `'production'`

Built apps will be placed in the specified `buildRoot` under a folder for the
given environment.

## Contributing
NOTE: Licensing for this project has not yet been determined!

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [grunt][].

## Release History
_(Nothing yet)_

## License (TBD)
Copyright (c) 2013 iVantage Health Analytics
