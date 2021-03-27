"use strict";

((win,doc)=>{
    let div_tabela   = doc.getElementById("div_tabela") 
    let btn_novo     = doc.getElementById("btn_novo")
    let btn_seek     = doc.getElementById("btn_seek")
    let head_table   = doc.getElementById("head_table")
    let lines_table  = doc.getElementById("lines_table")
    let body_table   = doc.getElementById("body_table")
    let fields       = []

    head_table.innerHTML  = ''
    body_table.innerHTML  = ''

    let dados      = {}

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

    fetch('/api/bancos2/types', { method: 'GET' })
    .then(response => response.json())
    .then(ret => { 
        dados = ret
        let defs = dados.defaults
        for (let def in defs) {
            if (defs.hasOwnProperty(def)) {
                fields.push(def)
            }
        }
        
        console.log('fields:',fields)

        let captions = dados.captions
        for (let caption in captions) {
            if (captions.hasOwnProperty(caption)) {
                // <th scope="col">Conhecimento</th>
                let child = append( head_table ,'th', captions[caption])
                child.setAttribute('scope','col')
            }
        }        
    })
    .catch(err => console.log(err.message))

    fetch('/api/bancos2', { method: 'GET' })
    .then(response => response.json())
    .then(ret => { 
        let itens = ret.data

        console.log('itens:',itens)

        for (let item in itens) {

            // <tr id="head_table">

            lines_table = append( body_table ,'tr', '')
            lines_table.setAttribute('id',item)

            fields.map((field)=>{
                    // <td class="td-sm">'00/00/0000'</td>
                    let linha = itens[item]
                    console.log('>>>>',linha)
                    let campo = append( lines_table ,'td', linha[field])
                    campo.setAttribute('class','td-sm')
            })        

        }        
    })
    .catch(err => console.log(err.message))
    

    
})(window,document)


