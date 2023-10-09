const delicateDom = {
  $: (str) => document.querySelectorAll(str),
  id: (str) => document.getElementById(str),
  _: (str) => document.createElement(str),
  dom: function () {
    return {
      modeBtn: this.id("mode-btn"),
      body: document.body || this.$("body")[0],
    };
  },
};

const delicate = {
  name: "Delicate",
  description: "simple but delicate theme for Hexo",
  author: "Kart Jim",
  doms: {},
  init: function () {
    // 加载进度条
    this.initProgress();

    const root = this;
    // dom 获取
    this.doms = Object.assign({}, this.doms, delicateDom.dom());
    // 事件绑定
    // this.doms.modeBtn.addEventListener("click", (e) => {
    //     // e.preventDefault();
    //     root.toggleMode();
    // });
  },
  changeMode: function (type) {
    // dark to light
    if (type === "dark") {
      this.doms.body.classList.add("dark");
    } else {
      // light to dark
      this.doms.body.classList.remove("dark");
    }
  },
  toggleMode: function () {
    this.doms.body.classList.toggle("dark");
  },
  toTop: function () {
    window.scrollTo(0, 0);
  },
  initProgress: initProgress,
};

function initProgress() {
  const resources = window.performance.getEntriesByType("resource");
  const totalResources = resources.length;
  let loadingRs = 0;
  
  resources.forEach((resource) => {
    console.log(resource)
    // ajax not count
    if (resource.initiatorType !== "xmlhttprequest") {

//       resource.onload = function() {
//         loadingRs++;
//         const progress = Math.round((loadingRs / totalResources) * 100);
//         console.log(progress);
// 
//         updateProgress(progress);
//         // if (loadingRs === totalResources) {
//         // }
//       };
    }
  });
}
function updateProgress(progress) {
  console.log(progress);
}

window.delicate = delicate;

// 初始化
delicate.init();
