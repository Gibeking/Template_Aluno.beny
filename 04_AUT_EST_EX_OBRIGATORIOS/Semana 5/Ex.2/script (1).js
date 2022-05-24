function notas() {
    var Total = document.getElementById('value').value;
    var cem = Math.floor(Total / 100);
    Total = Total % 100
    var Cinquenta = Math.floor(Total / 50);
    Total = Total % 50
    var vinte = Math.floor(Total / 20);
    Total = Total % 20
    var Dez = Math.floor(Total / 10);
    Total = Total % 10
    var Cinco = Math.floor(Total / 5);
    Total = Total % 5
    var Dois = Math.floor(Total / 2);
    Total = Total % 2
    var Um = Math.floor(Total / 1);
    


    document.getElementById("100").innerHTML ="cem:" + cem
    document.getElementById("50").innerHTML = "cinquenta:" + Cinquenta
    document.getElementById("20").innerHTML = "vinte:" + vinte
    document.getElementById("10").innerHTML = "dez:" + Dez
    document.getElementById("5").innerHTML = "cinco: " + Cinco
    document.getElementById("2").innerHTML = "dois: " + Dois
    document.getElementById("1").innerHTML = "um: " + Um  
}