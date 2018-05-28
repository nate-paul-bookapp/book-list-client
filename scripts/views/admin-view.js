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
      $itemList.append(`<button id="delete-${elem.title}" type="submit">Delete ${elem.title}</button>`);
      $itemList.append(elem.toHtml());
    });
  };

  adminView.deleteItem = function() {

  };

  module.adminView = adminView;
})(app);