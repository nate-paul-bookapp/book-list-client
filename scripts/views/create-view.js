'use strict';

var app = app || {};

(function(module) {
  var createView = {};

  createView.initNewBookPage = function() {
    app.showOnly('#new-book');
  };

  $('#submit').on('click', (e) => {
    e.preventDefault();

    let newBook = {
      title: $('#new-title').val(),
      author: $('#new-author').val(),
      isbn: $('#new-isbn').val(),
      image_url: $('#new-url').val(),
      description: $('#new-description').val(),
    };

    $.post(`${app.ENVIRONMENT.apiUrl}/submitted`, newBook)
      .then(result => console.log(result));
  });


  module.createView = createView;
})(app);