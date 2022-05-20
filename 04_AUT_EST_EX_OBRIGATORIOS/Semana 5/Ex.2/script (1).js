function notas() {
    var Total = document.getElementById('value').value;
    var cem = parseInt(Total / 100);
    Total = Total % 100
    var Cinquenta = parseInt(Total / 50);
    Total = Total % 50
    var vinte = parseInt(Total / 20);
    Total = Total % 20
    var Dez = parseInt(Total / 10);
    Total = Total % 10
    var Cinco = parseInt(Total / 5);
    Total = Total % 5
    var Dois = parseInt(Total / 2);
    Total = Total % 2
    var Um = parseInt(Total / 1);
    


    document.getElementById("100").innerHTML ="cem:" + cem
    document.getElementById("50").innerHTML = "cinquenta:" + Cinquenta
    document.getElementById("20").innerHTML = "vinte:" + vinte
    document.getElementById("10").innerHTML = "dez:" + Dez
    document.getElementById("5").innerHTML = "cinco: " + Cinco
    document.getElementById("2").innerHTML = "dois: " + Dois
    document.getElementById("1").innerHTML = "um: " + Um  
}