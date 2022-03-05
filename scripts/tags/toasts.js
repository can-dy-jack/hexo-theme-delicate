const toasts = (args,content)=>{
    let info,cls = args[0]?args[0]:'note',icon;
    if(args[1]) info = args[1];
    else info = args[0];
    switch(cls){
        case "note": icon = "info" ;break;
        case "tip": icon = "tiptxt" ;break;
        case "danger": icon = "tip" ;break;
        case "warning": icon = "danger";break;
        default: icon = "info" ;break;
    }
    return '<div class=\"toasts toasts-'+ cls + '">' +
                '<div class="toasts-title">'+
                    '<svg class="icon" aria-hidden="true">'+
                        '<use xlink:href="#icon-'+ icon +'"></use>'+
                    '</svg>'+
                    info +
                '</div> '+
                '<div class="toasts-content">' + 
                    hexo.render.renderSync({text: content,engine: 'markdown'}).split('\n').join('') + 
                '</div>' + 
            '</div>';
}
hexo.extend.tag.register('toasts', toasts, {ends:true});
// toasts
