// 返回顶端
const to_top = document.getElementById('to_top');
const s_to_top = document.getElementById('sidebar-to-top');

// 点击事件
to_top.addEventListener('click',()=>{
    s_to_top.style.animation = 'toTopMove 0.3s ease-out';
    // 动画
    setTimeout('s_to_top.style.animation = "none"',350); 
})

function toTopControll(){
    if(scrollY <= screen.availHeight){
        // 当滚动很小的距离时，设置为不可见
        s_to_top.style.opacity = '0';
        // 当不可见的时候，移除点击效果
        to_top.setAttribute('href','#bug');
    }else{
        s_to_top.style.opacity = '1'
        to_top.setAttribute('href','#');
    }
}

toTopControll() // 初始-判断可不可见
window.onscroll = toTopControll // 监控滚动
