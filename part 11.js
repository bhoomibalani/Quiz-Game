
const questions =[
    {
        question:"which is largest animal in the world?",
        answers:[
            {text:"shark",correct:false},
            {text:"eagle",correct:false},
            {text:"blue whale",correct:true},
            {text:"giraffe",correct:false},
    ]

    },
    {
        question:"which is largest desert in the world?",
        answers:[
            {text:"kalahari",correct:false},
            {text:"gobi",correct:false},
            {text:"sahara",correct:false},
            {text:"antartica",correct:true},
    ]
    },
    {
        question:"which is smallest continent in the world?",
        answers:[
            {text:"Asia",correct:false},
            {text:"Australia",correct:true},
            {text:"Arctic",correct:false},
            {text:"Africa",correct:false},
    ]

    },
    {
        
        question:"which is smallest animal in the world?",
        answers:[
            {text:"humming bird",correct:true},
            {text:"woodpecker",correct:false},
            {text:"sparrow",correct:false},
            {text:"goldcrest",correct:false},
    ]

    }

];

const questionElement=document.getElementById("question");

const answerButtons=document.getElementById("answer-button");

const nextButton=document.getElementById("nextbtn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
currentQuestionIndex=0;
score=0;
nextButton.innerHTML="Next";
showQuestion();
}

function showQuestion(){

    resetState();
let currentQuestion=questions[currentQuestionIndex];
let questionNo=currentQuestionIndex+1;
questionElement.innerHTML=questionNo+"."+ currentQuestion.question;

currentQuestion.answers.forEach((answer)=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");  
    answerButtons.appendChild(button);
    if(answer.correct){
        button.dataset.correct=answer.correct;
    }
    button.addEventListener("click",selectAnswer);
    
    
});
}



function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild ){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score}out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
function handlePlayAgain(){
    startQuiz();
}
nextButton.addEventListener("click",()=>{
if(currentQuestionIndex<questions.length){
handleNextButton();
}else{
   handlePlayAgain();
}
});



startQuiz();