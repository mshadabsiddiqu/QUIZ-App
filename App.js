var qusetions = [
    {
        question : "which is the laegest animal in the world?",
        answer: [
            {text: "Shark", correct:"false"},
            {text: "Bluewhale", correct:"true"},
            {text: "Elephant", correct:"false"},
            {text: "Tiger", correct:"false"},
      
        ]
    },
    {
        question : "which is the smallest continent in the world?",
        answer: [
            {text: "Asia", correct:"false"},
            {text: "Austrialia", correct:"true"},
            {text: "Arcitic", correct:"false"},
            {text: "Africa", correct:"false"},
      
        ]  
    },
    {
        question : "which is the laegest desert in the world?",
        answer: [
            {text: "Kalahari", correct:"false"},
            {text: "Gobi", correct:"false"},
            {text: "Sahara", correct:"false"},
            {text: "Anatrcitica", correct:"true"},
      
        ]
    },
    {
        question : "what is the capital city of pakistan?",
        answer: [
            {text: "Karachi", correct:"false"},
            {text: "Lahore", correct:"false"},
            {text: "Islamabad", correct:"true"},
            {text: "Peshawar", correct:"false"},
      
        ]
    },
    {
        question : "which river is the longest in pakistan?",
        answer: [
            {text: "Jehlum", correct:"false"},
            {text: "Indus", correct:"true"},
            {text: "Ravi", correct:"false"},
            {text: "Sutlej", correct:"false"},
      
        ]
    }
]

var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-button");
var nextButton = document.getElementById("next-btn");

var currentQuestionIndex = 0;
var score = 0;

function startQuiz(){
    currentQuestionIndex - 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetstate();
    var currentQuestion = qusetions[currentQuestionIndex];
    var questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ", " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        
    });
}

function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    var selectedBtn = e.target;
    var iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}
function showscore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${qusetions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < qusetions.length){
        showQuestion()
    }else{
        showscore()
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < qusetions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();