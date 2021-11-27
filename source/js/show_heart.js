/**
 * 鼠标点击 - 心形
 * 
 * ctrl + shift + C 在vscode中快速调用cmd。
 */
const body = document.getElementsByTagName('body')[0];
body.onclick = function(e){
    var xp = e.pageX,yp = e.pageY;
    var heart = document.createElement('span');
    heart.className = 'heart';
    heart.style.zIndex = '50';
    heart.style.top = (yp-26) + 'px';
    heart.style.left = xp + 'px';
    heart.style.backgroundColor = Color();

    body.appendChild(heart);
    setTimeout('clearHeart()',1000);
}
function clearHeart(){
    var allSpan = document.querySelectorAll('.heart');
    allSpan[0].remove();
}

// 随机颜色
function Color(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
