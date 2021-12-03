# delicate

> 依据bootstrap设计的一款hexo主题  
> [Demo site](https://kartjim.top/delicate)

<div align="center">

[English](/README-EN.md) | [Français](/README_fr.md)

</div>

<div align="center">
<a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D10.9.0-blue"></a>
<a href="https://hexo.io"><img src="https://img.shields.io/badge/hexo-4.3.0-brightgreen"></a>
<a href="https://github.com/can-dy-jack/hexo-theme-delicate/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-orange"></a>
</div>

## 教程

使用主题默认您已创建过[hexo](https://hexo.io)项目

### 使用

将本仓库的代码复制到您的hexo项目:

```bash
$ git clone https://github.com/can-dy-jack/hexo-theme-delicate themes/delicate
```

或者可以下载本仓库的代码，解压到theme文件夹之下。

之后只需更改配置 `_config.yml`：

```yml
theme: delicate
```

### 本主题自定义 front-matter

1. 置顶文章

```yml
top: true
```

### 本主题内置tag

1. note

```ejs
{% note [class] %}
note-info
{% endnote %}
```

2. color

> 用于设定文字颜色
> 文字颜色可以随便设置，颜色名称 | HEX | rgb() | rgba() | HSL() 等等均可。
> 需要注意的是，前面的颜色值和后面的文字中间如果有空格，需要加上引号。

```ejs
{% color [color] 文字 %}
```

### markdown

[markdown样式](https://kartjim.top/delicate/2021/11/14/markdown%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6/)

### 标签插件（Tag Plugins）

[Tag Plugins](https://kartjim.top/delicate/2021/11/12/code-test/)

## 参考项目

- [stevenlei/CSS Dynamic Background](https://codepen.io/stevenlei/pen/ZEJxXGL?editors=1100)
- [juejin-全面改造属于你的个性化博客](https://juejin.cn/post/6997775533840793614#heading-5)

## 打赏

<img src="https://i.loli.net/2021/11/23/AKlzU5R7wNdHSpo.jpg" width=300 alt="打赏"/>

## 开发计划

- [ ] 给个别 note tag 添加svg提示图标！
- [ ] 多语言 - 国际化（i18n）
- [ ] 添加更多评论系统
- [ ] 更多背景样式 - 添加黑暗模式
- [ ] 更多canvas炫酷3D背景
- [ ] 多个鼠标样式
- [ ] 更多小组件
- [ ] 根据[hexo官方API](https://hexo.io/zh-cn/api/) - 更多定制内容

### 待完善

- [ ] [fancybox](https://fancyapps.com/docs/ui/fancybox/api)更多功能
- [ ] 优化/更改 hexo-wordcount.js 算法
- [ ] 优化 firework.js
- [ ] 优化雪花飘落效果 + 用户选项
- [ ] 优化天气组件
- [ ] 迁移博客里的图标
- [ ] 小组件 - 音乐
  - QQ音乐歌曲列表
  - QQ音乐更多功能，[参考官网接口](https://y.qq.com/m/api/open/index.html)
  - 侧边音乐仅支持一个歌曲？
  - 接入其它音乐
  - 歌词？

### bug

- 把评论放在每篇文章下
- 代码块复制按钮 位置
- 一个note tag内只能有一个列表

### more

- js重写雪花飘落特效
- js重写firework.js
- 文章侧边标题导航栏
- 搜索功能
- 添加404页面 —— 要是在域名根路径下才行
