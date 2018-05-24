'use strict';

var app = app || {};

(function(module) {
  var errorView = {};

  errorView.initErrorPage = function(err) {
    app.showOnly('#error-view');
    $('#error-message').empty();
    $('#error-view').append(app.render('error-template', err));
  };

  errorView.errorCallback = function(error) {
    errorView.initErrorPage(error);
  };

  module.errorView = errorView;
})(app);