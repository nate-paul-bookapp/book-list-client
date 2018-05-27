'use strict';

var app = app || {};

(function(module) {
  var detailView = {};

  detailView.fetchOne = (ctx) => {
    app.showOnly('#book-details');

    $.get(`${app.ENVIRONMENT.apiUrl}/api/v1/books/${ctx.params.book_id}`)
      .then(response => {
        let $bookDetails = $('#book-details');
        $bookDetails.empty();
        $bookDetails.append(app.render('book-detail-template', response[0]));
      });
  };

  $('#delete').on('click', function() {
    console.log('DELETE THIS BOOK!');
  });


  module.detailView = detailView;
})(app);