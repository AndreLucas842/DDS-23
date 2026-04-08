/*
//vamo q vamo
console.log("VAMO Q VAMO")

//lacos de repeticao

// for = para
//i = variavel de controle
//i < 5 = duracao do laco
//i++ = aumenta de 1 em 1
for(var i = 0; i < 5; i++){
    console.log("Estou aqui no laço")
}

console.log("Finalize o loop")

//while = enquanto
var c = 1

//(coloca a condição pra entrar no loop)
while(c < 10){
    console.log("Oi, meu chapa")
    //Se não tiver algo pra tirar no loop
    //Ele fica aqui pra sempre
    c++
}

console.log("Finalizei o loop denovo")

//ARRAY
var array = ["Neymar", 10, true, 5.0]

//motra todo o array
console.log(array)

//mostra
console.log(array[2])

array[2] = "jogador"

//mostra todo o array
console.log(array)

*/

//Comentei tudo daqui pra cima

//Lista de times
var times = ["Brasil", "Real Madrid", "Gama", "Santos", "Paysandu"]

for(var i = 0; i < 2; i++){
    console.log("O time atual é:", times[i])
}

// length - descobre o tamanho do Array
console.log(times.length);

console.log("---------------------")
//Faz a repetição até o fim do array
//independente do tamanho, com o .legngth
for(var i = 0; i < times.length; i++){
    console.log("O time atual é:", times[i])
}

console.log("----------------------")
// For especifico de Array
//index - guarda o valor do indice
// in - usa o valor do indice pra mostrar o elemento
//times - define o array
for(var index in times){
    console.log("Indice atual", index)
    console.log("Valor do indice atual", times[index])
}

// For especifico de Array
for(var index of times){
    console.log(times[index])
}