// 返回顶端
const to_top = document.getElementById('to_top');
const s_to_top = document.getElementById('sidebar-to-top');

function toTopControll(){
    if(scrollY <= screen.availHeight){
        s_to_top.style.transform = 'translateY(70px)';
    }else{
        s_to_top.style.transform = 'translateY(0)';
    }
}
toTopControll();
window.onscroll = toTopControll; // 监控滚动

to_top.addEventListener('click',()=>{
    window.onscroll = null;
    s_to_top.style.transform = 'translateY(70px)';
    setTimeout("window.onscroll = toTopControll",800);
});
