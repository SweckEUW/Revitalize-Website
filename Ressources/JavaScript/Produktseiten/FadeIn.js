window.addEventListener('scroll', FadeIn);

//setzt die Sichbarkeit von Bereichen der Seite auf sichtbar wenn man sich dort befindet, um einen Fade in effekt zu erzeugen
function FadeIn(){
    beschreibung();
    inhaltsstoffe();
    nährwert();
    lieferanten();
}

//Beschreibungs Bereich einblenden
function beschreibung(){
    if(this.scrollY>800){
        document.getElementById("Produktbeschreibung").style.opacity = "1";
    }
}

//inhaltsstoffe Bereich einblenden
function inhaltsstoffe(){
    if(this.scrollY>1200){
        document.getElementById("Inhaltsstoffe").getElementsByTagName("h2")[0].style.opacity = "1";
        setTimeout(function() { 
            document.getElementById("Inhaltsstoffe").getElementsByTagName("li")[0].style.opacity = "1";
        }, 500);
        setTimeout(function() { 
            document.getElementById("Inhaltsstoffe").getElementsByTagName("li")[1].style.opacity = "1";
        }, 1000);
        setTimeout(function() { 
            document.getElementById("Inhaltsstoffe").getElementsByTagName("li")[2].style.opacity = "1";
        }, 1500);
    }
}

//nährwert Bereich einblenden
function nährwert(){
    if(this.scrollY> 2054){
        document.getElementById("Nährwertangaben").getElementsByTagName("h2")[0].style.opacity = "1";
        setTimeout(function() { 
            document.getElementById("Nährwertangaben").getElementsByTagName("h3")[0].style.opacity = "1";
            document.getElementById("Nährwertangaben").getElementsByTagName("input")[0].style.opacity = "0.8";
        }, 500);
        setTimeout(function() { 
            document.getElementById("Nährwertangaben").getElementsByTagName("table")[0].style.opacity = "1";
        }, 1000);
        setTimeout(function() { 
            document.getElementById("Nährwertangaben").getElementsByTagName("table")[0].getElementsByTagName("tr")[0].style.opacity = "1";
        }, 1500);
        setTimeout(function() { 
            document.getElementById("Nährwertangaben").getElementsByTagName("table")[0].getElementsByTagName("tr")[1].style.opacity = "1";
        }, 2000);
        setTimeout(function() { 
            document.getElementById("Nährwertangaben").getElementsByTagName("table")[0].getElementsByTagName("tr")[2].style.opacity = "1";
        }, 2500);
        setTimeout(function() { 
            document.getElementById("Nährwertangaben").getElementsByTagName("table")[0].getElementsByTagName("tr")[3].style.opacity = "1";
        }, 3000);
    } 
}


//lieferanten Bereich einblenden
function lieferanten(){
    if(this.scrollY> 3304){
        document.getElementById("Lieferanten").getElementsByTagName("h2")[0].style.opacity = "1";
        setTimeout(function() { 
            document.getElementById("Lieferanten").getElementsByTagName("img")[0].style.opacity = "1";
        }, 500);
        setTimeout(function() { 
            document.getElementById("Lieferanten").getElementsByClassName("LieferantenText")[0].style.opacity = "1";
            document.getElementById("Lieferanten").getElementsByTagName("canvas")[0].style.opacity = "1";
        }, 1000);
    }
}
    