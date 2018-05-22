'use strict';

var app = app || {};

(function(module) {

  function Book(bookLiteral) {
    Object.keys(bookLiteral).forEach(key => this[key] = bookLiteral[key]);
  }

  Book.all = [];

  Book.prototype.toHtml = function() {
    var template = Handlebars.compile($(`#book-template`).text());

    return template(this);
  };

  Book.loadAll = bookData => {
    bookData.sort((a,b) => a.title - b.title);

    Book.all = bookData.map(bookObj => new Book(bookObj));
  };

  Book.fetchAll = callback => {
    $.get('/api/vi/books')
      .then(response => {
        Book.loadAll(response);
        callback();
      });
  };

  module.Book = Book;
})(app);