function toTop() {
    window.scrollTo(0, 0);
}

const delicateDom = {
    $: str => document.querySelectorAll(str),
    id: str => document.getElementById(str),
    _: str => document.createElement(str),
    dom: function() {
        return {
            modeBtn: this.id("mode-btn"),
            modeBtnIconSun: this.id("mode-btn-icon-sun"),
            modeBtnIconMoon: this.id("mode-btn-icon-moon"),
            body: document.body || this.$("body")[0],
        }
    },
}

const delicate = {
    name: "Delicate",
    description: "simple but delicate theme for Hexo",
    author: "Kart Jim",
    doms: {},
    init: function() {
        const root = this;
        // dom 获取
        this.doms = Object.assign(
            { },
            this.doms,
            delicateDom.dom()
        );
        // 事件绑定
        this.doms.modeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            root.toggleMode();
        });
    },
    changeMode: function(type) {
        // dark to light
        if (type === 'dark') {
            this.doms.body.classList.add('dark');
            this.doms.modeBtnIconMoon.style.display = "none";
            this.doms.modeBtnIconSun.style.display = "inline-block";
        } else { // light to dark
            this.doms.body.classList.remove('dark');
            this.doms.modeBtnIconMoon.style.display = "inline-block";
            this.doms.modeBtnIconSun.style.display = "none";
        }
    },
    toggleMode: function() {
        if (this.doms.body.classList.contains('dark')) {
            this.doms.modeBtnIconMoon.style.display = "inline-block";
            this.doms.modeBtnIconSun.style.display = "none";
        } else {
            this.doms.modeBtnIconMoon.style.display = "none";
            this.doms.modeBtnIconSun.style.display = "inline-block";
        }
        this.doms.body.classList.toggle('dark');
    },
    toTop: toTop,
}

window.delicate = delicate;

// 初始化
delicate.init();
// delicate.changeMode();
