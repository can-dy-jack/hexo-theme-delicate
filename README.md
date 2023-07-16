# hexo-theme-delicate

> ! 本主题处于 version4 重构开发阶段 !

## 使用
### 方法一
使用：
```bash
npm i hexo-theme-delicate
```

然后在根目录的 `_config.yml` 下配置 `theme: delicate` 并重启项目

### 方法二 **推荐**
到 `themes` 目录下，clone 本主题的文件：
```bash
https://github.com/can-dy-jack/hexo-theme-delicate.git
```

然后在根目录的 `_config.yml` 下配置 `theme: delicate` 并重启项目

### 主题配置
到主题下的配置文件 `_config.yml` 进行配置。如果您是使用方法一进行安装的，需要新建 `_config.delicate.yml` 文件，并将主题仓库下的配置文件复制进行进行配置。

## 使用注意事项
本主题支持的语言如下
- 中文简体 `zh-CN`
- English `en`

## 近期更新
### 公式支持
> 使用CDN支持 `mathjax` 和 `katex`

开启方式：在文档的 Front-matter 里加入:
```yml
mathjax: true
```
或
```yml
katex: true
```
即可。

不需要渲染公式的文章请不要开启！避免影响页面加载速度！

`katex`渲染示例：
```katex
$$\begin{pmatrix}a_{11} & a_{12} & a_{13}\ a_{21} & a_{22} & a_{23}\ a_{31} & a_{32} & a_{33}\end{pmatrix}$$

---

$$a^2+b^2=c^2$$
```

![katex.png](https://s2.loli.net/2023/07/16/lcUwDYPa7IOnTQ8.png)

**注：本主题使用CDN加载公式转换脚本的方式支持公式。**  
**您可以在博客根目录下安装[`hexo-filter-mathjax`](https://github.com/next-theme/hexo-filter-mathjax)或`hexo-math`等插件来支持公式，这样就可以在打包的时候就完成公式的渲染，加快请求速度。（使用插件的话记得关闭主题的公式支持）**

## TODOs

### BUGs 🐛
- [ ] 首页无公式渲染

### In progress
- [ ] 样式整理，颜色变量、黑暗模式
- [ ] stylus 函数、基本样式、mixins
<!-- - [ ] 代码块复制按钮，mac样式 -->
- [ ] 页面 title
- [ ] i18n
- [ ] 黑暗模式
- [ ] 公式支持
    - [ ] latex
    - [ ] mathjax
- [ ] 移动适配

### Planning ~
- [ ] 广告支持

