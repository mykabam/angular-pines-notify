angular.module('ui.notify', []).
  factory('notificationService', [ function() {

    var settings = {
      styling: 'bootstrap' // or 'jqueryui'
    };

    return {

      /* ========== SETTINGS RELATED METHODS =============*/

      getSettings: function() {
        return settings;
      },

      /* ============== NOTIFICATION METHODS ==============*/

      notice: function(content) {
        var hash = angular.copy(settings);
        hash.type = 'notice';
        hash.text = content;
        return this.notify(hash);
      },

      info: function(content) {
        var hash = angular.copy(settings);
        hash.type = 'info';
        hash.text = content;
        return this.notify(hash);
      },

      success: function(content) {
        var hash = angular.copy(settings);
        hash.type = 'success';
        hash.text = content;
        return this.notify(hash);
      },

      error: function(content) {
        var hash = angular.copy(settings);
        hash.type = 'error';
        hash.text = content;
        return this.notify(hash);
      },

      notify: function(hash) {
        return jQuery.pnotify(hash);
      }

    };

  }]);
