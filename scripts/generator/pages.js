/* global hexo */

'use strict';

// const fs = require('fs');
// const path = require('path');

// generate tags Page
hexo.extend.generator.register('_tags', function(locals) {
 if (this.theme.config.router.tags) {
    return {
      path  : 'tags/index.html',
      data  : locals.theme,
      layout: 'tags'
    };
  }
});
