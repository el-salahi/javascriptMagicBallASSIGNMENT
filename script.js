const magBall = document.getElementById("magBall");
const displayOutputContainer = document.getElementById("displayOutputContainer");
const outputDefault = document.getElementById("outputDefault");
const outputTriangle = document.getElementById("outputTriangle");
const outputAnswer = document.getElementById("outputAnswer");
const inputQuestion = document.getElementById("inputQuestion");
const inputBtn = document.getElementById("inputBtn");
const retryBtn = document.getElementById("retryBtn");
const magBallAnswers = {
    affirmative: ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook Good", "Yes", "Signs Point to yes"],
    nonCommital: ["Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again"],
    negative: ["Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
}
let randomAnswer = "";

getAnswer = () => {
    const keysArray = Object.keys(magBallAnswers)
let ranKeyIndex = Math.floor(Math.random() * keysArray.length);
let ranKey = keysArray[ranKeyIndex];
let answersArray = magBallAnswers[ranKey];
let ranAnswerIndex = Math.floor(Math.random() * answersArray.length);
let ranAnswer = answersArray[ranAnswerIndex];
return ranAnswer
}

randomAnswer = getAnswer();

function startAnimations() {
    outputAnswer.innerText = randomAnswer;
    magBall.classList.add("shake");
    outputDefault.classList.add("hide");
    outputTriangle.classList.add("triangleDisplay");
    displayOutputContainer.classList.add("backgroundColor");
    outputAnswer.classList.add("textDisplay");
    retryBtn.classList.add("retryBtnDisplay");
}

magBall.addEventListener("click", startAnimations);

function retry() {
    randomAnswer = getAnswer();
    magBall.classList.toggle("shake");
    outputDefault.classList.toggle("hide");
    outputTriangle.classList.toggle("triangleDisplay");
    displayOutputContainer.classList.toggle("backgroundColor");
    outputAnswer.classList.toggle("textDisplay");
    retryBtn.classList.toggle("retryBtnDisplay");
    let clearInput = inputQuestion.value = ""; 
}

retryBtn.addEventListener("click", retry);






