
//fügt eine Sinus Welle auf ein Canvas element hinzu und animiert diese, das canvas element hat die selbe Größe wie das Bild element
//canvas1 = id des Canvas elements, auf das gezeichnet werden soll
//picture = id des img elements um größe des Canvas anzupassen
//color = Nummer (wenn color =1 dann ist die Welle Weiß, sonst ist die Welle in einem zufälligen Grün Ton)
function addWave(canvas1,picture,color){
    var canvas = canvas1;

    //canvas größe anpassen
    canvas.width = picture.width;
    canvas.height = picture.height;

    var k = window.innerWidth/picture.width*25;

    document.getElementById(canvas1.id).style.width =k+"vw";
    
    var ctx = canvas.getContext("2d");

    //zufällige amplitude, Frequenz, phase, geschwindigkeit sowie Farbe um zufällige Wellen zu generieren
    var resolution = 300; //ammount of lines
    var amplitude = 4+Math.random()*(25-4);  //height of function
    var frequency = 1.2+Math.random()*(1.5-1.2);  //width of function
    var speed = 0.001+Math.random()*(0.005-0.001); //speed of the wave
    var yOffset = 3/8*picture.height;
    var step = Math.random()*50;


    //set up random rgba colors based on the Coporate color (61,222,154)
    var colorOffset = 0.7; //ammount of deviation from the original color (0=max deviation, 1= no deviation)
    var minTransparency = 0.3; //min value for transparency
    var maxTransparency = 0.8; //max value for transparency

    var a = minTransparency+Math.random()*(maxTransparency-minTransparency);
    var r = Math.floor(61 * (colorOffset+Math.random()*(1-colorOffset)));
    var g = Math.floor(222 * (colorOffset+Math.random()*(1-colorOffset)));
    var b = Math.floor(154 * (colorOffset+Math.random()*(1-colorOffset)));

    if(color==1){
        r=255;
        g=255;
        b=255;
        a=1;
    }
    //set fill of wave with random colors
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";

    //draws the actual 2d surface
    function drawWave(){
        //clear canvas
        ctx.clearRect(0,0,canvas.width,canvas.height);

        step+=speed;

        ctx.beginPath();
        ctx.moveTo(0,canvas.height/2); //auf der Mitte des Canvases anfangen

        var x,y; //punkt auf modifizierter Sinus kurve

        for(var i = 0; i<resolution ; i++){

            //Phase,Amplitude und Frequenz auf Sinus Funktion anwenden und mit yOffset nach unten verschieben damit kurve immer im unteren Bereich des Canvases gezeichnet wird
            y = Math.sin(i*2*Math.PI/resolution*frequency+step)*amplitude+canvas.height/2+yOffset;   
            
            //Länge der Sinus Funktion soll immer den gesamten Canvas annehmen
            x = i/resolution*canvas.width;

            //Linie zum errechneten Punkt zeichnen
            ctx.lineTo(x, y);       
        }
        //außerhalb des Canvas linien verbinden damit eine Form entsteht, die wir einfärben können
        ctx.lineTo(canvas.width, y);  
        ctx.lineTo(canvas.width, canvas.height);  
        ctx.lineTo(0, canvas.height);  
        ctx.fill();
    }
    //aufruf der Zeichnung alle 17 ms um flüssige Animation zu erzeugen
    setInterval(drawWave, 17);
}


//Funktioniert wie die normale Welle, nur das die Wellle nocheinmal gespiegelt wird um eine große Welle darzustellen
//wenn solide = false keine tranzparens auf dieser Welle
function addBigWave(canvas,solid = true){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.45;

    document.getElementById(canvas.id).style.width = 100+"vw";
    document.getElementById(canvas.id).style.height = 0.45*50+"vw";

    var ctx = canvas.getContext("2d");

    var resolution = 300; //ammount of lines
    var amplitude = 10+Math.random()*(25-10);  //height of function
    var frequency = 1.2+Math.random()*(3-1.2);  //width of function
    var speed = 0.001+Math.random()*(0.005-0.001); //speed of the wave
    var yOffset = canvas.height/2;
    var step = Math.random()*50;

    //set up random rgba colors based on the Coporate color (61,222,154)
    var colorOffset = 0.7; //ammount of deviation from the original color (0=max deviation, 1= no deviation)
    var minTransparency = 0.3; //min value for transparency
    var maxTransparency = 0.8; //max value for transparency

    var a = minTransparency+Math.random()*(maxTransparency-minTransparency);
    var r = Math.floor(61 * (colorOffset+Math.random()*(1-colorOffset)));
    var g = Math.floor(222 * (colorOffset+Math.random()*(1-colorOffset)));
    var b = Math.floor(154 * (colorOffset+Math.random()*(1-colorOffset)));

    //set fill of wave with random colors
    ctx.fillStyle = "rgba("+r+","+g+","+b+","+a+")";
    
    if(solid==false)
        ctx.fillStyle = "rgba("+r+","+g+","+b+","+1+")";
        
    //draws the actual 2d surface
    function drawWave(){
        step+=speed;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        //normale Welle
        drawWave1();
        //gespiegelte Welle
        drawWave2();
    }

    function drawWave1(){   
        ctx.beginPath();
        ctx.moveTo(0,canvas.height/2);

        var x;
        var y;
        for(var i = 0; i<resolution ; i++){
            y = Math.sin(i*2*Math.PI/resolution*frequency+step)*amplitude+yOffset-canvas.height/3;           
            x = i/resolution*canvas.width;
            ctx.lineTo(x, y);      
        }
        ctx.lineTo(canvas.width, canvas.height/2);  
        ctx.lineTo(0, canvas.height/2);  
        ctx.closePath();
        ctx.fill();
    }

    function drawWave2(){
        ctx.beginPath();
        ctx.moveTo(0,canvas.height/2);

        var x;
        var y;
        for(var i = 0; i<resolution ; i++){
            y = Math.sin(i*2*Math.PI/resolution*frequency+step)*amplitude+yOffset+canvas.height/3;           
            x = i/resolution*canvas.width;
            ctx.lineTo(x, y);      
        }

        ctx.lineTo(canvas.width, canvas.height/2);  
        ctx.lineTo(0, canvas.height/2);  
        ctx.closePath();
        ctx.fill();
    }

    setInterval(drawWave, 17);
}
