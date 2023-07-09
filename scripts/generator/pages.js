/**
 * @author Kart Jim
 * 
 * generators
 */

// generate tags page
hexo.extend.generator.register("_tags", function (locals) {
  if (this.theme.config.index.links.tag) {
    return {
      path: "tags/index.html",
      data: locals.theme,
      layout: "tags",
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
