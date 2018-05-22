'use strict';

var app = app || {};

var errorView = {};

(function(module) {

  errorView.initErrorPage = function(err) {
    $('.container').hide();
    $('.error-view').show();

    $('#error-message').empty();

    let template = Handlebars.compile($('#error-message').text());
    $('.error-view').append(template);
  };

  errorView.errorCallback = function(error) {
    console.log(error);
    errorView.initErrorPage(error);
  };

  module.errorView = errorView;
})(app);