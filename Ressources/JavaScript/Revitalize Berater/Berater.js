var currentInput = 0; //gibt an wo man sich im Berater befindet (zwischen 0 und 5 -> 6 schrittte im Navigator)

//Pfeil nach links entfernen, da der Nutzer bei Schritt 0 nicht zurück klicken kann
document.getElementById("BeraterInput").getElementsByTagName("div")[0].style.opacity ="0"; 
document.getElementById("BeraterInput").getElementsByTagName("div")[0].style.pointerEvents = "none";

//farbe des ersten kreieses ändern um anzuzeigen das man bei Schritt 0 ist im Berater
document.getElementById("circles").getElementsByTagName("li")[0].style.backgroundColor = "#27734f";


//Diese Funktion wird ausgeführt wenn der benutzer auf einen der Pfeile (links oder rechts) klickt
//wenn n=1 bewgt man sich im Berater einen Schritt nach vorne und bei n=-1 einen Schritt zurück 
function moveBerater(n=1){
    //abhängig von n ändern der Position im Berater
    currentInput+=n;

    changeFortschritt(); //Farbe des Kreies ändern bei welchem Schritt man sich befindet

    changeFrage(); //Frage, Einheit und Input Feld ändern

    //Feil nach links verschwinden lassen, wenn man sich bei Schritt 0 befindet (=erster Schritt)
    if(currentInput==0){
        document.getElementById("BeraterInput").getElementsByTagName("div")[0].style.opacity = "0";
        document.getElementById("BeraterInput").getElementsByTagName("div")[0].style.pointerEvents = "none";
    }else{
        document.getElementById("BeraterInput").getElementsByTagName("div")[0].style.opacity = "1"; 
        document.getElementById("BeraterInput").getElementsByTagName("div")[0].style.pointerEvents = "auto";
    }

    //Feil nach rechts verschwinden lassen, wenn man sich bei Schritt 5 befindet (=letzter Schritt)
    if(currentInput==5)
        document.getElementById("BeraterInput").getElementsByTagName("div")[2].style.display = "none"; 
    else
        document.getElementById("BeraterInput").getElementsByTagName("div")[2].style.display = "inline-block"; 
}

//färbt den Kreis mit der nummer des aktuellen Schrittes im Berater in einen dunkelen Ton um zu zeigen wie weit man im Berater ist
function changeFortschritt(){
    //liste mit allen Kreisen
    var x = document.getElementById("circles").getElementsByTagName("li");

    //Farbe des vorherigen Kreises zurück auf die normale Fabe ändern (wenn man einen Schritt nach vorne geht)
    if(currentInput!=0) 
        x[currentInput-1].style.backgroundColor = "#43DEB9";
    
    //Farbe des aktuellen Kreises auf einen dunkelen Ton färben
    x[currentInput].style.backgroundColor = "#27734f";

    //Farbe des vorherigen Kreises zurück auf die normale Fabe ändern (wenn man einen Schritt zurück geht)
    if(currentInput<x.length-1)
        x[currentInput+1].style.backgroundColor = "#43DEB9";
}

//ändert die Frage sowie die Einheit und ggf. das Input Feld
function changeFrage(){
    var x = document.getElementById("BeraterFrage"); //Frage
    var y = document.getElementById("Einheit"); //Einheit
    if(currentInput==0){ //Schritt 0 = Frage nach dem Alter
        x.innerHTML = "Wie alt bist Du?";
        y.innerHTML = "Jahre";
    }

    if(currentInput==1){ //Schritt 1 = Frage nach der Größe
        x.innerHTML = "Wie groß bist Du?";
        y.innerHTML = "cm";
    }

    if(currentInput==2){ //Schritt 2 = Frage nach dem Gewicht
        x.innerHTML = "Wie viel wiegst du?"; 
        y.innerHTML = "kg";
        document.getElementById("InputFeld").innerHTML = `<input type="text">`; //wieder hinzufügen des input feldes sollte man zurück gehen
        var y = document.getElementById("Einheit").style.display = "block"; //Einheiten wieder anzeigen
    }

    if(currentInput==3){ //Schritt 3 = Frage nach der Ernährung durch 3 radio buttons
        x.innerHTML = "Wie ernährst du dich?"; 
        addButtons(); //hinzufügen der Buttons und entfernen der Einheit
    }
    
    if(currentInput==4){ //Schritt 4 = Frage nach dem persönlichen Ziel durch Drop-down menü
        x.innerHTML = "Was ist dein persönliches Ziel?"; 
        addDropDown(); //hinzufügen des drop-down menüs
    }
    
    if(currentInput==5){ //Schritt 5 = Anzeige des persönlichen ergebnisses (Text sowie Produkt empfehlung)
        x.innerHTML = "Dein persönliches Ergebnis:"; 
        showResult(); 
    }
}

//Zeigt einen text mit Tipps zum persönliche Ziele zu erreichen
function showResult(){
    document.getElementById("InputFeld").innerHTML = 
    `<p class="result">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
     ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
     magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.
     sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
     At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
    </p>`
}

//fügt 3 Radio buttons hinzu (3 Buttons für den Ernährungstypen: Omnivor, Vegetarisch, Vegan)
//dazu werden anklickbare Labels zu den Buttons hinzugefügt, die die user experience erhöhen
function addButtons(){
    document.getElementById("InputFeld").innerHTML =  
    `<label class="ErnährungsTypText"for="Omnivor">Omnivor</label> 
    <input class="ErnährungsTypButton" type="radio" id="Omnivor" name="Ernährung" value="Omnivor">
   
    <label class="ErnährungsTypText" for="Vegetarisch">Vegetarisch</label>
    <input class="ErnährungsTypButton" type="radio" id="Vegetarisch" name="Ernährung" value="Vegetarisch">

    <label class="ErnährungsTypText" for="Vegan">Vegan</label>
    <input class="ErnährungsTypButton" type="radio" id="Vegan" name="Ernährung" value="Vegan">`;

    var y = document.getElementById("Einheit").style.display = "none";
}

//fügt ein Drop-down menü hinzu mit mehereren Optionen zum persönlichen Ziel (z.B.Muskelaufbau, Fettreduktion)
function addDropDown(){
    document.getElementById("InputFeld").innerHTML = 
    `<select id="Ziel" name="Ziel">
        <option value="Fettreduktion">Fettreduktion</option>
        <option value="Muskelaufbau">Muskelaufbau</option>
        <option value="Leistungssteigerung">Leistungssteigerung</option>
        <option value="Ausdauersteigerung">Ausdauersteigerung</option>
    </select>`;
}