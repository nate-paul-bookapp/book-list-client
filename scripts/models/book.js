'use strict';

function Book(bookLiteral) {
  Object.keys(bookLiteral).forEach(key => this[key] = bookLiteral[key]);
}

Book.all = [];

Book.prototype.toHtml = function() {
  var template = Handlebars.compile($(`#book-template`).text());

  return template(this);
};

Book.loadAll = bookData => {
  bookData.sort((a,b) => a.author - b.author);

  Book.all = bookData.map(bookObj => new Book(bookObj));
};

Book.fetchAll = callback => {
  $.get('/books')
    .then(response => {
      Book.loadAll(response);
      callback();
    });
};