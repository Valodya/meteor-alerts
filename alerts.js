var collection = new Meteor.Collection(null);

Alerts = {
  defaults: {
    timeout: 10
  },

  items: function() {
    return collection.find().fetch().reverse();
  },

  add: function(options) {
    return collection.insert(_.defaults(_.pick(options, 'title', 'message', 'content', 'icon', 'type'), Alerts.defaults));
  },

  remove: function(alertId) {
    collection.remove(alertId);
  },

  removeAll: function() {
    collection.remove({});
  },

  success: function(message, title) {
    Alerts.add({title: title, message: message, icon: 'check', type: 'success'});
  },

  error: function(message, title) {
    Alerts.add({title: title, message: message, icon: 'times-circle', type: 'error'});
  },

  warning: function(message, title) {
    Alerts.add({title: title, message: message, icon: 'warning', type: 'warning'});
  },

  info: function(message, title) {
    Alerts.add({title: title, message: message, icon: 'commenting', type: 'info'});
  }

};
