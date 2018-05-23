'use strict';

page('/api/v1/books', ctx => app.Book.fetchAll(ctx.path, app.bookView.initIndexPage));

page('/api/v1/addnew', app.bookView.initNewBookPage);

page('/about-us', app.bookView.initAboutUs);

page('/api/v1/books/:id', ctx => app.Book.fetchOne(ctx.path));



page();