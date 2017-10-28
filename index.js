const flat = require('./flat')
const job = require('./job')
const credit = require('./credit')




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
