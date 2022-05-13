hexo.extend.tag.register('collapse', (args, content) => {
    var text = hexo.render.renderSync({ text: content, engine: 'markdown' }).split('\n').join('');
    return `<div class="collapse collapse-${args[0]}">
                <div class="collapse-btn">
                    <button>${args[1]}</button>
                </div>
                <div class="collapse-text">${text}</div>
            </div>`;
}, {
    ends: true
});