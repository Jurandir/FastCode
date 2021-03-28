"use strict";

((win,doc)=>{

    let div_tabela   = doc.getElementById("div_tabela") 
    let btn_novo     = doc.getElementById("btn_novo")
    let btn_seek     = doc.getElementById("btn_seek")
    let head_table   = doc.getElementById("head_table")
    let lines_table  = doc.getElementById("lines_table")
    let body_table   = doc.getElementById("body_table")
    let fields       = []
    let field_ID     = 'id'
    let url_types    = '/api/bancos2/types'
    let url_dados    = '/api/bancos2'

    head_table.innerHTML  = ''
    body_table.innerHTML  = ''

    let dados      = {}

    function criaElementoBtnMostar(item) {
        let id = `Mostar_${item}`
        let classe = "bi bi-file-earmark-text"
        let estilo = "font-size: 1.5rem; color: cornflowerblue;"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsMostrarExec(item)}, false);
        return elemento
    }

    function criaElementoBtnEditar(item) {
        let id = `Editar_${item}` 
        let classe = "bi bi-pencil"
        let estilo = "font-size: 1.5rem; color: rgb(212, 237, 100);"
        let elemento = criaElemento('i',id, classe, estilo)
        elemento.addEventListener("click", function(){actionsEditarExec(item)}, false);
        return elemento
    }

    function criaElementoBtnExcluir(item) {
        let id =  `Ecluir_${item}`
        let classe = "bi bi-trash"
        let estilo = "font-size: 1.5rem; color: rgb(235, 65, 65);"
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

    btn_novo.addEventListener("click", btn_novo_exec )
    btn_seek.addEventListener("click", btn_seek_exec )

    console.log('Leu JS')

    function btn_novo_exec() {

        console.log('NOVO')    
        div_tabela.style.display = "none"    
    }

    function btn_seek_exec() {
    
        console.log('SEEK')    
        div_tabela.style.display = "block"
    
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
       console.log('actionsMostrarExec ID:',id);
    }

    function actionsEditarExec(id) {
        console.log('actionsEditarExec ID:',id);
     }
 
     function actionsExcluirExec(id) {
        console.log('actionsExcluirExec ID:',id);
     }


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

        console.log('Key field:',field_ID)
        console.log('fields:',fields)

        let captions = dados.captions
        for (let caption in captions) {
            if (captions.hasOwnProperty(caption)) {
                // <th scope="col">Conhecimento</th>
                let child = append( head_table ,'th', captions[caption])
                child.setAttribute('scope','col')
            }
        }   

        let actions = append( head_table ,'th', 'Ação')
        actions.setAttribute('scope','col')
        actions.setAttribute('style',"width: 105px; text-align: center;")
        
        
    })
    .catch(err => console.log(err.message))

    fetch(url_dados, { method: 'GET' })
    .then(response => response.json())
    .then(ret => { 
        let itens = ret.data

        console.log('itens:',itens)

        for (let item in itens) {

            lines_table = append( body_table ,'tr', '')
            lines_table.setAttribute('id','reg_'+item)
    
            fields.map((field)=>{
                    let linha = itens[item]
                    console.log('>>>>',linha)
                    let campo = append( lines_table ,'td', linha[field])
                    campo.setAttribute('class','td-sm')
            })

            let key_ID = itens[item][field_ID]

            console.log('key_ID',key_ID,field_ID,item)

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
    })
    .catch(err => console.log(err.message))
    

    
})(window,document)


