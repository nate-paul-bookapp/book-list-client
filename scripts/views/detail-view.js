'use strict';

var app = app || {};

(function(module) {
  var detailView = {};

  detailView.fetchOne = (ctx) => {
    app.showOnly('#book-details');

    $.get(`${app.ENVIRONMENT.apiUrl}${ctx.path}`)
      .then(response => {
        let $bookDetails = $('#book-details');
        $bookDetails.empty();
        $bookDetails.append(app.render('book-detail-template', response[0]));
      });
  };

  module.detailView = detailView;
})(app);