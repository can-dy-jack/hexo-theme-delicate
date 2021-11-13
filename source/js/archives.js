const Archives = document.querySelectorAll('.post-archives');

function clearActive(d){
    d.forEach(function(i){
        if(i.classList.contains('active')){
           i.classList.remove('active'); 
        }
    });
}
Archives.forEach(function(i){
    i.addEventListener('click',()=>{
        clearActive(Archives);
        i.classList.add('active');
    });
})

