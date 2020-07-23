/*Diese Funktion sorgt dafür, dass die Tabliste den richtigen Content anzeigt.
So wird zu Anfang das Produkt übergeben, welches angezeigt werden soll. Dies passiert mittels
der Variable "productName".
Zusätzlich wird "event" übergeben, womit das Element markiert wird, dessen Event Listener als letztes
ein Event getriggered hat.*/
function showProduct(event, productName) {

    //Diese Variable speichert alle möglichen Inhalte, die erscheinen können, in einer Liste.
    let productInfo = document.getElementsByClassName("product-tab-content");

    //Diese Variable speichert alle Buttons der linken Seite in einer Liste.
    let productLinks = document.getElementsByClassName("product-tab");

    /*Diese For-Loop geht alle Inhalte durch, die erscheinen können und sorgt zunächst dafür,
    dass ihr display-Wert auf "none" gesetzt wird und sie somit nicht angezeigt werden. */
    for (let i = 0; i < productInfo.length; i++) {
        productInfo[i].style.display = "none";
    }

    /* Diese For-loop entzieht allen Tabbuttons die Klasse "active". Dadurch sehen diese nicht mehr
    so aus, als wären sie gerade ausgewählt. */
    for (let v = 0; v < productLinks.length; v++) {
        productLinks[v].className = productLinks[v].className.replace(" active", "");
    }

    /* Dieser Befehl nimmt sich den in der Parameterliste angegebenen Inhaltsblock und setzt seinen display-Wert von
    "none" auf "bLock". So wird nur der ausgewählte Block sichtbar, der Rest bleibt durch die erste For-Loop unsichtbar. */
    document.getElementById(productName).style.display = "block";

    /* Hier wird auf die Anfangs übergebene "event"-Variable zugegriffen und die Klasse des Buttons um "active" erweitert,
    damit sich dieser verfärbt. */
    event.currentTarget.className += " active";
}

/* Diese Funktion sorgt dafür, dass das Objekt mit der in der Parameterliste übergebenen ID
von links nach rechts animiert wird. */
function slideIn(productName)
{
    //Diese Variable greift auf den Content über die ID zu, die in der Parameterliste übergeben wird.
    let productContent = document.getElementById(productName);

    //Hier wird diesem Content die "active"-Klasse zugewiesen, was die im CSS spezifizierte Animation triggert.
    productContent.className += " active";
}

