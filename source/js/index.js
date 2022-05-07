let now = new Date();
// 计算网站运算时间的函数
function calculateTime(startTime) {
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
}

/** 
 * 打字机效果
 * 利用js的 split() 函数能更好的把不同文字按照各自语言的标准，将最小字符分开
 */
const indexTitleBox = document.getElementById("index-title-box");
if(indexTitleBox != null){
    const chars = indexTitleBox.textContent.split('');
    // 清空文字
    indexTitleBox.textContent = '';
    // 将分开后的字符外层加个span标签，再加进去
    for(let i = 0;i < chars.length;i++){
        setTimeout(()=>{
            const span = document.createElement('span');
            span.classList.add('transition');
            span.innerText = chars[i];
            indexTitleBox.appendChild(span);
        },200*i);
    }
}

// 滚动监听 + to_top返回顶端
// toc
const toc = document.querySelector(".post-toc .toc");
// h2 tags
const header2 = document.querySelectorAll('.post>h2');
// toc tags
const tocLinks = document.querySelectorAll('.toc>.toc-item>.toc-link');
// to_top
const to_top = document.getElementById('to_top');

function clearActive(nodes){
    nodes.forEach(item => {
        item.classList.remove("active");
    });
}
if(header2.length){
    // 获取h2分布范围
    const header2_ranges = new Array(header2.length).fill(0).map(()=>[]);
    for(let i = 0;i<header2.length-1;i++){
        header2_ranges[i].push(header2[i].offsetTop,header2[i+1].offsetTop)
    }
    header2_ranges[header2.length-1] = [header2[header2.length-1].offsetTop,Number.MAX_VALUE];
    // 跳转到h2后，toc样式对应变换
    function tocTransfrom(){
        // header2[i].offsetTop | document.documentElement.scrollTop
        for(let i = 0;i<header2.length;i++){
            if(document.documentElement.scrollTop > header2_ranges[i][0] && document.documentElement.scrollTop <= header2_ranges[i][1]){
                clearActive(tocLinks);
                tocLinks[i].classList.add("active");
                break;
            }
        }
        // to_top
        if(scrollY <= screen.availHeight){
            to_top.style.transform = 'translateY(70px)';
        }else{
            to_top.style.transform = 'translateY(0)';
        }
    }
} else {
    function tocTransfrom(){
        // to_top
        if(scrollY <= screen.availHeight){
            to_top.style.transform = 'translateY(70px)';
        }else{
            to_top.style.transform = 'translateY(0)';
        }
    }
}
to_top.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    window.onscroll = null;
    to_top.style.transform = 'translateY(70px)';
    setTimeout(()=>{
        window.onscroll = tocTransfrom;
        tocTransfrom();
    },1000);
});

// friends-more
const friends_more = document.getElementById("friends-more");
const phone_nav_link = document.getElementById("phone-nav-link");
let phone_nav_link_is_open = false;
friends_more.addEventListener('click',()=>{
    if(phone_nav_link_is_open) {
        phone_nav_link.style.transform = 'scaleX(0)';
    } else {
       phone_nav_link.style.transform = 'scaleX(1)'; 
    }
    phone_nav_link_is_open = !phone_nav_link_is_open;
})

// 移动端toc
const tocBox = document.getElementById("post-toc");
const tocBtn = document.getElementById("open-toc");
if(tocBox !== null && tocBtn !== null) {
    let toc_open = false;
    tocBtn.addEventListener('click',()=>{
        if(toc_open) {
            tocBox.style.transform = 'scaleY(0)';
        } else {
            tocBox.style.transform = 'scaleY(1)';
        }
        toc_open = !toc_open;
    })
    window.onresize = ()=> {
        if(window.innerWidth <= 800) {
            toc_open = false;
            tocBox.style.transform = 'scaleY(0)';
        } else {
            toc_open = true;
            tocBox.style.transform = 'scaleY(1)';
            phone_nav_link.style.transform = 'scaleX(0)';
        }
    }
}



// 初始化
window.onscroll = tocTransfrom;
tocTransfrom();


