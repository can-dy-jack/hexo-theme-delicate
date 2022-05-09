# hexo-theme-delicate


3.0版本 - 重构页面样式


> 依据bootstrap设计的一款hexo主题  
> [Demo site](https://kartjim.top/delicate)  
> 加入QQ交流群：`499080703`

<div style="display:flex;justify-content: space-evenly;">
<a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D10.9.0-blue"></a>
<a href="https://hexo.io"><img src="https://img.shields.io/badge/hexo-4.3.0-brightgreen"></a>
<a href="https://github.com/can-dy-jack/hexo-theme-delicate/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-orange"></a>
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

## 开发idea

- 好康的颜色：aquamarine
- 手机端侧边栏（nav、toc）变成小条状，浮在屏幕右边。（参考react官网）
- 参考其他主题（尤其是默认主题）！

搜索功能暂时不做：
- google搜索：<%- search_form() %>
- 站内搜索：search.xml

页面：
- tag
- categories
- ……

参考其它主题的主题配置文件使用方式（默认主题等）！

更多国际化（i18n）

更新hexo图片

leetcode竞赛 - 分享按钮


适配：用户新建页面 + 页面地址导航

结合官网的更多变量来实现更丰富的内容！

jump_pages函数用hexo内置方法重写，写到scripts/healper里？

404页面

