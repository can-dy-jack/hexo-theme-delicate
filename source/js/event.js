const tocBox = document.getElementById("post-toc");
const tocBtn = document.getElementById("open-toc");
const friends_more = document.getElementById("friends-more");
const phone_nav_link = document.getElementById("phone-nav-link");

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
            hnum = '0' + hnum;
        }
        minutes = interval / 1000 / 60 - 24 * 60 * dnum - hnum * 60;
        mnum = Math.floor(minutes);
        if (mnum.toString().length == 1) {
            mnum = '0' + mnum;
        }
        document.getElementById("times").innerHTML = "本站已运行 " + dnum + " 天 " + hnum + " 小时 " + mnum + " 分，共" + Math.floor(interval / 1000 / 60 / 60) + "小时";
    },

    registerType: function registerType() {
        /** 
         * 打字机效果
         * 利用js的 split() 函数能更好的把不同文字按照各自语言的标准，将最小字符分开
         */
        const indexTitleBox = document.getElementById("index-title-box");
        if (indexTitleBox != null) {
            const chars = indexTitleBox.textContent.split('');
            // 清空文字
            indexTitleBox.textContent = '';
            // 将分开后的字符外层加个span标签，再加进去
            for (let i = 0; i < chars.length; i++) {
                setTimeout(() => {
                    const span = document.createElement('span');
                    span.classList.add('transition');
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
            tocBtn.addEventListener('click', () => {
                if (toc_open) {
                    tocBox.style.transform = 'scaleY(0)';
                } else {
                    tocBox.style.transform = 'scaleY(1)';
                }
                toc_open = !toc_open;
            })
            window.onresize = () => {
                if (window.innerWidth <= 800) {
                    toc_open = false;
                    tocBox.style.transform = 'scaleY(0)';
                } else {
                    toc_open = true;
                    tocBox.style.transform = 'scaleY(1)';
                    phone_nav_link.style.transform = 'scaleX(0)';
                }
            }
        }
    },

    registerFriendsMore: function registerFriendsMore() {
        // nav  friends-more
        let phone_nav_link_is_open = false;
        friends_more.addEventListener('click', () => {
            if (phone_nav_link_is_open) {
                phone_nav_link.style.transform = 'scaleX(0)';
            } else {
                phone_nav_link.style.transform = 'scaleX(1)';
            }
            phone_nav_link_is_open = !phone_nav_link_is_open;
        })
    },

    
}