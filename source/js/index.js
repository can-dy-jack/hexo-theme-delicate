/**
 * 为代码块 添加复制按钮
 */
const pre = document.querySelectorAll('figure td.code');

pre.forEach(function (item) {
    // copy button dom
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
    // item.innerText可以直接获取pre内的文本！！！
    span.addEventListener('click', () => {
        navigator.clipboard
            .writeText(item.innerText)
            .then(() => {
                console.log('copy success!');
            })
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


/**
 * 网站运行时间计算 - 函数
 *
 * getTime()返回从'1970-1-1 00:00:00 UTC'到该日期对象（该日期对象的UTC时间）的毫秒数
 * 
 * 1s = 1000ms
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
    if(mnum.toString().length == 1){
        mnum = '0' + mnum;
    }
    document.getElementById("times").innerHTML =
        "本站已运行 " + dnum + " 天 " + hnum + " 小时 " + mnum + " 分，共" + Math.floor(interval/1000/60/60)+ "小时";
}
