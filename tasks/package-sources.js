/**
 * package sources
 * creates foo.pkgd.js
 * built with RequireJS
 */

var requirejs = require('requirejs');
var getPkgdBanner = require('./utils/get-pkgd-banner.js');

var config = {
  baseUrl: 'bower_components',
  include: [
    'packery/js/packery'
  ],
  out: 'build/packery.pkgd.js',
  optimize: 'none',
  wrap: {}
};

module.exports = function( grunt ) {
  // get banner comment at top of package file
  config.wrap.start = getPkgdBanner( grunt );

  // create isotope.pkgd.js
  grunt.registerTask( 'package-sources', function() {
    var done = this.async();
    requirejs.optimize( config, function() {
      done();
    }, function( err ) {
      grunt.log.error( err );
      done();
    });
  });

};
