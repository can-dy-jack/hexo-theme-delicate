const delicateDom = {
    $: str => document.querySelectorAll(str),
    id: str => document.getElementById(str),
    _: str => document.createElement(str),
    dom: function() {
        return {
            modeBtn: this.id("mode-btn"),
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
        // this.doms.modeBtn.addEventListener("click", (e) => {
        //     // e.preventDefault();
        //     root.toggleMode();
        // });
    },
    changeMode: function(type) {
        // dark to light
        if (type === 'dark') {
            this.doms.body.classList.add('dark');
        } else { // light to dark
            this.doms.body.classList.remove('dark');
        }
    },
    toggleMode: function() {
        this.doms.body.classList.toggle('dark');
    },
    toTop: function() {
        window.scrollTo(0, 0);
    },
}

window.delicate = delicate;

// 初始化
delicate.init();
