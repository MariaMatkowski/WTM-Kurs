


var inputArray = [];

function init () {
    if (localStorage.userRecord) {
        inputArray = JSON.parse(localStorage.userRecord);  //changed from json notation to array
        for(var i=0; i < inputArray.length; i++){
           /*var name = inputArray[i].name;
            var email = inputArray[i].email;
            var gender = inputArray[i].gender;
            var interests = inputArray[i].interests;
            var message = inputArray[i].message;*/
            prepareTableCell(inputArray[i].name, inputArray[i].email, inputArray[i].gender, inputArray[i].interests, inputArray[i].message);
        }
    }
}

function onSubmitPressed() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var interests = document.getElementById("interests").value;
    var message = document.getElementById("message").value;


var userObj = {name:"name", email:"email", gender:"gender", interests:"interests", message:"message"};
inputArray.push(userObj);                                //adds a new element at the end of an array

localStorage.userRecord = JSON.stringify(inputArray);   //Array converted to string

prepareTableCell(name, email, gender, interests, message);

document.getElementById("name").value= "";
document.getElementById("email").value= "";
document.getElementById("gender").value= "";
document.getElementById("interests").value= "";
document.getElementById("message").value= "";

}

function prepareTableCell(name, email, gender, interests, message) {
    var table = document.getElementById("table");
    var row = table.insertRow();
    var nameCell = row.insertCell(0);
    var emailCell = row.insertCell(1);
    var genderCell = row.insertCell(2);
    var interestsCell = row.insertCell(3);
    var messageCell = row.insertCell(4);    

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;
    genderCell.innerHTML = gender;
    interestsCell.innerHTML = interests;
    messageCell.innerHTML = message;
}