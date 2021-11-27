/**
 * 鼠标点击文字效果
 */
const showText = document.getElementById('showText');
var txt = showText.getAttribute('text').split(',');
var color = showText.getAttribute('color');

var txt_idx = 0;
jQuery(document).ready(function ($) {
    $('body').click(function (e) {
        var $span = $("<span/>").text(txt[txt_idx]);
        txt_idx = (txt_idx + 1) % txt.length;
        var xp = e.pageX,
            yp = e.pageY;
        $span.css({
            "z-index": 50,
            "top": yp - 26,
            "left": xp,
            "transform": 'translateX(-50%)',
            "position": "absolute",
            "font-weight": "bold",
            "color": color
        });
        $('body').append($span);
        $span.animate({
            "top": yp - 180,
            "opacity": 0
        }, 3000,
        function () {
            $span.remove();
        });
    });
})