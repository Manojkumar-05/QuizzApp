const quizData = [ 
    {
       question: 'Expansion for JS',
       a:'java',
       b:'JSON',
       c:'JavaScript',
       d:'None of the above',
       correct:'c'

    },
    {
        question: 'Expansion for OOP',
        a:'object',
        b:'programming language',
        c:'userInterFace',
        d:'Object Oriented Programming',
        correct:'d'
     },
     {
        question: 'Expansion for DOM',
        a:'Document Object Model',
        b:'Document Oriented Model',
        c:'Document Model',
        d:'Document of Model ',
        correct:'a'

     },
     {
        question: 'Expansion for CSS',
        a:'Casecading Style Sheet',
        b:'Style Sheet',
        c:'styled sheet',
        d:'Document Object Model',
        correct:'a'

     },
     {
        question: 'Expansion for HTML',
        a:'programming language',
        b:'Hyper Text Markup Language',
        c:'Hyper Language',
        d:'Hyper Text Mark Language',
        correct:'b'
     }
]


const questionEl = document.getElementById('question')
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const subBtn = document.getElementById("submit")
const answerEls = document.querySelectorAll(".answer")
const quiz = document.getElementById("quiz")

let currentQuiz = 0
let score= 0
loadQuiz()

function loadQuiz(){

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText =  currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    // currentQuiz++
   
}
function getSelected(){
    let answer = undefined
    answerEls.forEach(answerEl => {
       if(answerEl.checked){
       answer = answerEl.id  }
        })
    return  answer 
}
 function disSelect(){
    answerEls.forEach(answerEl =>  answerEl.checked=false )
   }
subBtn.addEventListener('click', () =>{
    const answer = getSelected()

        if(answer){
        if(answer === quizData[currentQuiz].correct){ score++}
        currentQuiz++
        if(currentQuiz < quizData.length){
        loadQuiz()
        disSelect()}
        else{
          quiz.innerHTML = `<h2>You completed the quiz and got 
                           ${score}/${quizData.length} right</h2>
                           
                           <button onclick="location.reload()">Reload</button>                         
                           `
        }
 }
})