// let header = document.createElement("header");
// header.textContent = "Magic 8 Ball Game by TL Williams";
// document.body.appendChild(header);


// Step 1-- Generate random number for answers with a function
// Multiply random choices by 8 to use 8 random choices for the Magic 8 Ball
// Remember the index begins at 0 so multiply by 7 for a total of 8 choices
function eightBall(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

// Or try function below:
// let randNum = Math.floor((Math.random()) * 7);

// function generateRandom() {
//     return randNum;
// }


// Step 2 -- Create the elements to be interactive on page for user (button and userAnswer)
let button = document.querySelector("button");
let userAnswer = document.querySelector("#userAnswer");
// Create click handler/event/target for button
button.addEventListener("click", function () {
    let randNum = eightBall(7);
    // alert(eightBall);
    let answerText;

    // Create switch cases for random answers to user questions using the button when clicked by user
    switch (randNum) {
        case 0:
            answerText = "I Think Not!";
            break;
        case 1:
            answerText = "Maybe or Maybe Not!";
            break;
        case 2:
            answerText = "It's a Possible Chance!";
            break;
        case 3:
            answerText = "As I See It, Yes!";
            break;
        case 4:
            answerText = "Ask Again Later!";
            break;
        case 5:
            answerText = "It's Best Not Tell!";
            break;
        case 6:
            answerText = "Concentrate and Ask Again!";
            break;
        case 7:
            answerText = "Most Definitely and Absolutely Not!";
            break;
        default:
            "Whatever You Like, so YES!!";
    }

    // Step 3 -- Display the answer inside the 8-Ball 
    userAnswer.innerHTML = answerText;
});


// Or try if-else-if statements for random answers to user (alternative)
// Use
// if (randNum === 0) {
//     answerText = "I Think Not!";
// } else if (randNum === 1) {
//     answerText = "Maybe or Maybe Not!";
// } else if (randNum === 2) {
//     answerText = "It's a Possible Chance!";
// } else if (randNum === 3) {
//     answerText = "As I See It, Yes!";
// } else if (randNum === 4) {
//     answerText = "Ask Again Later!";
// } else if (randNum === 5) {
//     answerText = "It's Best Not Tell!";
// } else if (randNum === 6) {
//     answerText = "Concentrate and Ask Again!";
// } else if (randNum === 7) {
//     answerText = "Most Definitely and Absolutely Not!";
// } else {
//     "Whatever You Like, so YES!!";
// }