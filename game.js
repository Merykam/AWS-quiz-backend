const question = document.getElementById('question');
const choix = Array.from(document.getElementsByClassName('choix-text'));
console.log(choix);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestion =[];

let questions = [

    {
        question2 :"Why is AWS more economical than traditional data centers for applications with varying compute workloads?", 
        choix1 :"Amazon EC2 costs are billed on a monthly basis",    
        choix2 :"Users retain full administrative access to their Amazon EC2 instances.", 
        choix3 :"Amazon EC2 instances can be launched on demand when needed.", 
        choix4 :"Users can permanently run enough instances to handle peak workloads.",
        answer : 2


    },
    {
        question2 :"Which AWS service would simplify the migration of a database to AWS?", 
        choix1 :"AWS Storage Gateway",    
        choix2 :"AWS Database Migration Service (AWS DMS)", 
        choix3 :"Amazon EC2", 
        choix4 :"Amazon AppStream 2.0",
        answer : 1


    },
    {
        question2 :" Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?", 
        choix1 :"AWS Config",    
        choix2 :"AWS OpsWorks", 
        choix3 :"AWS SDK", 
        choix4 :"AWS Marketplace",
        answer : 4


    },
    




]

const correct_Mark = 10;
const Max_Question = 3;

// startPlay = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestion =[...questions];
//     getNewQuestion();

// }

function startPlay(){
        // questionCounter = 0;
        // score = 0;
    availableQuestion =[...questions];
        // getNewQuestion();
        
    if(availableQuestion.length == 0 || questionCounter > Max_Question) {
        return window.location.assign('end.html');
    }


    questionCounter++;

    const questionIndex = Math.floor(Math.random() * availableQuestion.length);

    currentQuestion = availableQuestion[questionIndex];

    question.innerText = currentQuestion['question2'];

    //loop foreach for object currentQuestion 

    choix.forEach(choice =>{
        const number = choice.dataset['number'];

        choice.innerText =currentQuestion["choix" + number];
    });

    availableQuestion.splice(questionIndex, 1);
    acceptingAnswers = true;

}



// function getNewQuestion(){

//     if(availableQuestion.length == 0 || questionCounter > Max_Question) {
//         return window.location.assign('end.html');
//     }


//     questionCounter++;
//     const questionIndex = Math.floor(Math.random() * availableQuestion.length);
//     currentQuestion = availableQuestion[questionIndex];
//     question.innerText = currentQuestion['question2'];

//     choix.forEach(choice =>{
//         const number = choice.dataset['number'];
//         choice.innerText =currentQuestion["choix" + number];
//     });

//     availableQuestion.splice(questionIndex, 1);
//     acceptingAnswers = true;
    
// };



choix.forEach(choice =>
{
    choice.addEventListener('click',e =>{
        if (!acceptingAnswers) return;
        

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // getNewQuestion();
        startPlay();

    })

})



startPlay();

document.getElementsByClassName('test')[0].innerText="gggg";

 



