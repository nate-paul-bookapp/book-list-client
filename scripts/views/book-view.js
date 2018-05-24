'use strict';

var app = app || {};

(function(module) {
  var bookView = {};

  bookView.initIndexPage = function() {
    let $bookList = $('#book-list');
    $bookList.empty();
    $('.container').hide();
    $('#book-view').show();

    app.Book.all.forEach(elem => {
      $bookList.append(elem.toHtml());
    });

    let $bookCount = $('#book-count');
    $bookCount.empty();
    $bookCount.append(app.Book.all.length);
  };

  module.bookView = bookView;
})(app);