# delicate

> 依据bootstrap设计的一款hexo主题  
> [Demo site](https://kartjim.top/delicate)

windows:
![Demo](https://z3.ax1x.com/2021/11/09/IYRVcd.jpg)
phone:
<img src="https://z3.ax1x.com/2021/11/09/IYRh4O.jpg" width=300/>


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
> 需要注意的是，前面的颜色值和后面的文字中间不能有空格！
> 如果真的需要空格，那就使用两个及以上的color tag！

```ejs
{% color [color] 文字 %}
```

### markdown

[markdown样式](https://kartjim.top/delicate/2021/11/14/markdown%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6/)

### 标签插件（Tag Plugins）

[Tag Plugins](https://kartjim.top/delicate/2021/11/12/code-test/)

## 参考项目

- [stevenlei/CSS Dynamic Background](https://codepen.io/stevenlei/pen/ZEJxXGL?editors=1100)

## 打赏

![打赏](https://z3.ax1x.com/2021/11/17/I4XS4x.jpg)

## 计划

- [ ] 给个别 note tag 添加svg提示图标！
- [ ] 将delicate主题提交到 hexo主题
- [ ] 搜索功能
- [ ] 多语言
- [ ] 文章侧边标题导航栏
- [ ] 展示图片?
- [ ] README.md其它语言版本
- [ ] 小组件
- [ ] 更多背景样式
- [ ] 更多canvas炫酷3D背景
- [ ] [官方API](https://hexo.io/zh-cn/api/) - 更多定制内容

### bug

- [ ] 把评论放在每篇文章下
- [ ] 代码块复制按钮 位置

### 已完成

- [x] 使用bootstrap面包屑导航
- [x] 评论系统
- [x] 优化markdown基本语法样式
- [x] 代码块样式与代码高亮
- [x] 代码块复制按钮
- [x] 标签页面和分类页面逻辑
- [x] 测试文件
- [x] 反馈功能
- [x] 更多的社交账户选项
- [x] Tag Plugins
- [x] 标签页面
- [x] 主题内置 note 提示块标签
- [x] canvas炫酷3D背景 其1
