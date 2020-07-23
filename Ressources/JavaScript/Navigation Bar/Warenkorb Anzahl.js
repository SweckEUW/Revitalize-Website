if(document.cookie.toString().length == 0){
    firstTimeCookie();
    document.getElementById("WarenkorbAnzahl").innerHTML = 0;
}else{
    calculateWarenkorbAnzahl();
}

function calculateWarenkorbAnzahl(){
    var x = document.cookie.split(";");
    
    var product1 = x[3].split("=")[1];
    var product2 = x[2].split("=")[1];
    var product3 = x[1].split("=")[1];
    var product4 = x[0].split("=")[1];
    var anzahl = parseInt(product1) + parseInt(product2) + parseInt(product3) + parseInt(product4);
    document.getElementById("WarenkorbAnzahl").innerHTML = anzahl;
}

//setzt alle Produkt Anzahlen auf 0 und setzt das Ablaufdatum in 20 tagen
function firstTimeCookie(){
    //Ablaufdatum
    var date = new Date();
    date.setTime(date.getTime() + 20*24*3600*1000);
    var ablaufdatum = "expires="+date.toUTCString()+";"

    //Produkt 1
    var produkt1 = "boost=0;";

    //Produkt 2
    var produkt2 = "whey=0;";

    //Produkt 3
    var produkt3 = "vitamin=0;";
 
    //Produkt 4
    var produkt4 = "nutrition=0;";

    //cookie setzen
    document.cookie = produkt1 + ablaufdatum;
    document.cookie = produkt2 + ablaufdatum;
    document.cookie = produkt3 + ablaufdatum;
    document.cookie = produkt4 + ablaufdatum;
}