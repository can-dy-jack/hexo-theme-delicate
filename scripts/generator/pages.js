/* global hexo */

'use strict';

const fs = require('fs');
const path = require('path');

// generate tags page
hexo.extend.generator.register('_tags', function(locals) {
 if (this.theme.config.router.tags) {
    return {
      path  : 'tags/index.html',
      data  : locals.theme,
      layout: 'tags'
    };
  }
});

// generate categories page
hexo.extend.generator.register('_categories', function(locals) {
  if (this.theme.config.router.categories) {
    return {
      path  : 'categories/index.html',
      data  : locals.theme,
      layout: 'categories'
    };
  }
});

// generate 404 page
if (!fs.existsSync(path.join(hexo.source_dir, '404.html'))) {
  hexo.extend.generator.register('_404', function(locals) {
    if (this.theme.config.router.page404) {
      return {
        path  : '404.html',
        data  : locals.theme,
        layout: '404'
      };
    }
  });
}
