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

/**
 *  tooltip
 * */
$('.code-span').tooltip();
// siderbar-icon
$('.icon-box').tooltip();

/**
 * 鼠标点击文字效果
 */
var txt_idx = 0;
jQuery(document).ready(function($){
    $('body').click(function(e) {
        var txt = new Array("HTML","css","JavaScript","Hexo","Bootsrtap");
        var $span = $("<span/>").text(txt[txt_idx]);
        txt_idx = (txt_idx + 1) % txt.length;
        var xp = e.pageX,yp = e.pageY;
        $span.css({
            "z-index": 5,
            "top": yp-20,
            "left": xp,
            "transform": 'translateX(-50%)',
            "position": "absolute",
            "font-weight": "bold",
            "color": "#008080"
        });
        $('body').append($span);
        $span.animate({
            "top": yp - 180,
            "opacity": 0
        },3000,
        function(){
            $span.remove();
        });
    });
})


