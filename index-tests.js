var a = 3;
var b = 5;
var grösser = (a>b)?a:b;
    document.write('a: ' + a + '<br>' + 'b: ' + b + '<br>');
    document.write('Die größere Zahl ist: ' + grösser);

/*----------------------Sage ein Land und erhalte die Hauptstadt-----------------------------*/

switch(land) {
        case "Italien":
            alert("Hauptstadt: Rom");
            break;
        case "Wales":
        case "England":
        case "Schottland":
            alert("Hauptstadt: London");
            break;
        default:
            alert("Hauptstadt des Staates ist uns nicht bekannt");
}

/* ----------------------------Tabelle mit For-Loop --------------------------------------*/

<head>
<style>
    table, td {
        border: 1px solid black
    }
</style>
</head>

<body>
<table>
    <script>
        for(var zeile=1; zeile<=5; zeile++)
        {
            document.write('<tr>');
            for(var spalte=1; spalte<=4; spalte++)
                document.write('<td> Zeile' + zeile + '/Spalte'+spalte + '</td>');
            document.write('</tr>');
        }
    </script>
</table>
</body>

/*----------------- Summe Random & while-loop -> Ergebisse auf 2 Kommastellen gerundet ----------------------*/

var summe = 0;
while(summe<5) {
    summe += Math.random();
    document.write(summe.toFixed(2) + "<br>");
}

/*----------------------------- Zahlenraten: Generator gibt Zahl 1 - 100 > Do...While - Loop :) ------------------------------ */

var zufall = Math.random()*100+1;
var zGanz = Math.floor(zufall);
var eingabe;
var zahl;
var nr=0;
var abbruch = false;

do 
{
    nr++;
    eingabe = prompt(nr + ') ' + 'Zahl zwischen 1 und 100 eingeben');
    
    //abgebrochen?
    if(eingabe==null) {
        abbruch=true;
        break;
    }
    
    //auswerten
    zahl = parseInt(eingabe);
    if (zahl< zGanz)
    alert( nr + ') ' + zahl + ' ist zu klein');
    else if (zahl > zGanz)
    alert( nr + ') ' + zahl + ' ist zu groß')
}
while (eingabe != zGanz);

//Ergebnis
if (abbruch)
    alert('Sie haben abgebrochen');
else 
    alert(nr + ') ' + zahl + ' ist richtig!'
    + 'Sie haben ' + nr + ' Versuche benötigt');

/*-------------------------------- Gedächtnisspiel Zahlen merken ----------------------------------------- */

var text;       //zufällige Ziffernfolgen
var laenge=4;    //gibt 3-stellige Zahlen aus, aktuelle Länge
var zaehler=0;  //wie häufig ist +1 bis 3 [>3Mal], welche Ziffernfolge (Nr.1, Nr.2 ...)
var eingabe;

//Ablauf
do
{
    //zaehler = wie viele Zahlen mit laengeX sollen ausgegeben werden 
    zaehler++
    if(zaehler>3) {
        laenge++;
        zaehler=1;
    }

//jede Einzelposition ist i
text = "";
    for (var i=1; i<laenge; i++) 
          text += Math.floor(Math.random()*10);
        alert('Ziffernfolge: ' + text);
        
        eingabe = prompt('Ihre Eingabe');
        document.write(text + '<br>')
}
while(eingabe==text)

//Bewertung
var ergebnis = laenge -1;
if(ergebnis<3) ergebnis=0; 
/*nur wenn Länge 3* hintereinander gemerkt wurde, zählt Ergebnis, sonst =0*/
document.write('Sie konnten sich ' + ergebnis + ' Ziffern merken');

/* ----------------------zeigt in welcher Zeile der Fehler ist---------------------*/

<head>
    <script>
        function fehlerbehandlung(fehler, datei, zeile)
        {
            alert('Fehler: ' + fehler + '\nDatei: ' + datei + '\nZeile: ' + zeile);
        }
    </script>
</head>
<body>
    <script>
        window.onerror = fehlerbehandlung;
        var y = 42;
        document.write( x + y );
    </script>
</body>

/*---------------------------Namen ausgeben----------------------*/

    var vorname = "Maia";
    var anweisung = "document.write('Herzlich Willkommen " + vorname + "<br>');";
    eval(anweisung);
    
//oder so

    var vorname = "Maia";
    var anweisung = "Herzlich Willkommen " + vorname + "<br>";
    document.write(anweisung);


/*------------------Objekteigenschaften ändern------------*/

//HTML
var wave = new Segelboot("blau-weiß",35,8);

document.write("Farbe: " + wave.farbe + "<br>Geschwindigkeit: " + wave.geschwindigkeit + "<br>Personen: " + wave.personen + "<br>");

wave.beschleunigen(15);
wave.lackieren("Blau");


document.write("Farbe: " + wave.farbe + "<br>Geschwindigkeit: " + wave.geschwindigkeit + "<br>Personen: " + wave.personen);


