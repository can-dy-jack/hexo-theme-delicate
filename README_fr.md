# delicate

[README.md](/README.md)

> Un thème `hexo` en langue indienne basé sur `bootstrap`  
> [Demo site](https://kartjim.top/delicate)

windows:  
![Demo](https://z3.ax1x.com/2021/11/24/oPyYtg.png)
phone:  
<img src="https://z3.ax1x.com/2021/11/24/oPyr7T.jpg" width=300/>

<div align="center">

[Chinses](/README.md) | [English](/README-EN.md)

</div>

<div align="center">
<a href="https://nodejs.org"><img src="https://img.shields.io/badge/node-%3E%3D10.9.0-blue"></a>
<a href="https://hexo.io"><img src="https://img.shields.io/badge/hexo-4.3.0-brightgreen"></a>
<a href="https://github.com/can-dy-jack/hexo-theme-delicate/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-orange"></a>
</div>

## Tutoriels

Par défaut, vous avez créé un projet [hexo](https://hexo.io)

### Utilisation

Copiez le Code de cet entrepôt dans votre projet `hexo`:

```bash
$ git clone https://github.com/can-dy-jack/hexo-theme-delicate themes/delicate
```

Ou vous pouvez télécharger le Code de cet entrepôt et le décompresser sous le dossier thème
Il suffit de modifier la configuration après `_config.yml`：

```yml
theme: delicate
```

### Personnalisation front-matter

1. Top Article

```yml
top: true
```

### Personnalisation tag

1. note

```ejs
{% note [class] %}
note-info
{% endnote %}
```

2. color

> Utilisé pour définir la couleur du texte  
> Paramètres de couleur du texte: HEX | rgb() | rgba() | HSL() ...  
> Notez que s'il y a des espaces au milieu du texte, des guillemets sont nécessaires.  

```ejs
{% color [color] Texte %}
```

### markdown

[markdown](https://kartjim.top/delicate/2021/11/14/markdown%E6%B5%8B%E8%AF%95%E6%96%87%E4%BB%B6/)

### Tag Plugins

- [stevenlei/CSS Dynamic Background](https://codepen.io/stevenlei/pen/ZEJxXGL?editors=1100)

## Plan de développement

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
