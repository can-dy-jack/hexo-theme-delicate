const codepen = (args) => {
    const height = args[3] || 300,
        tabs = args[4] || 'html,result'
        hash = args[0] || '',
        user = args[1] || '',
        title = args[2] || '';
    return `<p class="codepen" data-height="${height}" data-default-tab=${tabs} data-slug-hash=${hash} data-user=${user} >
        <span>See the Pen <a href="https://codepen.io/${user}/pen/${hash}">
        ${title}</a> by ${user} (<a href="https://codepen.io/${user}">@${user}</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
    </p>
    <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
};

hexo.extend.tag.register('codepen', codepen, { ends: false });

/* use: {% codepen [your pen's hash] [your codepen's user] [your codepen's title] [height] [data-default-tab] %}  */
