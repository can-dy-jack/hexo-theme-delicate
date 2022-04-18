/**
 * copy button
 */
const codeSpans = document.querySelectorAll('figure');
codeSpans.forEach(function(code){
    // 代码块提示信息div
    const codeInfo = document.createElement('div');
    codeInfo.classList.add("code-info");
    // 代码类型
    const codeName = code.classList[1];
    const codeNameSpan = document.createElement("span");
    codeNameSpan.style.color = "#007bff";
    codeNameSpan.textContent = codeName;
    codeInfo.appendChild(codeNameSpan);
    // 复制按钮
    const codeButton = document.createElement("span");

    codeButton.innerHTML = '<svg t="1650248777361" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2582" width="15" height="15"><path d="M853.333333 981.333333h-384c-72.533333 0-128-55.466667-128-128v-384c0-72.533333 55.466667-128 128-128h384c72.533333 0 128 55.466667 128 128v384c0 72.533333-55.466667 128-128 128z m-384-554.666666c-25.6 0-42.666667 17.066667-42.666666 42.666666v384c0 25.6 17.066667 42.666667 42.666666 42.666667h384c25.6 0 42.666667-17.066667 42.666667-42.666667v-384c0-25.6-17.066667-42.666667-42.666667-42.666666h-384z" p-id="2583"></path><path d="M213.333333 682.666667H170.666667c-72.533333 0-128-55.466667-128-128V170.666667c0-72.533333 55.466667-128 128-128h384c72.533333 0 128 55.466667 128 128v42.666666c0 25.6-17.066667 42.666667-42.666667 42.666667s-42.666667-17.066667-42.666667-42.666667V170.666667c0-25.6-17.066667-42.666667-42.666666-42.666667H170.666667c-25.6 0-42.666667 17.066667-42.666667 42.666667v384c0 25.6 17.066667 42.666667 42.666667 42.666666h42.666666c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667z" p-id="2584"></path></svg>';
    codeButton.className = "btn-copy";
    codeButton.setAttribute('data-container', 'body');
    codeButton.setAttribute('data-toggle', 'popover');
    codeButton.setAttribute('data-placement', 'top');
    codeButton.setAttribute('data-content', '复制成功');
    codeInfo.appendChild(codeButton);2
    
    code.appendChild(codeInfo);

    codeButton.addEventListener('click',()=>{
        navigator.clipboard.writeText(code.children[0].children[0].children[0].children[1].innerText)
        setTimeout(()=>{
            $('.btn-copy').popover('hide');
        },2000);
    });
})

/**
 *  tooltip
 * 提示框 - bootstrap + popper
 * */
$('#feedback').tooltip();
$('.btn-copy').popover();
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