//fatorial
// 5! = 5 * 4 * 3 * 2 * 1

function ex61()
{
    var num = prompt ("digite um numero");
    num = parseInt(num);
    var resultado = 1;

    while(num > 1)
    {
        resultado = resultado * num;
        num = num - 1;
    }
   

    for(var num = 5; num < 1; num -- 1)
    {
        resultado *= num;
    }

    console.log("o fatorial é" + resultado +)
}

