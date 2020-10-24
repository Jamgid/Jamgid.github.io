//Global variables
var startButton = document.querySelector("#start-btn");
var nextButton = document.querySelector("#next-btn");
var submitButton = document.querySelector("#submit-btn");
var highscores = document.querySelector(".highscores");
var scores = document.querySelector(".scores");
var names = document.querySelector(".name-input");
var score = document.querySelector(".score-input")
var questionContainer = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerElement = document.querySelector("#answer-buttons");
var randomQuestions, currentQuestionIndex;
var storageContent = [];

//Button event listeners
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", setup);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});
//Calls on the setNextQuestion function and starts the quiz
function startQuiz() {
startButton.classList.add("hide");
randomQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainer.classList.remove("hide");
setNextQuestion();
}
//calls reset function and picks a new one
function setNextQuestion() {
    reset()
showQuestion(randomQuestions[currentQuestionIndex]);

}
//puts questions on the page
function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("button");
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerElement.appendChild(button)
    });
}
//clears the previous questions and answers as well as the next button until an answer is chosen
function reset() {
    nextButton.classList.add("hide")
    while (answerElement.firstChild) {
        answerElement.removeChild
        (answerElement.firstChild)
    }
}
//function for next button to go through questions array or end quiz when finished
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    } else {
    startButton.innerHTML = "Restart"
    startButton.classList.remove("hide")
    submitButton.classList.remove("hide")
    highscores.classList.remove("hide")
    scores.classList.remove("hide")
    names.classList.remove("hide")
    score.classList.remove("hide")
    }
}
//change button color to indicate the correct/incorrect answers
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("incorrect")
    }
}
//Clear button color when you go to next question
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("incorrect")
}

var counter = 60;
//Timer
function setup(){

    function timeIt() {
        
        counter--;
      
        document.querySelector("#timer").innerHTML = counter;

        if (counter === 0) {
            clearInterval(interval);
            alert("Time's up");
        }

    }

    var interval = setInterval(timeIt, 1000);
    

    
}

submitButton.addEventListener("click", submit);
//Take in key and value to local storage
function submit() {
    
    var key = names.value;
    
    var value = score.value;

    if (key && value) {
        var hscore = JSON.parse(localStorage.getItem("hscores")) || []
        var x = {
            name: key,
            score: value
        }
        hscore.push(x)

        localStorage.setItem("hscores", JSON.stringify(hscore));

        scores.textContent = JSON.stringify(hscore[0].name) + ": " + JSON.stringify(hscore[0].score)
    
        for (let i = 0; i < hscore.length; i++) {
            //P tag to store each one of the textCOntent of the user score
            scores.textContent = JSON.stringify(hscore[i].name) + ": " + JSON.stringify(hscore[i].score)

            //append that p tag to scores
            
            //scores.innerHTML += `${i+1}- ${key}: ${JSON.stringify(value)}<br/>`;
        }
    }
};


//Display scores(not displaying right but shows in console)



//Questions array
var questions = [
    {
        question: "What color is the sky?",
        answers: [
            { text: "Red", correct: false },
            { text: "Blue", correct: true },
            { text: "Green", correct: false },
            { text: "Purple", correct: false }
        ]
    },
    {
        question: "What is the captial of Michigan?",
        answers: [
            { text: "Lansing", correct: true },
            { text: "Detroit", correct: false },
            { text: "Ann Arbor", correct: false },
            { text: "Grand Rapids", correct: false }
        ]
    },
    {
        question: "How many licks does it take to get the the tootsie roll center of a tootsie pop?",
        answers: [
            { text: "1", correct: false },
            { text: "3", correct: false },
            { text: "1,000,000", correct: false },
            { text: "The world may never know", correct: true }
        ]
    },
    {
        question: "Which is a primary color?",
        answers: [
            { text: "Orange", correct: false },
            { text: "Blue", correct: true },
            { text: "Green", correct: false },
            { text: "Purple", correct: false }
        ]
    },
    {
        question: "What shape is a polygon?",
        answers: [
            { text: "Triangle", correct: false },
            { text: "Square", correct: false },
            { text: "Hexagon", correct: false },
            { text: "All of the above", correct: true }
        ]
    },



]
