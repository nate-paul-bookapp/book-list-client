'use strict';

var app = app || {};


(function(module) {
  var bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();

    app.Book.all.forEach(elem => {
      $('#book-list').append(elem.toHtml());
    });

    console.log(app.Book.all.length);
    $('#book-count').append(app.Book.all.length);
  };

  module.bookView = bookView;
})(app);