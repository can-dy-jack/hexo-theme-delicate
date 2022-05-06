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
/* 
 * 主页轮播图 
 * bug - 文章数小于等于3的情况
 */
const articles = document.querySelectorAll("main .article-container article");
const artLeft = document.getElementById("article-left");
const artRight = document.getElementById("article-right");
// 初始为第一篇文章
var now_article = 0;

// 控制轮播图的位置
function showArticles(i){
    // 防止其他页面报错
    if(!articles.length || articles.length === 1) return;
    if(i === 0){
        articles[i].classList.add('now');
        articles[articles.length-1].classList.add('left');
        articles[1].classList.add('right');
    } else if(i === articles.length-1){ 
        articles[i].classList.add('now');
        articles[i-1].classList.add('left');
        articles[0].classList.add('right');
    } else {
        articles[i].classList.add('now');
        articles[i-1].classList.add('left');
        articles[i+1].classList.add('right');
    }
}
// 调用函数进行初始化
showArticles(now_article);
// 按钮变换文章
function changeArcticle(direct){
    if(articles.length <= 3) return;
    if(direct === 'left'){
        if(now_article === 0) {
            // 清除负影响
            articles[now_article].classList.remove('now');
            articles[articles.length-1].classList.remove('left');
            articles[1].classList.remove('right');
            // 转换
            now_article = articles.length-1;
        } else if(now_article === articles.length-1) {
            // 清除负影响
            articles[now_article].classList.remove('now');
            articles[now_article-1].classList.remove('left');
            articles[0].classList.remove('right');
            // 转换
            now_article--;
        } else {
            // 清除负影响
            articles[now_article].classList.remove('now');
            articles[now_article-1].classList.remove('left');
            articles[now_article+1].classList.remove('right');
            now_article--;
        }
    } else if(direct === 'right'){
        if(now_article === 0) {
            // 清除负影响
            articles[now_article].classList.remove('now');
            articles[articles.length-1].classList.remove('left');
            articles[1].classList.remove('right');
            // 转换
            now_article++;
        } else if(now_article === articles.length-1) {
            // 清除负影响
            articles[now_article].classList.remove('now');
            articles[now_article-1].classList.remove('left');
            articles[0].classList.remove('right');
            // 转换
            now_article = 0;
        } else {
            // 清除负影响
            articles[now_article].classList.remove('now');
            articles[now_article-1].classList.remove('left');
            articles[now_article+1].classList.remove('right');
            now_article++;
        }
    } else {
        return;
    }
    showArticles(now_article);
}

// 按钮行为
if(artLeft !== null){
    artLeft.addEventListener('click',()=>{
        changeArcticle('left');
    });
}
if(artRight !== null){
    artRight.addEventListener('click',()=>{
        changeArcticle('right');
    });
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


// 初始化
window.onscroll = tocTransfrom;
tocTransfrom();


