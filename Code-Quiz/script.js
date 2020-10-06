var questions = [
    {
        prompt: "What color is the sky?\n(a) Blue\n\
                \(b) Green\n (c) Red",
        answer: "a"
    },
    {
        prompt: "What is the capital of the Michigan?\n(a) Detroit\n\
                (b) Lansing\n (c) Gaylord",
        answer: "b"


    },
    {
        prompt: "What is the spookiest holiday?\n(a) Christmas\n\
                (b) Valentine's Day\n (c) Halloween",
        answer: "c"


    },
    {
        prompt: "How many licks does it take to get to the tootsie roll center of a tootsie pop?\n(a) 1\n\
                (b) 1,000,000\n (c) The world may never know...",
        answer: "c"


    },
    {
        prompt: "Which color is a primary color?\n(a) Red\n\
                (b) Orange\n (c) Purple",
        answer: "a"


    },



]
var score = 0;
var button = document.querySelector("#start")

function runTest(){
    
    for(i = 0; i < questions.length; i++){

        var response = window.prompt(questions[i].prompt)

        if (response === questions[i].answer) {
            score++;
            alert("You Brainiac!");
        }else
            alert("Awww, that's not right...")

    }
    alert("You got " + score + "/" +  questions.length)
}

button.addEventListener("click", runTest);

button.addEventListener("click", setup);

var counter = 60;

function setup(){

    document.querySelector("#timer").innerHTML = counter;

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
