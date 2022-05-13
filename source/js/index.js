const delicate = {}


// toc
const toc = document.querySelector(".post-toc .toc");
// h2 tags
const header2 = document.querySelectorAll('.post>h2');
// toc tags
const tocLinks = document.querySelectorAll('.toc>.toc-item>.toc-link');
// to_top
const to_top = document.getElementById('to_top');

function clearActive(nodes) {
    nodes.forEach(item => {
        item.classList.remove("active");
    });
}
if (header2.length) {
    // 获取h2分布范围
    const header2_ranges = new Array(header2.length).fill(0).map(() => []);
    for (let i = 0; i < header2.length - 1; i++) {
        header2_ranges[i].push(header2[i].offsetTop, header2[i + 1].offsetTop)
    }
    header2_ranges[header2.length - 1] = [header2[header2.length - 1].offsetTop, Number.MAX_VALUE];
    // 跳转到h2后，toc样式对应变换
    function tocTransfrom() {
        for (let i = 0; i < header2.length; i++) {
            if (document.documentElement.scrollTop > header2_ranges[i][0] && document.documentElement.scrollTop <= header2_ranges[i][1]) {
                clearActive(tocLinks);
                tocLinks[i].classList.add("active");
                break;
            }
        }
        // to_top
        if (scrollY <= screen.availHeight) {
            to_top.style.transform = 'translateY(70px)';
        } else {
            to_top.style.transform = 'translateY(0)';
        }
    }
} else {
    function tocTransfrom() {
        // to_top
        if (scrollY <= screen.availHeight) {
            to_top.style.transform = 'translateY(70px)';
        } else {
            to_top.style.transform = 'translateY(0)';
        }
    }
}
to_top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    window.onscroll = null;
    to_top.style.transform = 'translateY(70px)';
    setTimeout(() => {
        window.onscroll = tocTransfrom;
        tocTransfrom();
    }, 1000);
});