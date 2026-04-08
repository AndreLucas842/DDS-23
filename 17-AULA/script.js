console.log("SIM");

//callback
//funcao principal
//funcao que será o callck
function finalizar(){
    console.log("Acabei");
}

//Funcao principal
function processar(callback){
    console.log("Iniciando o processamento das informações...");
    callback()
}

// Executo a função principal, atrelando ao callback
processar(finalizar)


//callback com função anonima
function executarTarefa(callback){
    console.log("Iniciando a execução da tarefa...");
    //executa uma funcao com delay
    setTimeout(callback, 3000)
}

executarTarefa(() => {
    console.log("Acabou a tarefa")
})

//Callback com condicao simples
function verificarNota(nota, callback){
    if(nota >= 7){
        callback()
    }
}

function aprovado(){
    console.log("Congratulations, você é o melhor")
}

verificarNota(8, aprovado)

//verificação com dois Callsback

//seu deu certo
    function loginCorreto(){
        console.log("Parabéns, logado com sucesso")
    }

//seu deu errado
function loginErrado(){
        console.log("Usuário ou senha errados")
    }
function validarSenha(senha, sucesso, erro){
    //Verificar a senha e se estiver correta chama o callback de sucesso
    if(senha == "1234"){
        sucesso()
    }
    // Se deu erro, chama outro callback
    else{
        erro()
    }
}    

console.log("-------------");
//Executar os testes
//Com senha errada
validarSenha("7", loginErrado, loginErrado)

console.log("-----------------");
//Com senha certa
validarSenha("1234", loginCorreto, loginErrado)