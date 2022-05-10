# hexo-theme-delicate

delicate3.0 版本大更新！ - 重构页面样式

> 依据bootstrap设计的一款hexo主题  
> [Demo site](https://kartjim.top/delicate)  
> 加入QQ交流群：`499080703`

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
