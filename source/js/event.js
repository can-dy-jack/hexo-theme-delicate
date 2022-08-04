const rootElement = document.documentElement;
const tocBox = document.getElementById("post-toc"),
  tocBtn = document.getElementById("open-toc");
const friends_more = document.getElementById("friends-more");
const nav_container = document.getElementById("nav-container");

delicate.events = {
  calculateTime: function calculateTime(startTime = "2022-05-01T00:00:00") {
    let now = new Date();
    // 计算网站运算时间的函数
    now.setTime(now.getTime() + 1000);
    stime = new Date(startTime);
    interval = now.getTime() - stime.getTime();

    days = interval / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = interval / 1000 / 60 / 60 - 24 * dnum;
    hnum = Math.floor(hours);
    if (hnum.toString().length == 1) {
      hnum = "0" + hnum;
    }
    minutes = interval / 1000 / 60 - 24 * 60 * dnum - hnum * 60;
    mnum = Math.floor(minutes);
    if (mnum.toString().length == 1) {
      mnum = "0" + mnum;
    }

    const lang = document.documentElement.lang;
    if (
      lang === "zh-cn" ||
      lang === "zh-CN" ||
      lang === "zh-TW" ||
      lang === "zh-tw"
    ) {
      document.getElementById("times").innerHTML =
        "本站已运行 " +
        dnum +
        " 天 " +
        hnum +
        " 小时 " +
        mnum +
        " 分，共 " +
        Math.round(days * 24) +
        " 小时";
    } else {
      document.getElementById("times").innerHTML =
        "The station has been running for " +
        dnum +
        " days, " +
        hnum +
        " hours and " +
        mnum +
        " minutes, a total of " +
        Math.round(days * 24) +
        " hours";
    }
  },

  registerType: function registerType() {
    /**
     * 打字机效果
     * 利用js的 split() 函数能更好的把不同文字按照各自语言的标准，将最小字符分开
     */
    const indexTitleBox = document.getElementById("index-title-box");
    if (indexTitleBox != null) {
      const chars = indexTitleBox.textContent.split("");
      // 清空文字
      indexTitleBox.textContent = "";
      // 将分开后的字符外层加个span标签，再加进去
      for (let i = 0; i < chars.length; i++) {
        setTimeout(() => {
          const span = document.createElement("span");
          span.classList.add("transition");
          span.innerText = chars[i];
          indexTitleBox.appendChild(span);
        }, 200 * i);
      }
    }
  },

  registerPhoneToc: function registerPhoneToc() {
    // 移动端toc
    if (tocBox !== null && tocBtn !== null) {
      let toc_open = false;
      tocBtn.addEventListener("click", () => {
        if (toc_open) {
          tocBox.style.transform = "scaleY(0)";
        } else {
          tocBox.style.transform = "scaleY(1)";
        }
        toc_open = !toc_open;
      });
      window.onresize = (e) => {
        if (window.innerWidth <= 800) {
          toc_open = false;
          tocBox.style.transform = "scaleY(0)";
        } else {
          toc_open = true;
          tocBox.style.transform = "scaleY(1)";
        }
        // registerFriendsMore
        if (window.innerWidth >= 1000) {
          nav_container.style.transform = "translateX(0)";
        } else {
          nav_container.style.transform = "translateX(-100%)";
        }
      };
    } else {
      window.onresize = (e) => {
        // registerFriendsMore
        if (window.innerWidth >= 1000) {
          nav_container.style.transform = "translateX(0)";
        } else {
          nav_container.style.transform = "translateX(-100%)";
        }
      };
    }
  },

  registerFriendsMore: function registerFriendsMore() {
    let isOpen = false;
    if (window.innerWidth <= 1000)
      nav_container.style.transform = "translateX(-100%)";
    friends_more.onclick = (e) => {
      if (isOpen) {
        nav_container.style.transform = "translateX(-100%)";
        isOpen = false;
      } else {
        nav_container.style.transform = "translateX(0)";
        isOpen = true;
      }
    };
  },

  registerDarkMode: function registerDarkMode() {
    const darkModeStorageKey = "user-color-scheme"; // 作为 localStorage 的 key
    const darkModeMediaQueryKey = "--color-mode";
    const rootElementDarkModeAttributeName = "data-user-color-scheme";
    const darkModeTogglebuttonElement = document.getElementById("light-show");

    const setLS = (k, v) => {
      try {
        localStorage.setItem(k, v);
      } catch (e) {}
    };

    const removeLS = (k) => {
      try {
        localStorage.removeItem(k);
      } catch (e) {}
    };

    const getLS = (k) => {
      try {
        return localStorage.getItem(k);
      } catch (e) {
        return null; // 与 localStorage 中没有找到对应 key 的行为一致
      }
    };

    const getModeFromCSSMediaQuery = () => {
      const res = getComputedStyle(rootElement).getPropertyValue(
        darkModeMediaQueryKey
      );
      if (res.length) return res.replace(/\"/g, "").trim();
      return res === "dark" ? "dark" : "light";

      // 使用 matchMedia API 的写法会优雅的多
      // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    };
    const resetRootDarkModeAttributeAndLS = () => {
      rootElement.removeAttribute(rootElementDarkModeAttributeName);
      removeLS(darkModeStorageKey);
    };
    const validColorModeKeys = {
      dark: true,
      light: true,
    };

    const applyCustomDarkModeSettings = (mode) => {
      // 接受从「开关」处传来的模式，或者从 localStorage 读取
      const currentSetting = mode || getLS(darkModeStorageKey);

      if (currentSetting === getModeFromCSSMediaQuery()) {
        // 当用户自定义的显示模式和 prefers-color-scheme 相同时重置、恢复到自动模式
        resetRootDarkModeAttributeAndLS();
      } else if (validColorModeKeys[currentSetting]) {
        // 相比 Array#indexOf，这种写法 Uglify 后字节数更少
        rootElement.setAttribute(
          rootElementDarkModeAttributeName,
          currentSetting
        );
      } else {
        // 首次访问或从未使用过开关、localStorage 中没有存储的值，currentSetting 是 null
        // 或者 localStorage 被篡改，currentSetting 不是合法值
        resetRootDarkModeAttributeAndLS();
      }
    };

    const invertDarkModeObj = {
      dark: "light",
      light: "dark",
    };

    const toggleCustomDarkMode = () => {
      let currentSetting = getLS(darkModeStorageKey);

      if (validColorModeKeys[currentSetting]) {
        // 从 localStorage 中读取模式，并取相反的模式
        currentSetting = invertDarkModeObj[currentSetting];
      } else if (currentSetting === null) {
        // localStorage 中没有相关值，或者 localStorage 抛了 Error
        // 从 CSS 中读取当前 prefers-color-scheme 并取相反的模式
        currentSetting = invertDarkModeObj[getModeFromCSSMediaQuery()];
      } else {
        // 不知道出了什么幺蛾子，比如 localStorage 被篡改成非法值
        return; // 直接 return;
      }
      // 将相反的模式写入 localStorage
      setLS(darkModeStorageKey, currentSetting);

      return currentSetting;
    };

    // 当页面加载时，将显示模式设置为 localStorage 中自定义的值（如果有的话）
    applyCustomDarkModeSettings();

    darkModeTogglebuttonElement.addEventListener("click", () => {
      // 当用户点击「开关」时，获得新的显示模式、写入 localStorage、并在页面上生效
      applyCustomDarkModeSettings(toggleCustomDarkMode());
    });
    // rootElement.style.colorScheme = "dark"
    // rootElement.style.colorScheme = "light"

    // dark svg button
  },
};
