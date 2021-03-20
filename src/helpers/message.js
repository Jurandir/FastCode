const message = [
    {id:00, success: false, message: 'Dados não localizados na pesquisa !!!',code:404},    
    {id:01, success: true,  message: 'Sucesso. OK.',code:200},
    {id:02, success: false, message: 'Erro interno !!!', code:500},    
] 

const msg = (idx) => message[idx]

module.exports = msg;