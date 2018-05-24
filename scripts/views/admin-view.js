'use strict';

var app = app || {};

(function(module) {
  var adminView = {};

  adminView.initAdminPage= () => {
    app.showOnly('#login-page');
  };




  module.adminView = adminView;
})(app);