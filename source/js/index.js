let now = new Date();
// 计算网站运算时间的函数
function calculateTime(startTime) {
    now.setTime(now.getTime() + 1000);
    stime = new Date(startTime);
    interval = now.getTime() - stime.getTime();
    days = interval / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = interval / 1000 / 60 / 60 - 24 * dnum;
    hnum = Math.floor(hours);
    if (hnum.toString().length == 1) {
        hnum = '0' + hnum;
    }
    minutes = interval / 1000 / 60 - 24 * 60 * dnum - hnum * 60;
    mnum = Math.floor(minutes);
    if (mnum.toString().length == 1) {
        mnum = '0' + mnum;
    }
    document.getElementById("times").innerHTML = "本站已运行 " + dnum + " 天 " + hnum + " 小时 " + mnum + " 分，共" + Math.floor(interval / 1000 / 60 / 60) + "小时";
}

/** 
 * 打字机效果
 * 利用js的 split() 函数能更好的把不同文字按照各自语言的标准，将最小字符分开
 */
const indexTitleBox = document.getElementById("index-title-box");
if(indexTitleBox != null){
    const chars = indexTitleBox.textContent.split('');
    // 清空文字
    indexTitleBox.textContent = '';
    // 将分开后的字符外层加个span标签，再加进去
    for(let i = 0;i < chars.length;i++){
        setTimeout(()=>{
            const span = document.createElement('span');
            span.classList.add('transition');
            span.innerText = chars[i];
            indexTitleBox.appendChild(span);
        },200*i);
    }
}

// 滚动监听 + to_top返回顶端
// toc
const toc = document.querySelector(".post-toc .toc");
// h2 tags
const header2 = document.querySelectorAll('.post>h2');
// toc tags
const tocLinks = document.querySelectorAll('.toc>.toc-item>.toc-link');
// to_top
const to_top = document.getElementById('to_top');

function clearActive(nodes){
    nodes.forEach(item => {
        item.classList.remove("active");
    });
}
if(header2.length){
    // 获取h2分布范围
    const header2_ranges = new Array(header2.length).fill(0).map(()=>[]);
    for(let i = 0;i<header2.length-1;i++){
        header2_ranges[i].push(header2[i].offsetTop,header2[i+1].offsetTop)
    }
    header2_ranges[header2.length-1] = [header2[header2.length-1].offsetTop,Number.MAX_VALUE];
    // 跳转到h2后，toc样式对应变换
    function tocTransfrom(){
        // header2[i].offsetTop | document.documentElement.scrollTop
        for(let i = 0;i<header2.length;i++){
            if(document.documentElement.scrollTop > header2_ranges[i][0] && document.documentElement.scrollTop <= header2_ranges[i][1]){
                clearActive(tocLinks);
                tocLinks[i].classList.add("active");
                break;
            }
        }
        // to_top
        if(scrollY <= screen.availHeight){
            to_top.style.transform = 'translateY(70px)';
        }else{
            to_top.style.transform = 'translateY(0)';
        }
    }
} else {
    function tocTransfrom(){
        // to_top
        if(scrollY <= screen.availHeight){
            to_top.style.transform = 'translateY(70px)';
        }else{
            to_top.style.transform = 'translateY(0)';
        }
    }
}
to_top.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    window.onscroll = null;
    to_top.style.transform = 'translateY(70px)';
    setTimeout(()=>{
        window.onscroll = tocTransfrom;
        tocTransfrom();
    },1000);
});

// friends-more
const friends_more = document.getElementById("friends-more");
const phone_nav_link = document.getElementById("phone-nav-link");
let phone_nav_link_is_open = false;
friends_more.addEventListener('click',()=>{
    if(phone_nav_link_is_open) {
        phone_nav_link.style.transform = 'scaleX(0)';
    } else {
       phone_nav_link.style.transform = 'scaleX(1)'; 
    }
    phone_nav_link_is_open = !phone_nav_link_is_open;
})

// 移动端toc
const tocBox = document.getElementById("post-toc");
const tocBtn = document.getElementById("open-toc");
if(tocBox !== null && tocBtn !== null) {
    let toc_open = false;
    tocBtn.addEventListener('click',()=>{
        if(toc_open) {
            tocBox.style.transform = 'scaleY(0)';
        } else {
            tocBox.style.transform = 'scaleY(1)';
        }
        toc_open = !toc_open;
    })
    window.onresize = ()=> {
        if(window.innerWidth <= 800) { 
            toc_open = false;
            tocBox.style.transform = 'scaleY(0)';
        } else {
            toc_open = true;
            tocBox.style.transform = 'scaleY(1)';
            phone_nav_link.style.transform = 'scaleX(0)';
        }
    }
}

// 为代码块添加 代码信息
const code =document.querySelectorAll("figure.highlight table tr td.code");
const code_block =document.querySelectorAll("figure.highlight");

for(let i = 0;i<code_block.length;i++) {
    const code_info = document.createElement('div');
    code_info.classList.add('code-info');

    const text =document.createElement("span");
    text.textContent = code_block[i].classList[1];
    text.classList.add("code-type");

    const copy_btn =document.createElement("span");
    const copy_text =document.createElement("span");
    const copy_svg =document.createElement("span");
    copy_btn.classList.add("copy-btn");
    copy_text.innerText = "copy";
    copy_svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224zM224 352C188.7 352 160 323.3 160 288V64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224z"/></svg>';
    copy_btn.appendChild(copy_svg); 
    copy_btn.appendChild(copy_text); 

    copy_btn.onclick = function() {
        navigator.clipboard.writeText(code[i].innerText)
        .then(()=>{
            // console.log('copy success!');
            copy_text.textContent = 'copied!';
            setTimeout(()=>{
                copy_text.textContent = 'copy';
            },2000);
        }).catch((e)=>{
            console.log(e);
        })
    }

    code_info.appendChild(text);
    code_info.appendChild(copy_btn);

    code_block[i].appendChild(code_info);
}

// 初始化
window.onscroll = tocTransfrom;
tocTransfrom();

