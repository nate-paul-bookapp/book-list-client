'use strict';

var app = app || {};

(function(module) {
  var createView = {};

  createView.initNewBookPage = function() {
    app.showOnly('#new-book');
  };




  module.createView = createView;
})(app);