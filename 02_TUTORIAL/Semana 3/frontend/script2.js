/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";

/* 
=======================
Event Listener
=======================
*/

/* A adição dessa função que "escuta" um evento permite que 
   verifiquemos se a página foi carregada para só então chamar
   a função CalcAddAndShow, pois ela só funcionará depois da 
   criação da div de resultado, com id "result" */
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var x0 = x;
        var y0 = y;
        // Alternativa equivalente: var x0 = 10, y0 = 20;
        CalcAddAndShow(x0, y0);
  }
}


/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAddAndShow(x, y){
    var op = "+";
    var result = Calc(x, y, op);
    function addNumbers()
	{
		var val1 = parseInt(document.getElementById("value1").value);
		var val2 = parseInt(document.getElementById("value2").value);
		var ansD = document.getElementById("answer");
		ansD.value = val1 + val2;;

// display the sum
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    ShowOp(x, y, op);
    ShowResult(result);
}


/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(x, y, op){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
    //Alternativa: .. += "<br />" + x + " " + op + " " + y + " = "
}


/* Função que mostra o resultado obtido */
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
}
