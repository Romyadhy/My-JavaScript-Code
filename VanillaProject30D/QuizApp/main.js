const QuizAppData = [
    {
        question: 'How old the lord in MLBB?',
        a: '20',
        b: '49',
        c: '46',
        d: '101',
        correct: 'd'
    }, {
        question: 'What is the most popular programming language in 2022?',
        a: 'JavaScript',
        b: 'Java',
        c: 'Python',
        d: 'C++',
        correct: 'a'
    }, {
        question: 'Who the president of Earth?',
        a: 'Hitler',
        b: 'Captain Proton',
        c: 'Samsudin',
        d: 'Kobokan Aeru',
        correct: 'b'
    }, {
        question: 'What does CSS stand for?',
        a: 'Corret Style Sheet',
        b: 'Contracs She Said',
        c: 'Cascading Style Sheet',
        d: 'Comet Shes Gone',
        correct: 'c'
    }, {
        question: "what's year's that javascript launched?",
        a: '1995',
        b: '2020',
        c: '1909',
        d: '1998',
        correct: 'a'
    }
];


// Get the question in ul li input and label
const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_TextEl = document.getElementById('a_text');
const b_TextEl = document.getElementById('b_text');
const c_TextEl = document.getElementById('c_text');
const d_TextEl = document.getElementById('d_text');
const SubEl = document.getElementById('submit');





let currentQuiz = 0;
let score = 0;

loadQuestion();

function loadQuestion(){

    // Function to disable the checked box, after submit.
    disSelected();

    const currentQuizData = QuizAppData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_TextEl.innerText = currentQuizData.a
    b_TextEl.innerText = currentQuizData.b
    c_TextEl.innerText = currentQuizData.c
    d_TextEl.innerText = currentQuizData.d



}

// Functiuon getEl and Cheker
function getSelected(){
    let answer = undefined;
    
    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }

    });

    return answer;
}

function disSelected(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

SubEl.addEventListener('click', () => {
    
    //check selected
    const answer = getSelected();
    
    // console.log(answer); cek ne id in checkedbox.

    
    if(answer){

        if(answer === QuizAppData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < QuizAppData.length){
            loadQuestion();
        } else{
            quiz.innerHTML = `<h2>You score at this quiz is ${score}/${QuizAppData.length} question.</h2>
            <button onclick="location.reload()">Relod</button>`
        }
    }
});
