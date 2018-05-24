'use strict';

page('/', (ctx) => app.Book.fetchAll(ctx, app.bookView.initIndexPage));

page('/login', () => {
  app.adminView.initAdminPage();
});

page('/about-us', (ctx) => app.aboutView.initAboutUs(ctx));



page();