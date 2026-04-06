/*
// Mostrando uma mensagem no console
console.log("Salve rapaziadinha do canal, se increve ai")

// Caixinha de alerta
alert("Teste para ver se funciona")

//Criando variaveis
var nome = "Messi"    //String ou cadeia
var numero = 10       //Int ou inteiro 
var salto = 2.10      //Float ou real
var theBest = true   // bool ou logico

//Funcao qeu mostra o tipo da variavel
console.log(typeof(nome))

console.log("Seu nome é:" + nome)
console.log("Seu numero é:", numero)
console.log("Seu pulo é", salto)
console.log("É o melhor? =", theBest)

nome = 10
console.log(typeof(nome))

//Outros tipos de variavel
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

// Operadores aritmeticos
// +,-,*,/,%

/* 
var a = 10 , b = 5

console.log("Soma:",a + b )
console.log("Subtração", a - b)
console.log("Multiplicação", a * b)
console.log("Divisão", a / b)
console.log("Módulo", a % b)

// Operadores lógicos
// E , OU , NÃO
// &&, || ,! 

var verdade = true, mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

//Operdores relacionais
// >, <, >=, <=, ==, !=, ===, !==

var x = 65, y = 32, z = "65"
//Verificando apenas o valor 
console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x !== y)
console.log(x === y)
console.log(x !== y)


*/
//Comentei toda a parte de operadores

//Desvios condicionais

//se = if

/*
var estaVivo = true 

//primeira comparação
if(estaVivo == true){
    console.log("Parabéns, você está vivo")
}
//segunda comparação, caso a primeira dê errado
else if(estaVivo == undefined){
    console.log("Você não tá nada")
}
//Entra aqui, caso todas as outras comparações deem errado
else{
    console.log("Infelizmente, você foi de F ☠️")
}

*/

//Switch = Escolha
/*
var camisa = "Laranja"

switch(camisa){
    case"Azul":
    console.log("Você ganhou um voucher")
    break
    case "Branco":
        console.log("Você ganhou um body splash da Víriginia")
    break
    case "Vermelho":
        console.log("Você ganhou uma ferrari 3 portas") 
    break
    default:
        console.log("Camisa inválida e feia, vá trocar")       
    break
}

*/

//Comentei toda a parte de desvios

//Prompt - Interage com o usuario e coleta um valor
/*
prompt("Digite seu nome:")

var time = prompt("Me diga, pra quem você torce?")

console.log("Seu time é", time
)
*/

var x = 150
var y = 250
var z = 500
var viagem = 1

if( x < y ){
    viagem += 0
}

else{
    viagem += 1
}

if( (X+Y) < Z){
    viagem += 0
}