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

/*----------------------------- Zahlenraten: Generator gibt Zahl 1 - 100 ------------------------------ */