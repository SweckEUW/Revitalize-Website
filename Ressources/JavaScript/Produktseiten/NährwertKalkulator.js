//errechnet basierend auf einem Inputfeld die Werte innerhalb der Nährwerttabelle

function KalkuliereNährwerte(){
    var value; //wert des Inputfeldes
    if(input.value.length == 0)
        value=0;
    else
        value= parseInt(input.value);

    //berechne Brennwert (kj und kcal)
    var brennwert1 = 975/100*value;
    brennwert1 = Math.round(brennwert1 * 100) / 100
    var brennwert2 = 229/100*value;
    brennwert2 = Math.round(brennwert2 * 100) / 100
    document.getElementById("Brennwert").innerHTML=brennwert1+"kj/"+brennwert2+"kcal";
    
    //berechne Fett
    var fett = 12.5/100*value;
    fett = Math.round(fett * 100) / 100
    document.getElementById("Fett").innerHTML=fett+"g";

    //berechne fettsäuren
    var fettsäuren = 5.4/100*value;
    fettsäuren = Math.round(fettsäuren * 100) / 100
    document.getElementById("Fettsäuren").innerHTML=fettsäuren+"g";

    //berechne kohlenhydrate
    var kohlenhydrate = 0.6/100*value;
    kohlenhydrate = Math.round(kohlenhydrate * 100) / 100
    document.getElementById("Kohlenhydrate").innerHTML=kohlenhydrate+"g";

    //berechne zucker
    var zucker = 0.6/100*value;
    zucker = Math.round(zucker * 100) / 100
    document.getElementById("Zucker").innerHTML=zucker+"g";

    //berechne salz
    var salz = 5.0/100*value;
    salz = Math.round(salz * 100) / 100
    document.getElementById("Salz").innerHTML=salz+"g";
}