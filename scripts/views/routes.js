'use strict';

page('/', (ctx) => app.Book.fetchAll(ctx, app.bookView.initIndexPage));

page('/api/v1/books/:book_id', (ctx) => app.detailView.fetchOne(ctx));

page('/login', () => {
  app.adminView.initAdminPage();
});

page('/create-book', () => app.createView.initNewBookPage());

page('/about-us', (ctx) => app.aboutView.initAboutUs(ctx));



page();