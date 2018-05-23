'use strict';

var app = app || {};


(function(module) {
  var errorView = {};

  errorView.initErrorPage = function(err) {
    $('.container').hide();
    $('#error-view').show();
    $('#error-message').empty();
    $('#error-view').append(app.render('error-template', err));
  };

  errorView.errorCallback = function(error) {
    console.log(error);
    errorView.initErrorPage(error);
  };

  module.errorView = errorView;
})(app);