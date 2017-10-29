const flat = require('./flat')
const job = require('./job')
const credit = require('./credit')


var students = [
    {
        name: 'Steve D.',
        grade1: 84,
        grade2: 66
    },
    {
        name: 'Doris D.',
        grade1: 90,
        grade2: 55
    },
    {
        name: 'Steve D.',
        grade1: 77,
        grade2: 62
    }
]

var passingGrade = 70;

var results = students.map (function(student) {
    var average = (student.grade1 + student.grade2)/2;
    if (average > passingGrade) {
        return {
            name: student.name,
            passed:true
        };
    } else {
        return {
            name: student.name,
            passed:false
        };
    }
});

console.log(students);
console.log(results);

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