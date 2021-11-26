// bootstrap alert
const alert = (args, text) =>{
    if (!args || !args[0]) {
        args = ['primary'];
    }

    return `<div class="alert alert-${args.join(' ')}">
                ${hexo.render.renderSync({ text: text, engine: 'markdown' }).split('\n').join('')}
            </div>`;
}
hexo.extend.tag.register('alert', alert, { ends: true });
