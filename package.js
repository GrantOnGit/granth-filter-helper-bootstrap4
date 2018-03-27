Package.describe({
  name: 'granth:filter-helper-bootstrap4',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Bootstrap 4 templates for the granth:filter-helper package.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/GrantOnGit/meteor-filter-helper-bootstrap4.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript@0.9.0');  
  api.use('granth:table-helper');
  api.use('granth:filter-helper');
  api.use(['templating'], 'client'); // Core deps

  api.addFiles([
    'table/table.html',
    'table/table.js',
  ], 'client');

  api.mainModule('all.js', 'client');
});

// Package.onTest(function(api) {
//   api.use('ecmascript@0.9.0');
//   api.use('tinytest');
//   api.use('granth:filter-helper');
//   api.mainModule('filter-helper-tests.js');
// });
