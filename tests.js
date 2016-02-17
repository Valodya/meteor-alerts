Tinytest.add("Alerts items", function(test) {
  test.equal(Alerts.items().length, 0);

  var alertId =  Alerts.error('A new error!');
  test.equal(Alerts.items().length, 1);

  Alerts.remove(alertId);

  test.equal(Alerts.items().length, 0);
});