// 为代码块 添加复制按钮
const pre = document.querySelectorAll('figure td.code');

pre.forEach(function(item){
    span = document.createElement('span');
    span.className = 'code-span';
    spanImg = document.createElement('img');
    spanImg.setAttribute('src','https://z3.ax1x.com/2021/11/17/I4qDrd.png');
    spanImg.setAttribute('alt','copy');

    span.appendChild(spanImg);
    item.appendChild(span);
})

// 复制功能

