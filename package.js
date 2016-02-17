Package.describe({
  name   : "vlad:alerts",
  summary: "A pattern to display application alerts system for display",
  version: "0.1.0"
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.2.1');

  api.use([
    'minimongo',
    'mongo-livedata',
    'templating',
    'less',
    'fortawesome:fontawesome'
  ], 'client');

  api.addFiles([
    'templates.html',
    'alerts.js',
    'view.js',
    'styles.less'
  ], 'client');

  if (api.export) {
    api.export('Alerts');
  }
});

Package.onTest(function(api) {
  api.use('vlad:alerts', 'client');
  api.use(['tinytest', 'test-helpers', 'ui', 'templating'], 'client');

  api.addFiles('tests.js', 'client');
});