module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'should', 'commonjs'],
    files: ['*.js'],
    preprocessors: {
      '*.js': ['coverage', 'commonjs']
    },
    browsers: [process.env.CI ? 'ChromeHeadless' : 'Chrome'],
    reporters: ['progress', 'coverage'],
    singleRun: true,
    coverageReporter: {
      type: 'lcovonly',
      subdir: '.',
      file: 'karma-lcov.txt'
    },
    client: {
      mocha: {
        reporter: 'html'
      }
    }
  })
}
