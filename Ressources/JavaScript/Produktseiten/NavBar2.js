
//Dieses script färbt die Navigationsbar um wenn der benutzer etwas nach unten scrollt
//Es klappt auch die Navigation Bar zusammen um nur die Produkt Navigation Bar anzuzeigen
//wenn der nutzer nach unten scrollt klappt siche die Navigation Bar zusammen
//wenn der nutzer nach oben scrollt wird die Navigation Bar wieder angezeigt

var lastScrollY =0; //speichert die letzte scroll position um zu überprüfen ob der nutzer nach oben oder nach unten gescrollt hat

window.onscroll = () => {
    changeNavBar();
    moveNavBar();
    changeActiveKategory();
};

//färbt den hintergrund grün und den Inhalt weiß wenn man etwas nach unten scrollt
//ist man am anfang der Seite ist der hintergrund weiß und der Inhalt grün
function changeNavBar(){
    var shoppingCart = document.getElementsByClassName('shopping-cart-icon');
    var z = document. getElementsByTagName("nav");
    var x = document.getElementsByClassName('navlinks');
    var y = document.getElementsByClassName("navlinks2");
    var w = document.getElementsByClassName("navlinks3");
    var a = document.getElementsByClassName(" amount-of-orders")[0];
    var b = document.getElementById("WarenkorbAnzahl");
    if(this.scrollY <= 100){ //hingergrund grün text weiß
        //Warenkorb icon
        shoppingCart[0].style.display = "none";                     //weiß
        shoppingCart[1].style.display = "inline-block";             //grün

        //Warenkorb anzahl der items
        a.style.backgroundColor = "#43DEB9";
        b.style.color = "white";

        w[0].style.color = "#2DE0C4";
        z[0].classList.remove("greenBackground");      
        y[0].classList.remove("InDenWarenkorb2");
        y[0].classList.add("InDenWarenkorb");

        for (var i = 0; i < x.length; i++)
            x[i].classList.remove("scroller");
        
    }else{ //hingergrund weiß text grün
        //Warenkorb icon
        shoppingCart[0].style.display = "inline-block";             //weiß
        shoppingCart[1].style.display = "none";                        //grün

        //Warenkorb anzahl der items
        a.style.backgroundColor = "white";
        b.style.color = "#43DEB9";

        w[0].style.color = "white";
        z[0].classList.add("greenBackground");
        y[0].classList.remove("InDenWarenkorb");
        y[0].classList.add("InDenWarenkorb2");
        
        for (var i = 0; i < x.length; i++)
            x[i].classList.add("scroller");
    }
}

//schiebt die naviagionbar zusammen wenn man nach unten bzw oben scrollt
function moveNavBar(){
    var z = document. getElementsByTagName("nav");

    if  (this.scrollY <= 100) //schieb navigationbar nach unten wenn man am anfang der Seite ist
        z[0].style.top = -this.scrollY.toString()+"px";
    else //schieb navigations bar nach oben wenn man runter scrollt
        z[0].style.top = "-5.5vw";
    
    //wenn nach oben gescrollt wird schieb die original Navigation bar nach unten
    if(lastScrollY-this.scrollY > 0) 
        z[0].style.top = "0";
    
    lastScrollY=this.scrollY;
}

//setzt die Untere Border der Kategorie auf weiß sollte man sich auf der Kategorie befinden
//z.B. ist man bei dem Bereich für Nährwerte wird der Nährwärte Text weiß unterstrichen
function changeActiveKategory(){
    //Beschreibung
   if (this.scrollY > 0) { 
    document.getElementById("NavBeschreibung").style.borderBottom = "solid white";
    document.getElementById("NavZutaten").style.borderBottom = "";
    document.getElementById("NavNährwerte").style.borderBottom = "";
    document.getElementById("NavLieferanten").style.borderBottom = "";
    }

    //Zutaten
    if (this.scrollY > 1590) {
        document.getElementById("NavBeschreibung").style.borderBottom = "";
        document.getElementById("NavZutaten").style.borderBottom = "solid white";
        document.getElementById("NavNährwerte").style.borderBottom = "";
        document.getElementById("NavLieferanten").style.borderBottom = "";
    }

    //Nährwerte
    if (this.scrollY > 2651) {
        document.getElementById("NavBeschreibung").style.borderBottom = "";
        document.getElementById("NavZutaten").style.borderBottom = "";
        document.getElementById("NavNährwerte").style.borderBottom = "solid white";
        document.getElementById("NavLieferanten").style.borderBottom = "";
    }

    //Lieferanten
    if (this.scrollY > 3490) {
        document.getElementById("NavBeschreibung").style.borderBottom = "";
        document.getElementById("NavZutaten").style.borderBottom = "";
        document.getElementById("NavNährwerte").style.borderBottom = "";
        document.getElementById("NavLieferanten").style.borderBottom = "solid white";
    }
}