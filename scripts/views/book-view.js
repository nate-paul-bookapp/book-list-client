'use strict';

var app = app || {};

var bookView = {};

(function(module) {

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();

    app.Book.all.forEach(elem => {
      $('#book-display').append(elem.toHtml());
    });

    console.log(app.Book.all.length);
    $('#book-count').append(app.Book.all.length);
  };

  module.bookView = bookView;
})(app);