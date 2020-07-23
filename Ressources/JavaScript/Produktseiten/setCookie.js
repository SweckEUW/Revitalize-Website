//Addiert zu dem Produkt die anzahl und setzt den Cookie mit der neuen Anzahl
function addProduktAmmount(productNummer){
    //Ablaufdatum in 20 Tagen setzen
    var date = new Date();
    date.setTime(date.getTime() + 20*24*3600*1000);
    var ablaufdatum = "expires="+date.toUTCString()+";";

    //Alle Cookies als Liste
    cookieValues = document.cookie.split(";");
    
    //Cookie mit der Produktnummer finden und die Anzahl auf die neue Anzahl setzen
    var value = cookieValues[productNummer].split("=");

    cookieValues[productNummer]=value[0]+"="+(parseInt(value[1])+1);

    //cookie setzen
    document.cookie = cookieValues[0]+";"+ablaufdatum;
    document.cookie = cookieValues[1]+";"+ablaufdatum;
    document.cookie = cookieValues[2]+";"+ablaufdatum;
    document.cookie = cookieValues[3]+";"+ablaufdatum;

    calculateWarenkorbAnzahl();
}

function calculateWarenkorbAnzahl(){
    var x = document.cookie.split(";");
    
    var product1 = x[3].split("=")[1];
    var product2 = x[2].split("=")[1];
    var product3 = x[1].split("=")[1];
    var product4 = x[0].split("=")[1];

    document.getElementById("WarenkorbAnzahl").innerHTML = parseInt(product1) + parseInt(product2) + parseInt(product3) + parseInt(product4);
}
