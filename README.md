# hexo-theme-delicate

> 这时一款很随意的hexo主题，会经常随心所欲变化风格。
> [Demo site](https://kartjim.top/delicate)  
> 欢迎加入QQ交流群：`499080703`

<div style="display:flex;justify-content: space-evenly;">
<a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D10.9.0-blue"></a>
<a href="https://hexo.io"><img src="https://img.shields.io/badge/hexo-4.3.0-brightgreen"></a>
<a href="https://github.com/can-dy-jack/hexo-theme-delicate/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-orange"></a>
<a href="https://github.com/can-dy-jack/hexo-theme-delicate"><img src="https://img.shields.io/badge/delicate-3-%23f8e5af"></a>
</div>

## 使用指南

使用主题默认您已创建过[hexo](https://hexo.io)项目

### 下载

1. npm

```bash
# use npm
npm i hexo-theme-delicate
# or use yarn
yarn add hexo-theme-delicate
```

然后去 `node_modules` 文件夹找到 `hexo-theme-delicate` 文件夹，将其剪切到目录下的 `themes` 文件夹下。

2. 推荐使用git

```git
git clone https://github.com/can-dy-jack/hexo-theme-delicate.git theme/delicate
```

3. 或者你可以**下载本仓库的代码，解压到theme文件夹之下，重命名文件夹为`delicate`。**

### 使用

之后只需更改配置 `_config.yml`：

```yml
theme: delicate
```
### markdown扩展

#### mathjax
为了避免加载时间过长，需要在文章的 Front-matter 中添加 `mathjax: true` 才能开启 mathjax

#### mermaid
首先：安装插件：
```bash
npm install hexo-filter-mermaid-diagrams
# or yarn
yarn add hexo-filter-mermaid-diagrams
```

在文章的 Front-matter 中添加 `mermaid: true` , 开启 mermaid。

#### 思维导图

首先，需要安装插件：

```bash
npm install hexo-simple-mindmap
```

然后插入思维导图：

```markdown
{% pullquote mindmap mindmap-md %}
- [在 Hexo 中使用思维导图](https://hunterx.xyz/use-mindmap-in-hexo.html)
  - 前言
  - 操作指南
    - 准备需要的文件
    - 为主题添加 CSS/JS 文件
  - 使用方法
{% endpullquote %}
```

### 搜索

如果您想避免具体某一篇文章或页面被本地搜索引擎搜索到，在`front-matter`里添加 `indexing: false` 即可。

## bug解决

1. 控制台报错
```bash
(node:8864) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:8864) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:8864) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
(node:8864) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(node:8864) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:8864) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
```
好像是`nib`库的问题，`node_modules\nib\node_modules\stylus\lib\nodes`里的文件与`node_modules\stylus\lib\nodes\index.js`的不一样导致的（缺了三行）

解决：
找到下面的文件：
`node_modules\nib\node_modules\stylus\lib\nodes`
在`index.js`文件中加上以下代码:
```
exports.lineno = null;
exports.column = null;
exports.filename = null;
```

> 更多bug，可以创建issue，或者邮件联系我

## 最新更新

- [x] table-style and selection-color and code-scrollbar ⭐
- [x] mathjax支持 🎉
- [x] mermaid 🥳
- [x] 思维导图 ⭐
- [x] 搜索界面优化

### 计划

- [ ] Valine更多配置
- [ ] SEO
- [ ] 更多评论系统
- [ ] atom.xml
- [ ] 字体
