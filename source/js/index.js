// 为代码块 添加复制按钮
const pre = document.querySelectorAll('figure td.code');

pre.forEach(function(item){
    // copy button dom
    span = document.createElement('span');
    span.className = 'code-span';
    spanImg = document.createElement('img');
    spanImg.setAttribute('src','https://z3.ax1x.com/2021/11/17/I4qDrd.png');
    spanImg.setAttribute('alt','copy');
    span.appendChild(spanImg);

    span.setAttribute('data-toggle','tooltip');
    span.setAttribute('data-placement','left');
    span.setAttribute('title','点击复制');

    // 复制功能
    // item.innerText可以直接获取pre内的文本！！！
    span.addEventListener('click',()=>{
        navigator.clipboard
            .writeText(item.innerText)
            .then(()=>{
                console.log('copy success!');
            })
    })

    item.appendChild(span);
})
$('.code-span').tooltip();
