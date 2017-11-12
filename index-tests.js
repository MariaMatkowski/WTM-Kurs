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


/*------------------Objekteigenschaften------------*/

<script>
function Segelboot(f,g,h) {
    this.farbe = f;
    this.groesse = g;
    this.personen = h;
}
    
</script>

var Wave = new Segelboot("blau-weiß",15,8);

Wave.personen = 10;

document.write("Farbe: " + Wave.farbe + "<br>Größe: " + Wave.groesse + "<br>Personen: " +Wave.personen);

/*-------------------------------------------*/
