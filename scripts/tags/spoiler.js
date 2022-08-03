hexo.extend.tag.register('spoiler', (args) => {
    return `<span class="spoiler">${args[0]}</span>`
}, { ends: false });
// {% spoiler text %}