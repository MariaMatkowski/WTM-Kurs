
var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json')
myRequest.onload = function () {
    var ourData = JSON.parse(myRequest.responseText);
    console.log(ourData[1])
};

myRequest.send();


//https://learnwebcode.github.io/json-example/animals-1.json