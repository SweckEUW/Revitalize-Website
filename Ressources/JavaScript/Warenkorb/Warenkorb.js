document.getElementById("veganwhey").style.display = "none";
document.getElementById("veganvitamin").style.display = "none";
document.getElementById("vegannutrition").style.display = "none";
document.getElementById("veganboost").style.display = "none";

function remove(productNummer,produktID){
    document.getElementById(produktID).style.display = "none";

    //Ablaufdatum in 20 Tagen setzen
    var date = new Date();
    date.setTime(date.getTime() + 20*24*3600*1000);
    var ablaufdatum = "expires="+date.toUTCString()+";";
    
    cookieValues = document.cookie.split(";");

    //Cookie mit der Produktnummer finden und die Anzahl auf die neue Anzahl setzen
    var value = cookieValues[productNummer].split("=");
    cookieValues[productNummer]=value[0]+"="+0;

    document.cookie = cookieValues[0]+";"+ablaufdatum;
    document.cookie = cookieValues[1]+";"+ablaufdatum;
    document.cookie = cookieValues[2]+";"+ablaufdatum;
    document.cookie = cookieValues[3]+";"+ablaufdatum;

    gesamtPreis();
}

//setzt die Anzahl eines Produktes auf den Wert Anzahl  und setzt den Cookie
function setProduktAmmount(productNummer,produktID){
    //Ablaufdatum in 20 Tagen setzen
    var date = new Date();
    date.setTime(date.getTime() + 20*24*3600*1000);
    var ablaufdatum = "expires="+date.toUTCString()+";";

    //Alle Cookies als Liste
    cookieValues = document.cookie.split(";");

    
    var ammount = document.getElementById(produktID).getElementsByClassName("anzahl")[0].value;
    if(ammount<0)
        ammount = 0;
    if(ammount.length<1)
        ammount = 0;
    //Cookie mit der Produktnummer finden und die Anzahl auf die neue Anzahl setzen
    var value = cookieValues[productNummer].split("=");

    //cookie setzen
    cookieValues[productNummer] = value[0]+"="+ammount;
    document.cookie = cookieValues[0]+";"+ablaufdatum;
    document.cookie = cookieValues[1]+";"+ablaufdatum;
    document.cookie = cookieValues[2]+";"+ablaufdatum;
    document.cookie = cookieValues[3]+";"+ablaufdatum;
    checkCookies();
}

function checkCookies(){
    if(!document.cookie.toString().length == 0){
        var x = document.cookie.split(";");
        //vegan boost
        if(x[0].split("=")[1]>0){
            document.getElementById("veganboost").style.display = "block";
            document.getElementById("veganboost").getElementsByClassName("anzahl")[0].value = x[0].split("=")[1];
            document.getElementById("veganboost").getElementsByClassName("preis")[0].innerHTML = (x[0].split("=")[1]*19.99).toFixed(2)+"€";
        }else{
            document.getElementById("veganboost").getElementsByClassName("preis")[0].innerHTML =0;
        }

        //vegan whey
        if(x[1].split("=")[1]>0){
            document.getElementById("veganwhey").style.display = "block";
            document.getElementById("veganwhey").getElementsByClassName("anzahl")[0].value = x[1].split("=")[1];
            document.getElementById("veganwhey").getElementsByClassName("preis")[0].innerHTML = (x[1].split("=")[1]*25.99).toFixed(2)+"€";
        }else{
            document.getElementById("veganwhey").getElementsByClassName("preis")[0].innerHTML =0;
        }

        //vegan vitamin
        if(x[2].split("=")[1]>0){
            document.getElementById("veganvitamin").style.display = "block";
            document.getElementById("veganvitamin").getElementsByClassName("anzahl")[0].value = x[2].split("=")[1];
            document.getElementById("veganvitamin").getElementsByClassName("preis")[0].innerHTML = (x[2].split("=")[1]*8.99).toFixed(2)+"€";
        }else{
            document.getElementById("veganvitamin").getElementsByClassName("preis")[0].innerHTML =0;
        }

        //vegan nutrition
        if(x[3].split("=")[1]>0){
            document.getElementById("vegannutrition").style.display = "block";
            document.getElementById("vegannutrition").getElementsByClassName("anzahl")[0].value = x[3].split("=")[1];
            document.getElementById("vegannutrition").getElementsByClassName("preis")[0].innerHTML = (x[3].split("=")[1]*18.99).toFixed(2)+"€";
        }else{
            document.getElementById("vegannutrition").getElementsByClassName("preis")[0].innerHTML =0;
        }

    }

   gesamtPreis();
}

function gesamtPreis(){
    var x = document.cookie.split(";");
    
    var product1 = x[3].split("=")[1]*18.99;
    var product2 = x[2].split("=")[1]*8.99;
    var product3 = x[1].split("=")[1]*25.99;
    var product4 = x[0].split("=")[1]*19.99;

    document.getElementsByClassName("gesamtpreis")[0].innerHTML = "<p>Gesamtpreis: "+ (product1 + product2 + product3 + product4).toFixed(2)+"€</p>";
    document.getElementById("zuZahlen").innerHTML = "Sie zahlen: "+(product1 + product2 + product3 + product4).toFixed(2) +"€";
    calculateWarenkorbAnzahl()
}

function calculateWarenkorbAnzahl(){
    var x = document.cookie.split(";");
    
    var product1 = x[3].split("=")[1];
    var product2 = x[2].split("=")[1];
    var product3 = x[1].split("=")[1];
    var product4 = x[0].split("=")[1];

    document.getElementById("WarenkorbAnzahl").innerHTML = parseInt(product1) + parseInt(product2) + parseInt(product3) + parseInt(product4);
}