// Archives
const Archives = document.querySelectorAll('.post-archives');
function clearActive(d){
    d.forEach(function(i){
        if(i.classList.contains('active')){
           i.classList.remove('active'); 
        }
    });
}
Archives.forEach(function(i){
    i.addEventListener('click',()=>{
        clearActive(Archives);
        i.classList.add('active');
    });
})

/**
 * 为代码块复制按钮
 */
const pre = document.querySelectorAll('figure td.code');
pre.forEach(function (item) {
    span = document.createElement('span');
    span.className = 'code-span';
    spanImg = document.createElement('img');
    spanImg.setAttribute('src', 'https://z3.ax1x.com/2021/11/17/I4qDrd.png');
    spanImg.setAttribute('alt', 'copy');
    span.appendChild(spanImg);
    span.setAttribute('data-toggle', 'tooltip');
    span.setAttribute('data-placement', 'left');
    span.setAttribute('title', '点击复制');
    // 复制功能
    span.addEventListener('click', () => {
        navigator.clipboard.writeText(item.innerText)
    })
    item.appendChild(span);
})

/**
 *  tooltip
 * 提示框 - bootstrap + popper
 * */
$('#feedback').tooltip();
$('.code-span').tooltip();
// siderbar-icon
$('.icon-box').tooltip();
$('.origin').tooltip();

/**
 * 网站运行时间计算函数
 */
var now = new Date();
function calculateTime(startTime) {
    now.setTime(now.getTime() + 1000);
    stime = new Date(startTime);
    interval = now.getTime() - stime.getTime();
    days = interval/1000/60/60/24;
    dnum = Math.floor(days);
    hours = interval/1000/60/60 - 24*dnum;
    hnum = Math.floor(hours);
    if(hnum.toString().length == 1){
        hnum = '0' + hnum;
    }
    minutes = interval/1000/60 - 24*60*dnum - hnum*60;
    mnum = Math.floor(minutes);
    if(mnum.toString().length == 1){ mnum = '0' + mnum;}
    document.getElementById("times").innerHTML ="本站已运行 " + dnum + " 天 " + hnum + " 小时 " + mnum + " 分，共" + Math.floor(interval/1000/60/60)+ "小时";
}

// theme light-dark
const theme = document.getElementById('theme');
const themeToggle = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');
 // 使用sesseionStorage保存当前页面的主题
if(window.sessionStorage.theme === "dark"){
    theme.style.transform = 'rotate(180deg)';
    theme.style.fill = "#eee";
    themeLink.href = themeLink.href.replace('light','dark');
    window.sessionStorage.theme = "dark";
}
themeToggle.addEventListener('click',()=>{
    if(window.sessionStorage.theme === "light"){
        theme.style.transform = 'rotate(180deg)';
        theme.style.fill = "#eee";
        themeLink.href = themeLink.href.replace('light','dark');
        window.sessionStorage.theme = "dark";
    } else {
        theme.style.transform = 'rotate(0)';
        theme.style.fill = "#111";
        themeLink.href = themeLink.href.replace('dark','light');
        window.sessionStorage.theme = "light";
    }
})

