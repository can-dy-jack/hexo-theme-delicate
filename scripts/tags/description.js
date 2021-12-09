const description = (args, content) => {
    if (!args[0]) {
        args[0] = 'dark';
    }
    var text = hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('');
    return "<div class='description "+ args[0] +"'><span class='description-title'>"+ args[1] +"</span><div>"+ text + "</div></div>";
};

hexo.extend.tag.register('description', description, {
    ends: true
});