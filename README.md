# delicate

> 依据bootstrap设计的一款hexo主题  
> [Demo site](https://kartjim.top/delicate)

<div align="center">

[English](/README-EN.md)

</div>

<div align="center">
<a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D10.9.0-blue"></a>
<a href="https://hexo.io"><img src="https://img.shields.io/badge/hexo-4.3.0-brightgreen"></a>
<a href="https://github.com/can-dy-jack/hexo-theme-delicate/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-orange"></a>
</div>

## 教程

使用主题默认您已创建过[hexo](https://hexo.io)项目

### 下载

1. npm
！暂时还没发布到npm！

```bash
npm install --save hexo-theme-fluid
```

然后在博客目录下创建 `_config.fluid.yml`，将主题的 _config.yml 内容复制进去。

2. 或者你可以**下载本仓库的代码，解压到theme文件夹之下，重命名文件夹为`delicate`。**

### 使用

之后只需更改配置 `_config.yml`：

```yml
theme: delicate
```

### 本主题自定义 front-matter

1. 置顶文章

在文章的Front-matter添加: `top: true`即可置顶文章

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

- [ ] 标签页面
- [ ] 搜索功能
- [ ] 添加404页面 —— 要是在域名根路径下才行
- [ ] 给个别 note tag 添加svg提示图标
- [ ] 多语言 - 国际化（i18n）
- [ ] 文章分享功能
- [ ] 永久连接问题
- [ ] 添加更多评论系统
- [ ] 文章标题导航栏？
- [ ] 更多背景样式 - 添加黑暗模式
- [ ] 更多canvas炫酷3D背景
- [ ] 多个鼠标样式
- [ ] 更多小组件
- [ ] 根据[hexo官方API](https://hexo.io/zh-cn/api/) - 更多定制内容

### 优化

- [ ] [fancybox](https://fancyapps.com/docs/ui/fancybox/api)更多功能
- [ ] 优化/更改 wordcount.js 算法
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
- 把评论放在每篇文章下

### 更新

- [x] 给文章内的图片加上一定的阴影
- [x] menu优化
