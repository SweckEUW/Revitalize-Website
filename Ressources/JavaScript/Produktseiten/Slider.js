//Script um das Bilder Karusell auf der Produktseite zu realisieren

//Liste mit allen Bildern im Karusell
var x = document.getElementsByClassName("TitelBildSlide");

//gibt an welches Bild gerade gezeigt wird das erste Bild wird zufällig gezeigt
var currentImage = Math.floor(Math.random()*x.length);

//setzte das erste bild auf sichtbar
x[currentImage].style.opacity =1;

//nach einer halben Sekunde den TitelText einblenden
setTimeout(function() { 
    document.getElementsByClassName("Titeltext")[0].style.opacity = "1";
}, 500);

//alle 10 Sekunden soll das Bild automatisch gewechselt werden
setInterval(slide, 10000);

//ändert das Bild im Karusell
//wenn n=1 bewgt man sich im Karusell einen Schritt nach vorne und bei n=-1 einen Schritt zurück 
function slide(n=1){
    
    //altes Bild transparent setzen
    x[currentImage].style.opacity = 0;

    currentImage+=n;
    
   //Ausnahmefälle abfangen
    if(currentImage==x.length)
        currentImage=0;

    if(currentImage<0)
        currentImage=x.length-1;

    //Das Neue Bild sichtbar setzen
    x[currentImage].style.opacity = 1;
}

//Diese Funktionen färben die Pfeile um wenn man sich auf der Linken seite des Bildes befindet bzw. auf der rechten.
//so muss man nicht direkt über den Pfeil hovern, was der user experience zugute kommt
function rightHover(){
    document.getElementById("rightHover").style.color = "#27734f";
}

function rightLeave(){
    document.getElementById("rightHover").style.color = "white";
}

function leftHover(){
    document.getElementById("leftHover").style.color = "#27734f";
}

function leftLeave(){
    document.getElementById("leftHover").style.color = "white";
}