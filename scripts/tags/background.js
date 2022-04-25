const background = (args) => {
    const text = (args[0] || '文本高亮').trim();
    const bgColor = (args[1] || '#ffff00').trim();
    const textColor = (args[2] || '#222').trim();
    return '<span style="background:'+ bgColor + ';color:' + textColor + '">' + text + '</span>';
};
hexo.extend.tag.register('background', background, { ends: false });
/* use: {% background content [bg-color] [text-color] %} */
