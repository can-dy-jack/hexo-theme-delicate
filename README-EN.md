# delicate

[README.md](/README.md)
> A hexo theme designed according to bootstrap.  
> [Demo site](https://kartjim.top/delicate)

<div align="center">

[Chinses](/README.md)| [Français](/README_fr.md)

</div>

<div align="center">
<a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D10.9.0-blue"></a>
<a href="https://hexo.io"><img src="https://img.shields.io/badge/hexo-4.3.0-brightgreen"></a>
<a href="https://github.com/can-dy-jack/hexo-theme-delicate/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-orange"></a>
</div>

## install

By default, you have created a [hexo](https://hexo.io) project

### use

Copy the code to your hexo project:

```bash
$ git clone https://github.com/can-dy-jack/hexo-theme-delicate themes/delicate
```

or you can download the zip file and unzip it to the theme folder

After that, just change `_config.yml`：

```yml
theme: delicate
```

### this theme custom front-matter

1. Top posts

```yml
top: true
```

### this theme custom tag

1. note

```ejs
{% note [class] %}
note-info
{% endnote %}
```

2. color

> Set the text color  
> color setting: HEX | rgb() | rgba() | HSL() and more type.  
> **The color name should be noted that if there is a space in the middle of the text, quotation marks should be added.**

```ejs
{% color [color] [text] %}
```

### markdown

[markdown styles](https://kartjim.top/delicate/2021/11/14/markdown%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6/)

### Tag Plugins

[Tag Plugins](https://kartjim.top/delicate/2021/11/12/code-test/)

## Reference items

- [stevenlei/CSS Dynamic Background](https://codepen.io/stevenlei/pen/ZEJxXGL?editors=1100)

## development plan

- [ ] 添加404页面
- [ ] 看板娘
- [ ] 添加音乐
- [ ] 给个别 note tag 添加svg提示图标！
- [ ] 将delicate主题提交到 hexo主题 + 上传到npm！
- [ ] 搜索功能
- [ ] 多语言
- [ ] 添加更多评论系统
- [ ] 更多小组件
- [ ] 更多背景样式
- [ ] 更多canvas炫酷3D背景
- [ ] 根据[hexo官方API](https://hexo.io/zh-cn/api/) - 更多定制内容
