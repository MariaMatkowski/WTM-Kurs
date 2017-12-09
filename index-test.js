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
document.cookie="dagewesen=ja; expires=" + datum.toGMTString(); //Cookie schreiben - "expires" für IE, moderne Browser nutzen "max-age"


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
        var decodedCookie = decodeURIComponent(document.cookie);   //siehe *, um Cookies mit Special-Charakter ($) zu handeln
        var ca = decodedCookie.split(';');                   //in ein Array namens ca splitten
        for(var i = 0; i <ca.length; i++) {             // loop through ca array      
            var c = ca[i];                               // read out each value c
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {                         //if cookie is found
                return c.substring(name.length, c.length);       // return value of cookie
            }
        }
        return "";
    } 

// * Encoded URI: https%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab
// >>> Decoded: https://w3schools.com/my test.asp?name=ståle&car=saab  

// setCookie('test','1');
//getCookie('test');


//check if cookie is set. Yes > display username; No > prompt and asks for Name.
function checkCookie() {
        var username = getCookie("username");
        if (username != "") {
            alert("Welcome again " + username);
        } else {
            username = prompt("Please enter your name:", "");
            if (username != "" && username != null) {
                setCookie("username", username, 365);
            }
        }
    } 

/*----------------------------- cookieApp.html / https://www.youtube.com/watch?v=5ttpghXjG0g -----------------------*/
// hat nicht funktioniert!!!
/*<!Doctype html> 
<html>
    <head>
        <script> */

        var myCookies = {};

        function saveCookies() 
        {
            myCookies["_user"] = document.getElementById("user").value;
            myCookies["_uage"] = document.getElementById("age").value;
            //start reusable code
            document.cookie = "";   //cookie leeren
            var expires = new Date(Date.now()+60*1000).toString();  //60 Sek.
            var cookieString = "";             //to store each cookie
            for (var key in myCookies)
                { 
                    cookieString = key + "=" + myCookies[key] +";"+expires+";";    //create cookiestring
                    document.cookie = cookieString;   //loop oder each value save string out to the document
                }
            //end reusable code
            document.getElementById("out").innerHTML=document.cookie;
        }

        function loadCookies()
        {
            //start reusable code
            myCookies = {};           //array
            var kv = document.cookie.split(";");  //kv = keyvalue
            for (var id in kv)              //id is key in pairs
            {
                var cookie = kv[id].split("=");   //split by = sign    > 0 is name, 1 is value
                myCookie[cookie[0].trim()] = cookie[1];
            }
            //end reusable code
            document.getElementById("user").value = myCookies["_user"];
            document.getElementById("age").value =  myCookies["_uage"];

        }


        /*
        </script>
    </head>

    <body>
    User:<input type="text" id="user">
    Age:<input type="text" id="age">
    <button onclick="saveCookies">Save to Cookies </button>
    <button onclick="loadCookies">Load from Cookies </button>
    <p id="out"></p> 
    </body>
</html>*/




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

/* ----------- Cookie absichern, damit es nicht unterwegs von jemandem ausgelesen wird ----*/

Set-Cookie: CookieName=Wert; path=www.example.com/; HttpOnly; secure
//mit der genauen Pfadangabe werden subdomains ausgeschlossen...



/*---------------------------- Set & Get Cookie ---------------------------*/

/*html
<input type="button" value="save Cookie" onclick="setCookie()" />
<input type="button" value="get Cookie" onclick="getCookie()" />
<script>*/
    function setCookie() {
        document.cookie = "color=red; max-age= " + (60*60*24*30)+ ";"
    } 

    function getCookie() {
        if (document.cookie.length != 0)
          {
              var nameValueArray = document.cookie.split("=");
              alert("Name: " + nameValueArray[0] + " Value: " + nameValueArray[1]);
          }  
        else {
            alert("Cookie not found");
        } 
    }


//</script>


/*------------------ get actual date -----------------*/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

/*----------------- set UserID as custom variable using GA ---------------*/

/*Voraussetzung: 
- You don’t already have a custom variable (custom dimension in Universal) in the first variable slot.  If you do, just modify the slot # to the first available slot.
- add custom dimension in UA (if dimension1 exists, then change in Code "dimension1" to "dimensionX")
*/

/*create a cookie that
- attempt to read the _utma cookie value
- make sure that Cookie has data
- split the cookie value into an Array
- extract UserID from that array (3 slot in UA)
- assign user ID as a custom dimension in UA
- Fires an event with a category of ‘Custom Variables’ and action of ‘Set UserId’ with non-interaction set to true
*/

function readCookie(name) { 
  name += '='; 
  for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--) 
  if (!ca[i].indexOf(name)) 
    return ca[i].replace(name, ''); 
} 

var gaUserCookie = readCookie("_ga"); 

if (gaUserCookie != undefined) { 
  var cookieValues = gaUserCookie.split('.');
  if (cookieValues.length > 2 ) 
  { 
    var userId = cookieValues[2]; 
    try {
      ga('set', 'dimension1', userId);
      ga('send', 'event', 'Custom Variables', 'Set UserId', {'nonInteraction': 1});
    } catch(e) {}
   }  
}  


//in GTM script below with "custom HTML"-tag firing on all pages (or just landing pages)

/* What the below Code is doing:
- Creating a data layer macro to hold the userId value
- Add an Analytics tag to set the custom dimension in Universal Analytics passing in the userId macro you created above.  #
  You can use a tag type of event to do this. You’ll need to populate the event category and event action.  
  Be sure to set the non-interaction to ‘True’ to avoid artificially decreasing bounce rate.
- Set a firing rule for the tag of:  {{event}} equals setUserId
*/

//<script type="text/javascript"> 
function readCookie(name) { 
      name += '='; 
      for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--) 
      if (!ca[i].indexOf(name)) 
      return ca[i].replace(name, ''); 
    } 
    var gaUserCookie = readCookie("_ga"); 
    if (gaUserCookie != undefined)  { 
      var cookieValues = gaUserCookie.split('.');
      if (cookieValues.length > 2 )  { 
        var userId = cookieValues[2]; 
        dataLayer.push({'event':'setUserId', 'userId': userId}); 
      } 
    } 
//</script>

/*-------------- creating global objects with windows and variables as properties instead of global variables ------------*/

window.MyLib = {}; // global Object container; don't use var
MyLib.value = 1;
MyLib.increment = function() { MyLib.value++; }
MyLib.show = function() { alert(MyLib.value); }

MyLib.value=6;
MyLib.increment();
MyLib.show(); // alerts 7

/* ------- Implementing Data Layer------- */
var dataLayer = window.dataLayer = window.dataLayer || [];
dataLayer.push({
  key: 'value'
});

/* ------------- in HTML --------------*/



/* --- Order Tags in HEAD ------------*/ 

/*
- jQuery or Javascript used in Optimize experiments (min)
- DataLayer + Cookies Code  (initialization of variables needed for targeting)
- UA-Opt out
- "Hide Experiment-Flickering"-Code (GTM-Optimize ID)
- modified analytics code with Optimize plugin (GTM-Optimize ID)
- GTM (mit FB Pixel, Remarketing und Conversion Snippets)
- other JS, Trackers and Ad tags 
- Inspectlet / Fullstory... */



