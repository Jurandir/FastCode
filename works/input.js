"use strict";

((win,doc)=>{

    let div_tabela      = doc.getElementById("div_tabela") 
    let div_tela        = doc.getElementById("div_tela") 
    let div_tela_campos = doc.getElementById("div_tela_campos")
    let btn_novo        = doc.getElementById("btn_novo")
    let btn_seek        = doc.getElementById("btn_seek")
    let head_table      = doc.getElementById("head_table")
    let lines_table     = doc.getElementById("lines_table")
    let body_table      = doc.getElementById("body_table")
    let btn_tela_cancel = doc.getElementById("btn_tela_cancel")
    let fields          = []
    let field_ID        = 'id'
    let url_types       = '/api/bancos2/types'
    let url_dados       = '/api/bancos2'
    let flag_debug      = false

    head_table.innerHTML  = ''
    body_table.innerHTML  = ''

    let dados      = {}


    function text_acao_tela(text){
        let elemen = doc.getElementById("text_acao_tela")
        elemen.innerHTML = text 
    }

    function criaElementoBtnMostar(item) {
        let id = `Mostar_${item}`
        let classe = "bi bi-file-earmark-text"
        let estilo = "font-size: 1.5rem; color: cornflowerblue; margin-left: 5px; cursor: pointer;"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsMostrarExec(item)}, false);
        return elemento
    }

    function criaElementoBtnEditar(item) {
        let id = `Editar_${item}` 
        let classe = "bi bi-pencil"
        let estilo = "font-size: 1.5rem; color: rgb(212, 237, 100); margin-left: 5px; cursor: pointer;"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsEditarExec(item)}, false);
        return elemento
    }

    function criaElementoBtnExcluir(item) {
        let id =  `Ecluir_${item}`
        let classe = "bi bi-trash"
        let estilo = "font-size: 1.5rem; color: rgb(235, 65, 65); margin-left: 5px; cursor: pointer;"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsExcluirExec(item)}, false);
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

    function show_div(div) {
        hide_all_div()
        div.style.display = 'block'  
    }

    function btn_novo_exec() {
        if(flag_debug) { console.log('Clicou NOVO') }    
        show_div( div_tela )  
        text_acao_tela('Inclusão') 
    }

    function btn_seek_exec() {
        if(flag_debug) { console.log('Clicou SEEK') }   
        show_div( div_tabela )  
        text_acao_tela('Pesquisa') 
    }

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

    function actionsMostrarExec(id) {
        if(flag_debug) { console.log('actionsMostrarExec ID:',id) }
        show_div( div_tela )  
        text_acao_tela('Cadastro') 
    }

    function actionsEditarExec(id) {
        if(flag_debug) { console.log('actionsEditarExec ID:',id) }
        show_div( div_tela )  
        text_acao_tela('Alteração') 
     }
 
     function actionsExcluirExec(id) {
        if(flag_debug) { console.log('actionsExcluirExec ID:',id) }
        show_div( div_tela )  
        text_acao_tela('Exclusão') 
     }

     function createElementInputInt(name,caption,value,col_md,readOnly) {
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

     function createElementInputNumber(name,caption,value,col_md,readOnly) {
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

     function createElementInputDateTime(name,caption,value,col_md,readOnly) {
        let type = 'datetime-local'
        let alignInput = 'center'
        let attributes = [
            {chave: "type"  , value: `${type}`},
            {chave: "id"    , value: `Tela_${name}`},
            {chave: "class" , value: "form-control"},
            {chave: "style" , value: `text-align: ${alignInput}`},
            {chave: "value" , value: `${value}`},
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInputDate(name,caption,value,col_md,readOnly) {
        let type = 'date'
        let alignInput = 'center'
        let attributes = [
            {chave: "type"  , value: `${type}`},
            {chave: "id"    , value: `Tela_${name}`},
            {chave: "class" , value: "form-control"},
            {chave: "style" , value: `text-align: ${alignInput}`},
            {chave: "value" , value: `${value}`},
        ]
        return createElementInput(name,caption,col_md,readOnly,attributes)
     }

     function createElementInputText(name,caption,value,col_md,readOnly) {
        let type = 'text'
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

     btn_novo.addEventListener("click", btn_novo_exec )
     btn_seek.addEventListener("click", btn_seek_exec )
     btn_tela_cancel.addEventListener("click", btn_cancel_exec )
 
    fetch(url_types, { method: 'GET' })
    .then(response => response.json())
    .then(ret => { 
        dados = ret
        let defs = dados.defaults
        for (let def in defs) {
            if (defs.hasOwnProperty(def)) {
                fields.push(def)
            }
        }

        field_ID = dados.key
        if(flag_debug) { 
            console.log('Key field:',field_ID)
            console.log('fields:',fields)
        }

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
    })
    .catch(err => console.log('Err:',err.message))

    fetch(url_dados, { method: 'GET' })
    .then(response => response.json())
    .then(ret => { 
        let itens = ret.data

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

            let elemIconMostar = criaElementoBtnMostar(key_ID)
            butons.appendChild(elemIconMostar)

            let elemIconEditar = criaElementoBtnEditar(key_ID)
            butons.appendChild(elemIconEditar)

            let elemIconExcluir = criaElementoBtnExcluir(key_ID)
            butons.appendChild(elemIconExcluir)

        }
        
        let elementoII = createElementInputInt('II','Inteiro','000001',2,false)
        let elementoXX = createElementInputText('XX','Texto.','Nome exemplo',8,false)
        let elementoYY = createElementInputDate('YY','Emissão.','2021-02-01',3,false)
        let elementoZZ = createElementInputDateTime('ZZ','Date Time.','2018-06-12T19:30',3,false)
        let elementoMM = createElementInputNumber('MM','Money.','1234.89',2,false)

        div_tela_campos.appendChild(elementoII)
        div_tela_campos.appendChild(elementoXX)
        div_tela_campos.appendChild(elementoYY)
        div_tela_campos.appendChild(elementoZZ)
        div_tela_campos.appendChild(elementoMM)

    })
    .catch(err => console.log('Err:',err.message))

})(window,document)


