'use strict';

var app = app || {};

var bookView = {};

(function(module) {

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();

    console.log(app.Book.all);
    app.Book.all.forEach(elem => {

      $('#book-display').append(elem.toHtml());
    });
  };

  module.bookView = bookView;
})(app);