/**
 * @author Kart Jim
 * 
 * generators
 */

// generate tags page
hexo.extend.generator.register("_tags", function (locals) {
  if (this.theme.config.index.links.tags) {
    return {
      path: "tags/index.html",
      data: locals.theme,
      layout: "tags",
    };
  }
});

// generate categories page
hexo.extend.generator.register("_categories", function (locals) {
  if (this.theme.config.index.links.categories) {
    return {
      path: "categories/index.html",
      data: locals.theme,
      layout: "categories",
    };
  }
});

// generate 404 page
hexo.extend.generator.register("_404", function (locals) {
  return {
    path: "404.html",
    data: locals.theme,
    layout: "404",
  };
});
