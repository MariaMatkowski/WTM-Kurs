/*const flat = require('./flat')
const job = require('./job')
const credit = require('./credit')
const database = require('./database')
const databaseJob = require ('./database-job')

const Traumwohnung = new flat("Mitte", "75", 250000);
const Wohnung2 = new flat("Charlottenburg", "65", 260000);
const Wohnung3 = new flat ("Moabit", "56",200000);

const possibleFlats = [Traumwohnung, Wohnung2, Wohnung3];

database.save(possibleFlats, (err) => {
    console.log(err)
});

console.log("ich bin schneller")
*/ 

const fs = require ('fs');

/*
const textfiles = [1, 2, 3]    //array of objects of people etc.
    .map(number => `./files/${number}.txt`)  //map them to new strings
    .map(filename => fs.readFileSync (filename, 'utf8'))   //map them to function to get their properties

console.log(textfiles); */

fs.readFile('./files/3.txt', 'utf8', (err, contents) => console.log(contents))



/*const loadedFile = database.load();

const showFlat = loadedFile.map(flat.create);

showFlat[0].sayLocation();

//console.log(loadedFile[0].location);


const job1 = new job("Controller",30000);
const job2 = new job("Unternehmerin",20000);
const job3 = new job("Developer",60000);

const jobs = [job1,job2,job3];

databaseJob.save(jobs);
 
const loadedFile2 = databaseJob.load();

const showJob = job.create(loadedFile2[1]);

showJob.sayName();

//console.log(loadedFile2[1].jobTitle);
*/


/*
----------------

console.log(Traumwohnung);

var total=0, count=1;
while (count<=10) {
    total += count;
    count += 1; 
}

console.log(total);

---------

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
*/