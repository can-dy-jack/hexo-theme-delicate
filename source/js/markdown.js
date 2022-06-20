delicate.markdown = {
    collapse: function collapse() {
        const collapses = $(".collapse"),
            collapseBtns = $(".collapse-btn"),
            collapseSvgs = $(".collapse-btn svg"),
            collapseTexts = $(".collapse-text"),
            n = collapses.length;
        let isOpen = new Array(n).fill(false);
        let heights = new Array(n).fill(0);
        for(let i = 0;i < n;i++) {
            heights[i] = collapseTexts[i].clientHeight;
            collapseTexts[i].style.height = "0";
            collapseTexts[i].style.padding = "0";
            collapseBtns[i].onclick = () => {
                if(isOpen[i]) {
                    collapseTexts[i].style.height = "0";
                    collapseTexts[i].style.padding = "0";
                    collapseSvgs[i].style.transform = "rotate(0)";
                    isOpen[i] = false;
                } else {
                    collapseTexts[i].style.height = heights[i] + "px";
                    collapseTexts[i].style.padding = "5px 15px";
                    collapseSvgs[i].style.transform = "rotate(90deg)";
                    isOpen[i] = true;
                }
            }
        }
    },

    init_codeCopy: function init_codeCopy() {
        // 为代码块添加 代码信息
        const code = $("figure.highlight table tr td.code");
        const code_block = $("figure.highlight");

        for (let i = 0; i < code_block.length; i++) {
            const code_info = document.createElement('div');
            code_info.classList.add('code-info');

            const text = document.createElement("span");
            text.textContent = code_block[i].classList[1];
            text.classList.add("code-type");

            const copy_btn = document.createElement("span");
            const copy_text = document.createElement("span");
            const copy_svg = document.createElement("span");
            copy_btn.classList.add("copy-btn");
            copy_text.innerText = "copy";
            copy_svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224zM224 352C188.7 352 160 323.3 160 288V64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224z"/></svg>';
            copy_btn.appendChild(copy_svg);
            copy_btn.appendChild(copy_text);

            copy_btn.onclick = function () {
                navigator.clipboard.writeText(code[i].innerText)
                    .then(() => {
                        // console.log('copy success!');
                        copy_text.textContent = 'copied!';
                        setTimeout(() => {
                            copy_text.textContent = 'copy';
                        }, 2000);
                    }).catch((e) => {
                        console.log(e);
                    })
            }

            code_info.appendChild(text);
            code_info.appendChild(copy_btn);

            code_block[i].appendChild(code_info);
        }
    },

    initPullquoteStyle: function() {
        const pullquote = $(".pullquote");
        for(let j = 0;j<pullquote.length;j++) {
            const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28"><path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"/></svg>'
            const span = document.createElement("span");
            span.classList.add("pullquote-icon");
            span.innerHTML = svg;
            pullquote[j].appendChild(span);
        }
    }
}