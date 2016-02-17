Template.alertsContainer.helpers({
  items: function() {
    return Alerts.items();
  }
});

Template.alertsContainer.onRendered(function() {
  this.find('.alerts-container')._uihooks = {
    insertElement: function(node, next) {
      var $node = $(node);

      $node.insertBefore(next);
      node.scrollIntoView();
      $node.addClass('alert-show');
    },

    removeElement: function(node) {
      var $node = $(node);

      cssEvent(node, 'AnimationEnd', function() {
        $node.remove();
      });

      $node.removeClass('alert-show');
    }
  }
});

Template.alertItem.onCreated(function() {
  this.data = this.data || {};

  this.destroy = _.bind(function() {
    Alerts.remove(this.data._id);
  }, this);

  this.startTimeout = function() {
    if (this.data.timeout > 0) {
      this.timeout = Meteor.setTimeout(this.destroy, this.data.timeout * 1000);
    }
  };

  this.stopTimeout = function() {
    Meteor.clearTimeout(this.timeout);
  };

  this.startTimeout();
});

Template.alertItem.events({
  'mouseover': function(e, template) {
    template.stopTimeout();
  },

  'mouseout': function(e, template) {
    template.startTimeout();
  },

  'click .close-alert': function(e, template) {
    template.destroy();
  }
});

var pfx = ['webkit', 'moz', 'MS', 'o', ''];
function cssEvent(element, type, callback) {
  for (var p = 0; p < pfx.length; p++) {
    if (!pfx[p]) type = type.toLowerCase();
    element.addEventListener(pfx[p] + type, callback, false);
  }
}