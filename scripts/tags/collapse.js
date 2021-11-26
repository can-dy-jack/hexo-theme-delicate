// bootstrap collapse
const collapse = (args,text)=>{

    return `<div>
            <button class="btn btn-${args[0]}" type="button" data-toggle="collapse" data-target="#${args[2]}" aria-expanded="false" aria-controls="${args[2]}">
                ${args[1]}
            </button>
            </div>
            <div class="collapse" id="${args[2]}">
                <div class="card card-body">
                ${text}
                </div>
            </div>`;
}
hexo.extend.tag.register('collapse', collapse, {ends:true});
