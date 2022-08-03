// toc
const toc = document.querySelector(".post-toc .toc");
// h2 tags
const header2 = $('.post>h2');
// toc tags
const tocLinks = $('.toc>.toc-item>.toc-link');
// to_top
const to_top = document.getElementById('to_top');
// nav_box
const nav_box = document.getElementById("nav-box");

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

// search code
var searchFunc = function(path) {
    const nav_search_icon = document.getElementById("nav-search-icon");
    const delicate_search_bg = document.getElementById("delicate-search-bg");
    const delicate_search_wrap = document.getElementById("delicate-search-wrap");

    nav_search_icon.onclick = (e) => {
        delicate_search_bg.style.display = "block";
        delicate_search_wrap.style.display = "block";
    }
    delicate_search_bg.onclick = (e) => {
        delicate_search_bg.style.display = "none";
        delicate_search_wrap.style.display = "none";
    }

    fetch(path)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(xml => {
        const entry = xml.getElementsByTagName("entry");
        let datas = new Array(entry.length).fill({})
        // xml data to json data
        for(let i = 0;i<entry.length;i++) { 
            datas[i] = {
                title: xml.getElementsByTagName("title")[i].textContent,
                content: xml.getElementsByTagName("content")[i].textContent,
                url: xml.getElementsByTagName("url")[i].textContent
            }
        }

        var $input = document.getElementById("local-search");
        var $resultContent = document.getElementById("local-search-result");
        if (!$input || !$resultContent) return;

        $input.addEventListener("input",()=>{
            let str = '<article class=\"search-result-list\">';
            let keywords = $input.value.trim().toLowerCase().split(/[\s\-\+]+/); // 以 空格、-、+ 分割关键词
            $resultContent.innerHTML = ""; // 清除上一次搜素的结果
            if($input.value.trim().length <= 0) { // 全是空格就不需要搜索
                return;
            }

            // 执行本地搜索
            datas.forEach((data) => {
                let isMatch = true, content_index = []; // ??--
                if (!data.title || data.title.trim() === '') {
                    data.title = "Untitled";
                }
                let data_title = data.title.trim().toLowerCase(),
                    data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase(), // 将<xxx>去掉
                    data_url = data.url,
                    index_title = -1,
                    index_content = -1
                    var first_occur = -1;
                if(data_content == ''){
                    isMatch = false;
                } else {
                    // 仅匹配内容不为空的内容
                    keywords.forEach((keyword, i) => {
                        index_title = data_title.indexOf(keyword);
                        index_content = data_content.indexOf(keyword);
                        if (index_title < 0 && index_content < 0) {
                            isMatch = false;
                        } else {
                            if (index_content < 0) {
                                index_content = 0;
                            }
                            if (i == 0) {
                                first_occur = index_content;
                            }
                            // content_index.push({index_content:index_content, keyword_len:keyword_len});
                        }        
                    })
                }
                // show search results
                if(isMatch) {
                    str += "<section class='search-result-item'><a href='" + data_url + "' class='search-result-title'>" + data_title + "</a>";
                    let content = data.content.trim().replace(/<[^>]+>/g, "");
                    if(first_occur >= 0) {
                        // cut out 100 characters
                        let start = first_occur - 20,
                            end = first_occur + 80;
                        if (start < 0) {
                            start = 0;
                        }
                        if (start == 0) {
                            end = 100;
                        }
                        if (end > content.length) {
                            end = content.length;
                        }
                        var match_content = content.substring(start, end);
                        keywords.forEach(function (keyword) {
                            var regS = new RegExp(keyword, "gi");
                            match_content = match_content.replace(regS, "<mark class=\"search-keyword\">" + keyword + "</mark>");
                        });
                        str += "<div class=\"search-result-text\">" + match_content + "...</div>";
                    }
                    str += "</section>";
                }
            })
            str += "</article>";
            $resultContent.innerHTML = str;
        })
    })
}
