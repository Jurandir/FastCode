"use strict";

let clickShowTela

((win,doc)=>{
    let title_tela        = doc.getElementById("title_tela")
    let title_pesquisa    = doc.getElementById("title_pesquisa")
    let mySidenav         = doc.getElementById("mySidenav")
    let div_master        = doc.getElementById("div_master")
    let div_tabela        = doc.getElementById("div_tabela") 
    let div_tela          = doc.getElementById("div_tela") 
    let div_tela_campos   = doc.getElementById("div_tela_campos")
    let btn_novo          = doc.getElementById("btn_novo")
    let btn_seek          = doc.getElementById("btn_seek")
    let btn_sair          = doc.getElementById("btn_sair")
    let head_table        = doc.getElementById("head_table")
    let lines_table       = doc.getElementById("lines_table")
    let body_table        = doc.getElementById("body_table")
    let btn_tela_cancel   = doc.getElementById("btn_tela_cancel")
    let btn_save          = doc.getElementById("btn_save")
    let paginate_Regs     = doc.getElementById("paginate_Regs")
    let paginate_Pags     = doc.getElementById("paginate_Pags")
    let paginate_Page     = doc.getElementById("paginate_Page")
    let paginate_Inicio   = doc.getElementById("paginate_Inicio")
    let paginate_Anterior = doc.getElementById("paginate_Anterior")
    let paginate_Proximo  = doc.getElementById("paginate_Proximo")
    let paginate_Ultimo   = doc.getElementById("paginate_Ultimo")
    let entidades        = []
    let fields           = []
    let fieldFocus       = ''
    let fieldsTypes      = []
    let fieldsReadOnly   = []
    let data_api         = []
    let field_ID         = 'id'
    let url_types        = ''
    let url_dados        = ''
    let url_list         = '/api/list'
    let flag_debug       = false
    let id_tela          = -1
    let pag_rows         = 0
    let pag_pages        = 0
    let pag_page         = 1
    let pag_size         = 12


    head_table.innerHTML  = ''
    body_table.innerHTML  = ''

    let dados      = {}

    btn_novo.addEventListener("click", btn_novo_exec )
    btn_seek.addEventListener("click", btn_seek_exec )
    btn_sair.addEventListener("click", btn_sair_exec )
    btn_save.addEventListener("click", btn_save_exec )

    btn_tela_cancel.addEventListener("click"  , btn_cancel_exec )
    paginate_Inicio.addEventListener("click"  , pag_Inicio_click )
    paginate_Anterior.addEventListener("click", pag_Anterior_click )
    paginate_Proximo.addEventListener("click" , pag_Proximo_click )
    paginate_Ultimo.addEventListener("click"  , pag_Ultimo_click )


    function pag_Inicio_click() {
        console.log('Pg. Inicio')
        pag_page=1
        getDadosEntidades()
    }
    function pag_Anterior_click() {
        console.log('Pg. Anterior')
        pag_page--
        if(pag_page===0) { pag_page = 1 }
        getDadosEntidades()
    }
    function pag_Proximo_click() {
        console.log('Pg. Proxima')
        pag_page++
        if(pag_page>pag_pages) { pag_page = pag_pages }
        getDadosEntidades()
    }
    function pag_Ultimo_click() {
        console.log('Pg. Final')
        pag_page=pag_pages
        getDadosEntidades()
    }

    function show_paginate() {
        paginate_Regs.innerHTML = 'Regs: '+pag_rows
        paginate_Pags.innerHTML = 'Pags: '+pag_pages
        paginate_Page.innerHTML = pag_page
    }

    async function loadEntidades() {
        await fetch(url_list, { method: 'GET' })
        .then(response => response.json())
        .then(ret => {
            if(flag_debug) { console.log('loadEntidades:',ret) }
            entidades = ret.data
         })
        .catch(err => console.log('(loadEntidades) Err:',err.message))
        return entidades  
    }

    function showScreen(tela_id){
        btn_sair_exec()
        pag_size      = entidades[tela_id].paginate
        fieldFocus    = entidades[tela_id].fieldFocus || ''

        if(id_tela == tela_id) {
            return 0
        } else {
            url_types       = entidades[tela_id].apiTypes
            url_dados       = entidades[tela_id].apiDados    
            console.log('Show tela :',id_tela,'=>',tela_id,' *  Dados: ',url_dados)
            id_tela = tela_id
            fields  = []
            if(flag_debug) { console.log('sequencia 1 - ShowScreen - Limpa DIVs') }
            limpaElementosDIV()        
            if(flag_debug) { console.log('sequencia 2 - ShowScreen - Load Defs Entidades') }
            getDefsEntidades()
            if(flag_debug) { console.log('sequencia 3 - ShowScreen - Load Dados Iniciais') }
            getDadosEntidades()    
            if(flag_debug) { console.log('sequencia 4 - ShowScreen - Show Master DIV') }
            div_master.style.display   = "block"
        }
    }

    function getDadosMasters() {
        clickShowTela   = showScreen
    }

    function limpaElementosDIV() {
        removeAllchildren( div_tela_campos,'div_tela_campos' )
        removeAllchildren( body_table,'body_table' )
        removeAllchildren( head_table,'head_table' ) 
    }

    function removeAllchildren(div,obs){ 
        for (let child of div.children){
            if(flag_debug) { console.log(`Remove: (${obs})`,child) }
            child.remove()
        }
        div.innerHTML=''
    }

    function criaElementosMenu(itens){
        let exit_menu = doc.createElement('a');
        exit_menu.setAttribute('class',`closebtn`)
        exit_menu.setAttribute('href',"javascript:void(0)")
        exit_menu.setAttribute('onclick',"closeNav()")
        exit_menu.innerHTML = '&times;'
        mySidenav.appendChild(exit_menu)

        let list  = []
        let refer = []

        itens.forEach(item=>{
            list.push(item.menu)
            refer.push('#')
        })

        list.forEach((item,idx)=>{
            let item_menu = doc.createElement('a')
            if(refer[idx]=='#') {
                item_menu.setAttribute('href',"javascript:void(0)")
                item_menu.setAttribute('onclick',`clickShowTela(${idx});closeNav();`)
            } else {
                item_menu.setAttribute('href',refer[idx])
            }
            item_menu.innerHTML = item
            mySidenav.appendChild(item_menu)
        })
        getDadosMasters()
    }

    function text_acao_tela(text){
        let elemen = doc.getElementById("text_acao_tela")
        elemen.innerHTML = text 
    }

    function criaElementoBtnMostar(item,idx) {
        let id = `Mostar_${item}`
        let classe = "bi bi-file-earmark-text"
        let estilo = "font-size: 1.5rem; color: cornflowerblue; margin-left: 5px; cursor: pointer;"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsMostrarExec(item,idx)}, false);
        return elemento
    }

    function criaElementoBtnEditar(item,idx) {
        let id = `Editar_${item}` 
        let classe = "bi bi-pencil"
        let estilo = "font-size: 1.5rem; color: rgb(212, 237, 100); margin-left: 5px; cursor: pointer;"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsEditarExec(item,idx)}, false);
        return elemento
    }

    function criaElementoBtnExcluir(item,idx) {
        let id =  `Excluir_${item}`
        let classe = "bi bi-trash"
        let estilo = "font-size: 1.5rem; color: rgb(235, 65, 65); margin-left: 5px; cursor: pointer;"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsExcluirExec(item,idx)}, false);
        return elemento
    }

    function criaElemento(tag,id,classe,estilo) {
        let elemento = doc.createElement(tag)
        elemento.setAttribute('id',id)
        elemento.setAttribute('class',classe)
        elemento.setAttribute('style',estilo)
        return elemento
    }

    function hide_all_div() {
        div_tabela.style.display = "none" 
        div_tela.style.display   = "none"  
    }

    function hide_div_master() {
        div_master.style.display = "none" 
    }

    function show_div(div) {
        hide_all_div()
        div.style.display = 'block'  
    }

    // btn_novo
    function btn_novo_exec() {
        if(flag_debug) { console.log('Clicou NOVO') }    
        show_div( div_tela )  
        text_acao_tela('Inclusão')
        btn_save.innerHTML = 'Inclui'
        setNullParaElementos() 
        if(flag_debug) { console.log('FieldFocus:',fieldFocus) }
        setFocus(fieldFocus)
    }

    // btn_seek
    function btn_seek_exec() {
        if(flag_debug) { console.log('Clicou SEEK') }   
        show_div( div_tabela )  
        text_acao_tela('Pesquisa') 
    }

    // btn_sair
    function btn_sair_exec() {
        if(flag_debug) { console.log('Clicou SAIR') }   
        hide_all_div()  
        hide_div_master()
        id_tela = -1
        limpaElementosDIV()
    }

    // btn_salvar
    function btn_save_exec() {
        console.log('Clicou SAVE :',btn_save.innerHTML)   
    }

    // btn_cancelar
    function btn_cancel_exec() {
        if(flag_debug) { console.log('Clicou CANCELAR') }   
        hide_all_div()  
        text_acao_tela('Cancelar') 
    }

    function append(element,tag, str) {
        let child = document.createElement(tag);
        child.innerHTML = str
        element.appendChild(child)
        return child
    }

    function novoElemento(element,tag) {
        let child = document.createElement(tag);
        element.appendChild(child)
        return child
    }

    //btn_mostrar
    function actionsMostrarExec(id,idx) {
        if(flag_debug) { console.log('actionsMostrarExec ID:',id,idx) }
        show_div( div_tela )  
        text_acao_tela('Cadastro') 
        btn_save.innerHTML = 'OK'
        getDadosParaElementos(id,idx,false) 
        btn_tela_cancel.focus()
    }

    // btn_editar
    function actionsEditarExec(id,idx) {
        if(flag_debug) { console.log('actionsEditarExec ID:',id,idx) }
        show_div( div_tela )  
        text_acao_tela('Alteração')
        btn_save.innerHTML = 'Altera'
        getDadosParaElementos(id,idx,true) 
        setFocus(fieldFocus)
     }
 
     // btn_excluir
     function actionsExcluirExec(id,idx) {
        if(flag_debug) { console.log('actionsExcluirExec ID:',id,idx) }
        show_div( div_tela )  
        text_acao_tela('Exclusão') 
        btn_save.innerHTML = 'Exclui'
        getDadosParaElementos(id,idx,false) 
        btn_tela_cancel.focus()
     }

     function getDadosParaElementos(id,idx,edit) {
         let reg = data_api[idx]
         if(flag_debug) { console.log('Registro Select: ID:',id,', IDX:',idx,', Dados:',reg ) }
         fields.forEach((field,idx)=>{
             let elem = doc.getElementById(`Tela_${field}`)
             let tipo = fieldsTypes[idx]
             let readOnly  = edit ? fieldsReadOnly[idx] : true
             elem.readOnly = readOnly

             if(flag_debug) { console.log(field,'Tipo:',tipo) }

             elem.value = edit ? formataDadoElemento(tipo,reg[field],elem) : formataShowElemento(tipo,reg[field],elem)
         })
     }

     function setNullParaElementos() {
        if(flag_debug) { console.log('Registro Novo: setNullParaElementos()') }
        fields.forEach((field,idx)=>{
            let elem = doc.getElementById(`Tela_${field}`)
            let tipo = fieldsTypes[idx]
            let readOnly  = fieldsReadOnly[idx]
            elem.readOnly = readOnly
            elem.value    = formataDadoElemento(tipo,null,elem)
        })
    }

    function setFocus(field) {
        let nameElem = `Tela_${field}`
        let elem = doc.getElementById(nameElem)
        if(!elem) {
            console.error(`(common/config/entities.json) - Campo "${field}" atribuído para fieldFocus, não existe !!!`)
        } else {
            elem.focus()
        }
    }

     function formataDadoElemento(tp,valor,elem){
        let tipo = tp.substr(0,4)
        let ret  = valor
        
        console.log('Tipo:',tipo,tp)

        if(tipo=='time' || tipo=='date') {
            ret = valor ? valor.substr(0,19) : null
         } else 
         if(tipo=='nume') {
            elem.setAttribute('type','number')
            ret =  valor ? parseFloat(valor) : 0
         } else {
            ret = valor
         }
        return ret
     }

     function formataShowElemento(tp,valor,elem){
        let tipo = tp.substr(0,4)
        let ret  = valor
        let moeda = {
            style: "currency",
            currency: "BRL"
          }
        
        console.log('Tipo:',tipo,tp)

        if(tipo=='time' || tipo=='date') {
            ret = valor.substr(0,19)
         } else 
         if(tipo=='nume') {
            elem.setAttribute('type','text')
            ret =  parseFloat(valor).toLocaleString('pt-BR',moeda)
         } else {
            ret = valor
         }
        return ret
     }

     function createElementInputInt(name,caption,value,col_md,readOnly,len) {
        let type = 'number'
        let alignInput = 'rigth'
        let attributes = [
            {chave: "type"  , value: `${type}`},
            {chave: "id"    , value: `Tela_${name}`},
            {chave: "class" , value: "form-control"},
            {chave: "style" , value: `text-align: ${alignInput}`},
            {chave: "value" , value: `${value}`},
            {chave: "min"   , value: "0"},
            {chave: "max"   , value: "9999999999"},
            {chave: "step"  , value: "1" },
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInputNumber(name,caption,value,col_md,readOnly,len) {
        let type = 'number'
        let alignInput = 'rigth'
        let attributes = [
            {chave: "type"  , value: `${type}`},
            {chave: "id"    , value: `Tela_${name}`},
            {chave: "class" , value: "form-control"},
            {chave: "style" , value: `text-align: ${alignInput}`},
            {chave: "value" , value: `${value}`},
            {chave: "min"   , value: "0.00"},
            {chave: "max"   , value: "9999999999.99"},
            {chave: "step"  , value: "0.01" },
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInputDateTime(name,caption,value,col_md,readOnly,len) {
        let type = 'datetime-local'
        let alignInput = 'left'
        let attributes = [
            {chave: "type"  , value: `${type}`},
            {chave: "id"    , value: `Tela_${name}`},
            {chave: "class" , value: "form-control"},
            {chave: "style" , value: `text-align: ${alignInput}`},
            {chave: "value" , value: `${value}`},
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInputDate(name,caption,value,col_md,readOnly,len) {
        let type = 'date'
        let alignInput = 'left'
        let attributes = [
            {chave: "type"  , value: `${type}`},
            {chave: "id"    , value: `Tela_${name}`},
            {chave: "class" , value: "form-control"},
            {chave: "style" , value: `text-align: ${alignInput}`},
            {chave: "value" , value: `${value}`},
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInputText(name,caption,value,col_md,readOnly,len) {
        let type = 'text'
        let alignInput = 'left'
        let attributes = [
            {chave: "type"      , value: `${type}`},
            {chave: "id"        , value: `Tela_${name}`},
            {chave: "class"     , value: "form-control"},
            {chave: "style"     , value: `text-align: ${alignInput}`},
            {chave: "value"     , value: `${value}`},
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInputString(name,caption,value,col_md,readOnly,len) {
        let type = 'text'
        let alignInput = 'left'
        let attributes = [
            {chave: "type"      , value: `${type}`},
            {chave: "id"        , value: `Tela_${name}`},
            {chave: "class"     , value: "form-control"},
            {chave: "style"     , value: `text-align: ${alignInput}`},
            {chave: "value"     , value: `${value}`},
            {chave: "maxlength" , value: `${len}`},
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInput(name,caption,col_md,readOnly,attributes) {
        let div_row = document.createElement('div');
        div_row.setAttribute('class',`row`)

        let div_col = document.createElement('div');
        div_col.setAttribute('class',`col-md-${col_md}`)
        div_row.appendChild(div_col)

        let label = document.createElement('label');
        label.setAttribute('for',`Tela_${name}`)
        label.setAttribute('class',`col-md-12 col-form-label text-md-left py-0`)
        label.innerHTML = caption
        div_col.appendChild(label)

        let input = document.createElement('input');
        for( let i of attributes) {
            input.setAttribute(i.chave,i.value)    
        }
        input.readOnly = readOnly
        div_col.appendChild(input)
        return div_row
     }

     function criaElementoTipo(type_fileld) {
        let ret
        switch (type_fileld) {
            case 'date':
                ret = createElementInputDate
                break;
            case 'timestamp':
            case 'timestamptz':
                ret = createElementInputDateTime
                break;
            case 'int4':
                ret = createElementInputInt
                break;
            case 'number':
            case 'numeric':
                ret = createElementInputNumber
                break;
            case 'varchar':
                ret = createElementInputString
                break;
            case 'text':
                ret = createElementInputText
                break;
            default:
                ret = createElementInputText
          }
        return ret
     }
 
     function getDefsEntidades() {
        fetch(url_types, { method: 'GET' })
        .then(response => response.json())
        .then(ret => { 
            dados = ret
            let defs = dados.defaults
            title_tela.innerHTML = dados.title
            for (let def in defs) {
                if (defs.hasOwnProperty(def)) {
                    fields.push(def)
                }
            }
            fieldFocus = fieldFocus ? fieldFocus : fields[1]
    
            field_ID = dados.key
            if(flag_debug) { 
                console.log('Key field:',field_ID)
                console.log('fields:',fields)
            }
    
            let types = dados.types
            let captions = dados.captions
    
            for (let caption in captions) {
                if (captions.hasOwnProperty(caption)) {
                    let child = append( head_table ,'th', captions[caption])
                    child.setAttribute('scope','col')
                }
            }   
    
            let actions = append( head_table ,'th', 'Ação')
            actions.setAttribute('scope','col')
            actions.setAttribute('style',"width: 105px; text-align: center;")
    
            if(flag_debug) { console.log('Dados:',dados) }
    
            fields.forEach((field)=>{
                let type = types[field]
                let caption = captions[field] 
                let tipo = type.substring(0,type.indexOf("(")).trim()
                let len  = parseInt( '0'+type.substring(type.indexOf("(") + 1,type.indexOf(")") ) , 10)
                let readOnly = (field == field_ID)
    
                tipo = tipo ? tipo.trim() : type.trim()
                fieldsTypes.push(tipo)
                
                let col_len = tipo == 'varchar' ? ( len > 40 ? 12 : ( len > 20 ? 5 : 3 )  ) : ( tipo=='int4' ? 2 : 4 )
    
                if(flag_debug) { console.log('Fields:',field,type,tipo,len,readOnly,col_len) }
    
                let func = criaElementoTipo(tipo)
                let elem = func(field,caption,'',col_len,readOnly,len)
                fieldsReadOnly.push(readOnly)
                div_tela_campos.appendChild(elem)
            })
        })
        .catch(err => console.log('Err:',err.message))    
     }
     
    function getDadosEntidades() {
        let url_page = `${url_dados}/page?page=${pag_page}&size=${pag_size}`
        fetch(url_page, { method: 'GET' })
        .then(response => response.json())
        .then(ret => { 
            data_api  = ret.data
            let itens = data_api

            body_table.innerHTML = ''
    
            if(flag_debug) { console.log('itens:',itens) }
    
            for (let item in itens) {
    
                lines_table = append( body_table ,'tr', '')
                lines_table.setAttribute('id','reg_'+item)
        
                fields.map((field)=>{
                        let linha = itens[item]
                        if(flag_debug) { console.log('Linha:',linha) }
                        let campo = append( lines_table ,'td', linha[field])
                        campo.setAttribute('class','td-sm')
                })
    
                let key_ID = itens[item][field_ID]
    
                if(flag_debug) { console.log('key_ID',key_ID,field_ID,item) }
    
                let butons = novoElemento( lines_table ,'th')
                butons.setAttribute('class','td-sm')
                butons.setAttribute('style',"width: 105px;")
    
                let elemIconMostar = criaElementoBtnMostar(key_ID,item)
                butons.appendChild(elemIconMostar)
    
                let elemIconEditar = criaElementoBtnEditar(key_ID,item)
                butons.appendChild(elemIconEditar)
    
                let elemIconExcluir = criaElementoBtnExcluir(key_ID,item)
                butons.appendChild(elemIconExcluir)
   
            }

            pag_page  = ret.page
            pag_size  = ret.size
            pag_pages = ret.pages
            pag_rows  = ret.total

            show_paginate()

        })
        .catch(err => console.log('Err:',err.message))    
    }

    // Start
    loadEntidades().then(item=>{
        criaElementosMenu(item)    
    })

})(window,document)


