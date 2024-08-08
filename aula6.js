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

//5 - calcular o imc ( peso / (altura x altura) 

//6 - verifique o o maior entre dois numeros inseridos

//7 - pegue a idade e diga se é criança adulto ou idoso

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
    saida.value = parseInt(primeiro) + parseInt(segundo);
}
//errado
function ex5()
{
    var peso = num1.value;
    var altura = num2.value;
    var multiplicacao = parseFloat(altura) * parseFloat(altura);
    var divisao = parseInt(peso) / multiplicacao
    saida.value = divisao;
}

function ex6()
{
    var n1 = num1.value;
    var n2 = num2.value;

    n1 = parseInt(n1);
    n2 = parseInt(n2);

    if (n1 > n2)
    {
        saida.value = n1;
    }
    else
    {
        saida.value = n2;
    }
}


function ex7()
{
    var idade = num1.value;
    
    if (idade >= 60)
    {
        saida.value = "idoso";
    } else if (idade >= 18)
    {
        saida.value = "adulto";
    } else
        {
            saida.value = "crianca"
        }
  

}