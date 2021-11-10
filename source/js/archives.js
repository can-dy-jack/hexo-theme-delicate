const Archives = document.querySelectorAll('.post-archives');

function clearActive(){
    Archives.forEach(function(i){
        if(i.classList.contains('active')){
           i.classList.remove('active'); 
        }
    });
}
Archives.forEach(function(i){
    i.addEventListener('click',()=>{
        clearActive();
        i.classList.add('active');
    });
})
