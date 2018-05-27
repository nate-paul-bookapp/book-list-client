'use strict';

page('/', (ctx) => app.Book.fetchAll(ctx, app.bookView.initIndexPage));

page('/details/:book_id', (ctx) => app.detailView.fetchOne(ctx));

page('/destroy-book/:book-id', (ctx) => {
  app.Book.destroyBook(ctx, app.bookView.initIndexPage);
});

page('/login', () => {
  app.adminView.initAdminPage();
});

page('/create-book', () => app.createView.initNewBookPage());

page('/about-us', (ctx) => app.aboutView.initAboutUs(ctx));



page();