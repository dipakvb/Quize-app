const questions = [
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "shark", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraf", correct: "false" },
    ],
  },
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "shark", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraf", correct: "false" },
    ],
  },
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "shark", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraf", correct: "false" },
    ],
  },
  {
    question: "Which is the largest animal in the world?",
    answer: [
      { text: "shark", correct: "false" },
      { text: "Blue Whale", correct: "true" },
      { text: "Elephant", correct: "false" },
      { text: "Giraf", correct: "false" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currnetQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currnetQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currnetQuestionIndex]
    let questionNo = currnetQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButton.appendChild(button)
        if(answer.correct){
          button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selctAnswer)
    })
}

 function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
 }
function selctAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true"
  if(isCorrect){
    selectedBtn.classList.add('correct')
    score++;
  }else{
    selectedBtn.classList.add('incorrect')
  }
  Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct === 'true'){
      button.classList.add('correct')
    }
    button.disabled = 'true'
  }),
  nextButton.style.display = 'block'
}

function showScore(){
  resetState();
  questionElement.innerHTML = `Your score  ${score} out of ${questions.length}`
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = 'block'
}

function handleNextButton(){
  currnetQuestionIndex++;
  if(currnetQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener('click',()=>{
  if(currnetQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz()
  }
})

startQuiz();