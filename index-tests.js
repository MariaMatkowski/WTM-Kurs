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
    alert( nr + ') ' + zahl + ' ist zu klein<br>');
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

/*----------------------------------------------------------------------------------------------------- */