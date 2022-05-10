/* global hexo */

'use strict';

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
