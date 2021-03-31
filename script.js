const quizData = [
    {
    question : 'What is the capital of Rajasthan ?',
    a: 'Lucknow',
    b: 'Delhi',
    c: 'Jaipur',
    d: 'Raipur',
    correct: 'c'

}, 
{
    question : 'what is the total number of states in India ?',
    a: '27',
    b: '28',
    c: '29',
    d: '30',
    correct: 'b',
},
{
    question : 'Deepest river of India?',
    a: 'Ganga',
    b: 'Yamuna',
    c: 'chambhal',
    d: 'Brahamaputra',
    correct: 'd',
},
{
    question : 'Active volcano in India is in : ',
    a: 'Madhya Pradesh',
    b: 'Andaman and Nicobar Islands',
    c: 'Goa',
    d: 'Maharashtra',
    correct: 'b',

},
{
    question : 'Jamuna river of Bangladesh is _______river of India?',
    a: 'Yamuna',
    b: 'Brahamaputra',
    c: 'Ganga',
    d: 'Teesta',
    correct: 'b',
},
{
    question : 'Which state is in the eastern most state of India ?',
    a: 'Manipur',
    b: 'Assam',
    c: 'Nagaland',
    d: 'Arunachal Pradesh',
    correct : 'd',
},
{
    question : 'Railway passenger coaches are manufactured at which place ?',
    a: 'Gandhinagar',
    b: 'Varansi',
    c: 'Perambur',
    d: 'Gwalior',
    correct: 'c',
},
{
    question : 'Which one of the following countries has the longest International boundary with India ?',
    a: 'China',
    b: 'Bangladesh',
    c: 'Pakistan',
    d: 'Bhutan',
    correct: 'b',
},
{
    question : 'Which among the following Crops is Sown on the Largest Area in India?',
    a: 'Rice',
    b: 'Wheat',
    c: 'Maize',
    d: 'Barley',
    correct: 'a',
},
{
    question : 'Which river flows from south to north?',
    a: 'Ganga',
    b: 'Narmada',
    c: 'Krishna',
    d: 'Kuwari',
correct: 'b',
},
];
const answerEls= document.querySelectorAll(".answer");
const quiz= document.getElementById("quiz");
const questionEl=document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuiz=0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText=currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}
function getSelected(){
    const answerEls= document.querySelectorAll(".answer");
     let answer=undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers()
{
    answerEls.forEach((answerEl) => {
        answerEl.checked=false;
    });
}
submitbtn.addEventListener("click", () => {
    const answer=getSelected();
    
    console.log(answer);
     if(answer )
    {
        if(answer===quizData[currentQuiz].correct ){
        score++;
        }
            currentQuiz++;
            if(currentQuiz<quizData.length){
        loadQuiz();
            }
            else{
        //alert("Bravo! You have completed the quiz.");
        quiz.innerHTML=`<h2>You answered correctly
         at ${score}/${quizData.length} questions.</h2>

         <button onclick="location.reload()">
         Reload the Quiz</button>`;
            }
    }

});


