Package.describe({
  name   : 'valodya:alerts',
  summary: 'A pattern to display application alerts system for display',
  version: '0.1.0',
  git    : 'https://github.com/Valodya/meteor-alerts.git'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.2.1');

  api.use([
    'jquery',
    'underscore',
    'minimongo',
    'mongo-livedata',
    'templating',
    'less',
    'fortawesome:fontawesome@4.5.0'
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
  api.use('valodya:alerts', 'client');
  api.use(['tinytest', 'test-helpers', 'ui', 'templating'], 'client');

  api.addFiles('tests.js', 'client');
});