//JS
function Segelboot(f,g,h) {
    this.farbe = f;
    this.geschwindigkeit = g;
    this.personen = h;
    this.beschleunigen = bootBeschleunigen;
    this.lackieren = function (f) {this.farbe = f;};
    this.print = bootAusgeben;
}
    
function bootBeschleunigen(wert) {
    this.geschwindigkeit += wert;
}

function bootAusgeben() {
    return "Farbe: " + this.farbe + "Geschwindigkeit: " + this.geschwindigkeit + "Personen: " + this.personen;
}


/*--------------------- prüft ob Browser Cookies erlaubt ---------------------*/

document.cookie = "No1Cookie=42";

if(document.cookie.indexOf("No1Cookie=42") != -1)
    alert("Browser arbeitet mit Cookies");
else 
    alert("Browser arbeitet nicht mit Cookies");

var zeit = new Date(1);
document.cookie ="No1Cookie=; expires=" + zeit.toUTCString();

/*-------------------- Cookie erstellen -----------------------*/
//<body>
// ...
//<script>

document.cookie = "No1Cookie=21";

var zeit = new Date();
zeit.setTime(zeit.getTime()+24*60*60*1000);    //24 Stunden gültig
document.cookie = "No2Cookie=22;expires=" + zeit.toUTCString();  //Formatierung in UTC

document.cookie = "No3Cookie=23; path=/";  //cookie gilt für ganze domain und nicht nur für aktuellen index.js-Pfad
document.cookie = "No4Cookie=24; secure";   //gilt nur für verschlüsselte Verbindungen

//</script>
//</body>

/*------Datum gleich in Monaten angeben -------*/

datum=new Date; //datum wird zur neuen Instanz des Date-Objektes 
datum.setMonth(datum.getMonth()+3); //Monat wird um 3 erhöht -> in 3 Monaten läuft Cookie ab
document.cookie="dagewesen=ja; expires=" + datum.toGMTString(); //Cookie schreiben 


/*------ hm, vielleicht dynamische Cookie-Namensgebung? -------*/

document.cookie="name=" + document.forms[0].elements[2].value+ "; expires=" + datum.toGMTString() 

/*----------------------create a cookie with JS directly ---------------------*/

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"; 

//dann auslesen
var x = document.cookie;  //gibt alle cookies in einem String aus: c1 = value; c2 = value;  usw.

//löschen
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  //manchmal muss path angegeben werden

//find the value of specified cookie > write a JavaScript function that searches for the cookie value in the cookie string

/*------------------------------ Cookie mit jQuery schreiben  ----------------------------------*/

$.cookie("test", 1, {       //Name, value
    expires : 10,           //expires in 10 days
 
    path    : '/',          //The value of the path attribute of the cookie 
                            //(default: path of page that created the cookie).
 
    domain  : 'jquery.com',  //The value of the domain attribute of the cookie
                            //(default: domain of page that created the cookie).
 
    secure  : true          //If set to true the secure attribute of the cookie
                            //will be set and the cookie transmission will
                            //require a secure protocol (defaults to false).
 });

 //dann Cookie-Wert lesen:

 var cookieValue = $.cookie("test");

 var cookieValue = $.cookie("test", { path: '/foo' });    //wenn Cookie im Verzeichnis foo erstellt wurde 

 $.removeCookie('nameofcookie', { path: '/' });    //beim Löschen aus dem richtigen Pfad löschen!!!

 /* -------------------schöne JS StakeOverflow Funktionen um mehrere Cookies zu erstellen -----------------*/

 function setCookie(cname, cvalue, exdays) {
    var days = new Date();
    days.setTime(days.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + days.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
    var keyValue = document.cookie.match('(^|;) ?' + cname + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
//falls das oben nicht funktioniert:

function getCookie(cname) {              //Cookie-Name wird zum Parameter
        var name = cname + "=";           //Text-Variable, die nach C-Namen sucht
        var decodedCookie = decodeURIComponent(document.cookie);   //siehe *
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    } 

// * Encoded URI: https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab
// >>> Decoded: https://w3schools.com/my test.asp?name=ståle&car=saab  

// setCookie('test','1');
//getCookie('test');

/*--------------------- DataLayer event push code in Button Link !!! ----------------*/

<a href="#" name="button_1" onclick="dataLayer.push({'event':'button1-click'});" >Button 1</a>
//link now calls the push API  > combine with event tag


/*------------------ dynamically pushing data layer variables ------------*/ 
// e.g values entered or selected in a form, metadata of a video, color of product etc.
//replace the dlv in the data layer with:

dataLayer.push({
    'variable_name':'variable_value',    //eg {'color': 'red'}
    'conversion_value': 50,
    'event':'customize_car'
});  

//!!! pushing variable with same name will overwrite existing variable

/*----------------- PHP Cookie ---------*/

//<?php
add_action( 'init', 'setting_my_first_cookie' );

function setting_my_first_cookie() {

 setcookie( $v_username, $v_value, 30 * DAY_IN_SECONDS, COOKIEPATH, COOKIE_DOMAIN );

}
//?>

/*---------------------------------------------------------------------------*/