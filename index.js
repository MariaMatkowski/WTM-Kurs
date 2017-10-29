const flat = require('./flat')
const job = require('./job')
const credit = require('./credit')


var temps = [20,18,26,30]

var newTemps = temps.map(function(tempF){
    return Math.round (tempF * (9/5) +32);
})

console.log(temps);
console.log(newTemps);

/*
const Traumwohnung = new flat("Mitte", "75", 250000);
const alternativWohnung = new flat("Charlottenburg", "65", 260000);

const possibleFlats = [Traumwohnung, alternativWohnung];

Database.save(possibleFlats);

console.log(Traumwohnung);

var total=0, count=1;
while (count<=10) {
    total += count;
    count += 1; 
}

console.log(total);
*/