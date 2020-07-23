function kredit () {
    deactivateAll();
    var buttons = document.getElementsByClassName("kredit_button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("active");
    }
    hideAll ();
    activateValidation();
    document.getElementById("kreditkarte").style.display = "block";
}

function paypal () {
    deactivateAll();
    var buttons = document.getElementsByClassName("paypal_button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("active");
    }
    hideAll ();
    document.getElementById("paypal").style.display = "block";
}

function rechnung () {
    deactivateAll();
    var buttons = document.getElementsByClassName("rechnung_button");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("active");
    }
    hideAll ();
    document.getElementById("rechnung").style.display = "block";
}

function deactivateValidation () {
    var inputs = document.getElementsByClassName("novalid");
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].required = false;
    }
}

function activateValidation () {
    var inputs = document.getElementsByClassName("novalid");
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].required=true;
    }
}

function deactivateAll () {
    var buttons = document.getElementsByClassName("small_button");

    for(var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) {buttons[i].classList.remove("active")};
    }

    deactivateValidation();
}

function hideAll () {
    document.getElementById("kreditkarte").style.display = "none";
    document.getElementById("paypal").style.display = "none";
    document.getElementById("rechnung").style.display = "none";
}

function checkPLZ () {
    var plz_content = document.getElementById("plz").value;

    if(plz_content.length > 5 || plz_content.length < 5) {
        document.getElementById("plz_warning").style.visibility = "visible";
    }
    else if (plz_content.includes("e") || plz_content.includes("E") ||
        plz_content.includes(",") || plz_content.includes("/") ||
        plz_content.includes(".") || plz_content.includes("+")) {
        document.getElementById("plz_warning").style.visibility = "visible";
    }
    else if (plz_content.match("[0-9]{5}")){
        document.getElementById("plz_warning").style.visibility = "hidden";
    }
}