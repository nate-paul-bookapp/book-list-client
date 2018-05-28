'use strict';

var app = app || {};

(function(module) {
  var adminView = {};

  adminView.initAdminPage= () => {
    let $itemList = $('#item-list');
    $itemList.empty();
    app.showOnly('#admin-view');

    $('#admin-view').append(app.render('admin-template'));

    app.Book.all.forEach(elem => {
      $itemList.append(`<button id="delete-${elem.title}" class="submit-delete">Delete ${elem.title}</button>`);
      $itemList.append(elem.toHtml());
    });

    $('.submit-delete').on('click', (e) => {
      e.preventDefault();

      $.ajax({
        url: `${app.ENVIRONMENT.apiUrl}/api/v1/books`,
        method: 'DELETE',
        data: e.target.id.split('-')[1]
      });
    });
  };

  module.adminView = adminView;
})(app);