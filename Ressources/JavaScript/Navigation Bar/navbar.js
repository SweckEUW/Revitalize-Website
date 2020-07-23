//Dieser Codeblock wird beim Scrollen aufgerufen.
window.onscroll = () => {

    //Diese Variable enthält die gesamte Navbar.
    const nav = document.querySelector('nav');

    //Diese Variable enthält eine Liste mir allen Navlinks der Navbar.
    let navlinks = document.getElementsByClassName('navlinks');

    //Diese Variable enthält eine Liste mit beiden Icons für den Warenkorb, den Weißen und den Grünen.
    let shoppingCart = document.getElementsByClassName('shopping-cart-icon');

    //Diese Variable enthält den Kreis, der die Anzahl an Produkten im Warenkorb angibt.
    let amount = document.getElementsByClassName("amount-of-orders");

    //Die If-Bedingung gilt dann, wenn der Scrollbalken sich unter oder gleich 10 Einheiten von oben entfernt hat.
    if  (this.scrollY <= 10)
    {
        //In dem Falle wird der Navbar die .scroll-Klasse entzogen, sie wird wieder transparent.
        nav.className = '';

        //Der weiße Einkaufswagen verschwindet und der Grüne erscheint.
        shoppingCart[1].classList.remove("nonactive");
        shoppingCart[0].classList.add("nonactive");

        //Der Kreis wird grün, die Zahl darin weiß.
        amount[0].classList.remove ("amount-color-change");

        //Die For-Loop sorgt dafür, dass alle Navlinks die ".scroller"-Klasse verlieren und dadurch wieder grün werden.
        for (let i = 0; i < navlinks.length; i++)
        {
            navlinks[i].classList.remove("scroller");
        }
    }
    else
    {
        //In dem Falle wird der Navbar die .scroll-Klasse hinzugefügt, sie wird grün.
        nav.className = 'scroll';

        //Der grüne Einkaufswagen verschwindet und der Weiße erscheint.
        shoppingCart[0].classList.remove("nonactive");
        shoppingCart[1].classList.add("nonactive");

        //Der Kreis wird weiß, die Zahl darin grün.
        amount[0].classList.add ("amount-color-change");

        //Die For-Loop sorgt dafür, dass alle Navlinks die ".scroller"-Klasse bekommen und dadurch weiß werden.
        for (let i = 0; i < navlinks.length; i++)
        {
            navlinks[i].classList.add("scroller");
        }
    }
};
