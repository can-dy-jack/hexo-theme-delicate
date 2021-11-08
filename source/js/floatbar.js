const floatReward = document.querySelector('.float-reward');
const floatMark = document.querySelector('.float-mark');

floatReward.addEventListener('click',()=>{
    floatMark.style.display = "block";
    setTimeout('floatMark.style.display = "none"',2500);
})

// 提示框 - bootstrap + popper
$('.float-reward').tooltip();
$('.float-feedback').tooltip();
$('.float-github').tooltip();
