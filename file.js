/**
 * Onodwa Siyotula
 * 220087016
 * 
 */

let username = document.getElementById('name');
let password = document.getElementById('password');
let submit = document.getElementById('submit');
let attempts = 3;

let obj = {"users": [
        {"username": "Josh", "password": "1234"},
        {"username": "Caleb", "password": "bas234"},
        {"username": "Viggo", "password": "ero123"}
    ]
}

function validate() {
    event.preventDefault();

    if (username.value == "" || username.value == null || password.value == "" || password.value == null) {
        alert("Required input empty");
        return false;
    } else {

        for(let i = 0; i < obj.users.length; i++){
            if (username.value == obj.users[i].username && password.value == obj.users[i].password) {
                alert("successful!");
                sessionStorage.setItem('personName', username.value);
                window.location = "successful.html";
                return false;
            } else if(i >= obj.users.length -1) {
                attempts--;
                alert("You have " + attempts + " more attempts!");
                if (attempts == 0) {
                    alert("You are unable to make anymore attempts");
                    username.disabled = true;
                    password.disabled = true;
                    submit.disabled = true;
                    return false;
                }
            }
        }
    }
}

let uname = document.querySelector('.uname');
let code = document.querySelector('.code');
let emptyObj = [];

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let grade = document.getElementById('grd');
let setName = document.getElementById('setName');
let setPassword = document.getElementById('setPassword');


function signMember() {
    event.preventDefault();

    if (fname.value == "" || fname.value == null || lname.value == "" || lname.value == null || grade.value == "" || grade.value == null || setName.value == "" || setName.value == null || setPassword.value == "" || setPassword.value == null) {
        alert("missinng fields");
        return false;
    } else {
        let newObj = {"username":setName.value, "password":setPassword.value};
        emptyObj.push(newObj);

        alert("Sign up was successful! Please Login to continue");

        sessionStorage.setItem('fname', fname.value); 
        sessionStorage.setItem('lname', lname.value);
        sessionStorage.setItem('grade', grade.value);

        sessionStorage.setItem('updatedObject', JSON.stringify(emptyObj));
        

        console.log(emptyObj);
        window.location.href = "index.html";
    
        // return false;
    }
}

var markArray = [];
var addVar = document.getElementById('subjectInput');
var getVal = document.getElementById('subject');
var mark = document.getElementById('mark');
var flag = document.getElementById('flag');
var sum = 0;
var counter = 0;
var average = 0;

function addModule() {
    event.preventDefault();

    if (addVar.value == null || addVar.value == "" || mark.value == null || mark.value == "") {
        addVar.style.borderColor = "red";
        addVar.style.setProperty("--c", "red");
        mark.style.borderColor = "red";
        mark.style.setProperty("--c", "red");
        
    } else if(mark.value > 100 || mark.value < 0) {
        flag.innerHTML = "Mark must be between 0 and 100";
    } else {
        if (getVal.innerHTML == "None") {
            getVal.innerHTML = '- ' + addVar.value + ' ' + mark.value + '%';
        } else {
            getVal.innerHTML += '<br> - ' + addVar.value + ' ' + mark.value + '%';
        }
        markArray.push(parseInt(mark.value));
        sum += parseInt(mark.value);
        counter++;
        average = sum / counter;
        console.log(markArray)
        console.log("The sum of these numbers is " + sum)
        console.log("Your average mark is " + average)
        document.getElementById('average').innerHTML = "Your average mark is " + average;
    }

}


function deleteModule() {
    event.preventDefault();
    getVal.innerHTML = "";
    markArray.length = 0;
    sum = 0;
    average = 0;
    counter = 0;
    document.getElementById('average').innerHTML = `Your average mark is ${average}`
}

