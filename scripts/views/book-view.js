'use strict';

var app = app || {};


(function(module) {
  var bookView = {};

  bookView.initIndexPage = function() {
    let $bookList = $('#book-list');
    $bookList.empty();
    $('.container').hide();
    $('.book-view').show();

    app.Book.all.forEach(elem => {
      $bookList.append(elem.toHtml());
    });

    console.log(app.Book.all.length);
    $('#book-count').append(app.Book.all.length);
  };

  bookView.initNewBookPage = function() {
    $('.container').hide();
    $('#new-book').show();
  };

  bookView.initAboutUs = function() {
    $('.container').hide();
    $('#about-us').show();
  };

  module.bookView = bookView;
})(app);