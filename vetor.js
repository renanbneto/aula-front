
var cidade = "campo largo";
var cidade2 = "curitiba";

//estrutura de dados
// vetor  = array

var lista = ["curitiba", "colombo", "araucaria", "campo largo"];

console.log(lista[1])//para imprimir no console a informação da posção 1

lista.push("pinhais");//insere no final da lista
lista.unshift("apucarana");//coloca como primeiro da lista

lista.shift();//remove o primeiro item da lista
lista.pop();//remove o ultimo item da lista
lista.sort();//lista fica em ordem alfabetica

//para imprimir os itens da lista
lista[0];
lista[1];
lista[3];

//ou altomaticamente com loop (laço de repetição)
var inicial = 0;
var final = lista.length - 1;

while (inicial <= final)
{
    console.log (lista[inicial]);
    inicial = inicial + 1;
}

// para imprimir em ordem decrescente, reversa

var inicial = lista.length - 1;
var final = 0;

while (inicial >= final)
{
    console.log(lista[inicial]);
    inicial = inicial - 1;
}