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
    Book.all = bookData.map(bookObj => new Book(bookObj));
  };

  Book.fetchAll = callback => {
    $.get(`${module.ENVIRONMENT.apiUrl}/api/v1/books`)
      .then(response => {
        Book.loadAll(response);
        callback();
      })
      .catch(err => {
        app.errorView.errorCallback(err);
      });
  };

  module.Book = Book;
})(app);