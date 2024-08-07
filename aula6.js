//aula 6

function oi ()
{
    
    var entrada = valor.value;

    saida.value = entrada;
}

//exercicio
// 1 - devolva o valor digitado de forma inversa
//ex: edir --- ride ou bola --- alob

// 2 - coloque um nome todo em maiusculas
// edir --- EDIR

//3 - coloque a primeira letra em maiusculo
//edir --- Edir

//4 - some o numero 1 com o numero 2

function ex1()
{

}

function ex2()
{
    var entrada = valor.value;
    saida.value = entrada.toUpperCase();
}

function ex3()
{
    var entrada = valor.value;
    var letra =  entrada.charAt(0);
    var resto = entrada.substr(1);
    saida.value = letra.toUpperCase() + resto.toLowerCase();
}

function ex4()
{
    var primeiro = num1.value;
    var segundo = num2.value;
    saida.value = primeiro + segundo;
}