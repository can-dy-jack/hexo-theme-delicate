delicate.markdown = {
  collapse: function collapse() {
    const collapses = $(".collapse"),
      collapseBtns = $(".collapse-btn"),
      collapseSvgs = $(".collapse-btn svg"),
      collapseTexts = $(".collapse-text"),
      n = collapses.length;
    let isOpen = new Array(n).fill(false);
    let heights = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      heights[i] = collapseTexts[i].clientHeight;
      let childs = collapseTexts[i].childNodes.length;
      collapseTexts[i].style.height = "0";
      collapseTexts[i].style.padding = "0";
      collapseBtns[i].onclick = () => {
        if (isOpen[i]) {
          collapseTexts[i].style.height = "0";
          collapseTexts[i].style.padding = "0";
          collapseSvgs[i].style.transform = "rotate(0)";
          isOpen[i] = false;
        } else {
          collapseTexts[i].style.height = heights[i] + (childs-1)*10 + "px";
          collapseTexts[i].style.padding = "5px 15px";
          collapseSvgs[i].style.transform = "rotate(90deg)";
          isOpen[i] = true;
        }
      };
    }
  },

  init_codeCopy: function init_codeCopy() {
    // 为代码块添加 代码信息
    const code = $("figure.highlight table tr td.code");
    const code_block = $("figure.highlight");

    for (let i = 0; i < code_block.length; i++) {
      const code_info = document.createElement("div");
      code_info.classList.add("code-info");

      // left
      const left = document.createElement("div"),
        text = document.createElement("span"),
        mac_circle1 = document.createElement("span"),
        mac_circle2 = document.createElement("span"),
        mac_circle3 = document.createElement("span");
      text.textContent = code_block[i].classList[1];
      text.classList.add("code-type");
      mac_circle1.classList.add("mac-circle1");
      mac_circle2.classList.add("mac-circle2");
      mac_circle3.classList.add("mac-circle3");
      left.appendChild(mac_circle1);
      left.appendChild(mac_circle2);
      left.appendChild(mac_circle3);
      left.appendChild(text);
      left.className = "left";

      // right
      const copy_btn = document.createElement("div");
      const copy_text = document.createElement("span");
      const copy_svg = document.createElement("span");
      copy_btn.classList.add("copy-btn");
      copy_text.innerText = "copy";
      copy_svg.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16"><path d="M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224zM224 352C188.7 352 160 323.3 160 288V64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224z"/></svg>';
      copy_btn.appendChild(copy_svg);
      copy_btn.appendChild(copy_text);

      copy_btn.onclick = function () {
        navigator.clipboard
          .writeText(code[i].innerText)
          .then(() => {
            // console.log('copy success!');
            copy_text.textContent = "copied!";
            setTimeout(() => {
              copy_text.textContent = "copy";
            }, 2000);
          })
          .catch((e) => {
            console.log(e);
          });
      };

      code_info.appendChild(left);
      code_info.appendChild(copy_btn);

      code_block[i].insertBefore(code_info, code_block[i].childNodes[0]);
    }
  },

  initPullquoteStyle: function initPullquoteStyle() {
    const pullquote = $(".pullquote");
    for (let j = 0; j < pullquote.length; j++) {
      const svg =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="28" height="28"><path d="M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"/></svg>';
      const span = document.createElement("span");
      span.classList.add("pullquote-icon");
      span.innerHTML = svg;
      pullquote[j].appendChild(span);
    }
  },

  initPostTextIndex: function initTextIndex() {
    const pNodes = document.querySelectorAll(".post>p");
    for(const p of pNodes) {
      if(p.classList.length === 0 && (p.children.item(0) == null || p.getElementsByTagName("img").length === 0)) {
        p.style.textIndent = "2em";
      }
      if(p.getElementsByTagName("img").length > 0) {
        p.style.textAlign = "center";
      }
    }
  },

  initZoomImages: function initZoomImages() {
    const imgs = document.querySelectorAll("p img");
    const imgContainers = document.createElement("section");

    for(let img of imgs) {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("img-container");

      const imgBg = document.createElement("div");
      imgBg.classList.add("img-bg");
      const imgInnerBox = document.createElement("div");
      imgInnerBox.classList.add("img-inner-box");
      const imgInner = document.createElement("img");
      imgInner.classList.add("img-inner");
      imgInner.src = img.src;
      imgInner.alt = img.alt;
      imgInnerBox.appendChild(imgInner);

      imgContainer.append(imgBg);
      imgContainer.append(imgInnerBox);
      imgContainers.append(imgContainer);

      imgBg.onclick = () => {
        imgInner.style.transform = "scale(0)";
        setTimeout(()=>{
          imgContainer.style.display = "none";
        },500);
      }
      img.onclick = () => {
        imgContainer.style.display = "block";
        setTimeout(()=>{
          imgInner.style.transform = "scale(1)";
        },10);
      }
      document.body.append(imgContainers);
    }
  }
};
