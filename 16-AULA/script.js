console.log("VAMOS FLAMENGOOO")

//funcoes
//Só executa
function teste(){
    console.log("Funcionou aqui")
}
teste()

console.log(teste);

//funcoes com parametro
function teste2(parametro){
    console.log("O parametro é:", parametro);
}
teste2("Flamengo")

//com retorno
function media(n1,n2){
    var resultado = n1 + n2
    return resultado
}

console.log(media(3,4));

//Guarda o valor do retorno em uma variavel
var mediaFinal = media(8,6)
console.log("Média: ",mediaFinal)

//Funcao anonima
//é uma funcao que não tem nome, e seu retorno é guardado em uma variavel

var mensagem = function(){
    console.log("Oi meu chapa");
}

console.log(mensagem);
mensagem()

//Apenas guarda o texto da funcao, sem executar
mensagem

//Executa a funcao
mensagem()


//Arrow function - funcao de seta
//forma mais comunm de escrever funcoees no javascript
const multiplicar = (x,y) => {
    return x * y
}

console.log)("Sua multiplicação deu:", multiplicar(7,6));

//mais menor ainda
//quando só tem uma linha de retorno na o return pode ser omitido e fica uma linha só
const dobro = numero => numero * 2

console.log("O dobro é:", dobro(4))