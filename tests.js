Tinytest.add('Alerts items', function(test) {
  test.equal(Alerts.items().length, 0);

  var alertId = Alerts.error('A new error!');
  test.equal(Alerts.items().length, 1);

  Alerts.remove(alertId);

  test.equal(Alerts.items().length, 0);
});

Tinytest.add('Remove All Alerts', function(test) {
  test.equal(Alerts.items().length, 0);

  Alerts.error('A new error!');
  Alerts.success('A new success!');
  Alerts.warning('A new warning!');
  Alerts.info('A new info!');

  test.equal(Alerts.items().length, 4);

  Alerts.removeAll();

  test.equal(Alerts.items().length, 0);
});

Tinytest.add('Add Custom Alerts', function(test) {
  test.equal(Alerts.items().length, 0);

  Alerts.add({title:'Test title', type:'my-type'});

  test.equal(Alerts.items().length, 1);

  Alerts.removeAll();
});