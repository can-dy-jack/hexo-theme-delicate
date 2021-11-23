const color = (args) => {
  const color = (args[0] || '').trim();
  const text = (args[1] || '').trim();
  return '<span style="color:'+ color + ';">' + text + '</span>';
};
hexo.extend.tag.register('color', color, { ends: false });
/* use: {% color [color] title %} */
