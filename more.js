/**
 * Onodwa Siyotula
 * 220087016
 * 
 */

// JSON DATA OF EACH QUESTION AND WEIGHT
let answer1 = [
    {"answer": "No", "weight": 0.7},
    {"answer": "Yes", "weight": 0.954}
]

let answer2 = [
    {"answer": "Never", "weight": 0.4},
    {"answer": "Sometimes", "weight": 0.7},
    {"answer": "Always", "weight": 0.94}
]

let probability = 0;
let q1WeightVar = 0;

// GET ANSWER OF QUESTION 1 FROM THE SELECT TAG IN SUCCESSFUL.HTML FILE
let getAnswerOfFirstQuestion = () => {
    event.preventDefault()
    return document.getElementById('select').value;
}

/**
 * CALCULATE THE PROBABILITY OF YOU FINISHING THE COURSE AND LOG THE RESULT IN 
 * THE CONSOLE FOR TESTING PURPOSES
 * 
 */ 

document.getElementById('result').addEventListener('click', (e) => {
    e.preventDefault()
    answer1.forEach((element, index, array) => {
        if (getAnswerOfFirstQuestion() == element.answer) {
            q1WeightVar = element.weight;
        }
    });

    probability = getChecked() * q1WeightVar * (average/100);
    console.log(`You have a ${probability * 100} chance of finishing this course`);
});

let q2WeightVar = 0;

// CHECKING IF RADIO BUTTON IS CHECKED, IF TRUE, SET THE 'Q2WEIGHTVAR' VARIABLE TO THE WEIGHT IN THE ARRAY OF OBJECTS
// WE THEN RETURN THE RESULT SO THAT THIS FUNCTION HOLDS A NUMBER WE CAN USE TO CALCULATE
let getChecked = () => {
    event.preventDefault()
    let quizQuestions = document.getElementsByName('school');
    
    for (let i = 0; i < quizQuestions.length; i++) {
        if (quizQuestions[i].checked) {
            q2WeightVar = answer2[i].weight;
            return q2WeightVar;
        }
    }
}

var result = document.getElementById('result');

/**
 * We get the button with an id of result and giving it an eventlistener of click
 * Since we have written code for active class in css yet the class doesn't exist, 
 * we will now give popup that class but only when we click on the get result button.
 * Then we display result.
 * 
 * On the second evenlistener, we remove that active class when we click on the dismiss button
 * with the popDown-btn id.
 */
result.addEventListener("click", () => {
    document.getElementsByClassName("popUp")[0].classList.add("active");
    document.querySelector('.description').innerHTML = `You have ${probability * 100}% chance of finishing this course`;
});

var popDown = document.getElementById('popDown-btn');

popDown.addEventListener("click", () => {
    document.getElementsByClassName("popUp")[0].classList.remove("active");
});

