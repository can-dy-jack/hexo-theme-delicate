hexo.extend.tag.register('search', (args) => {
    if(args[1] === undefined) {
        args[1] = "https://www.baidu.com/s?wd=" + args[0];
    }
    return `<a href="${args[1]}" class="search">${args[0]}</a>`
}, { ends: false });
// {% search text link %}