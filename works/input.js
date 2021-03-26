"use strict";

((win,doc)=>{
    let div_tabela = doc.getElementById("div_tabela") 
    let btn_novo   = doc.getElementById("btn_novo")
    let btn_seek   = doc.getElementById("btn_seek")

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
    
    
})(window,document)


