
const object=Array.from( document.getElementsByClassName('choix-text'));

var questionNumber=document.getElementById('question-number');
var questionConter=0;
var fullProgress = document.querySelector('.full-progress');

// var Mark= document.getElementById('Mark');
// console.log(Mark);


let availableQuestionA = [];
var score = 0;

var answerUser=[];
var questionChoice=[];
var RightAnswer=[];





var questions = [

    {
        choix0 :"Why is AWS more economical than traditional data centers for applications with varying compute workloads?", 
        choix1 :"Amazon EC2 costs are billed on a monthly basis",    
        choix2 :"Users retain full administrative access to their Amazon EC2 instances.", 
        choix3 :"Amazon EC2 instances can be launched on demand when needed.", 
        choix4 :"Users can permanently run enough instances to handle peak workloads.",
        answer : 2,
        Right :"Users retain full administrative access to their Amazon EC2 instances."
        


    },
    {
        choix0 :"Which AWS service would simplify the migration of a database to AWS?", 
        choix1 :"AWS Storage Gateway",    
        choix2 :"AWS Database Migration Service (AWS DMS)", 
        choix3 :"Amazon EC2", 
        choix4 :"Amazon AppStream 2.0",
        answer : 3,
        Right :"Amazon EC2"


    },
    {
        choix0 :"Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?", 
        choix1 :"AWS Config",    
        choix2 :"AWS OpsWorks", 
        choix3 :"AWS SDK", 
        choix4 :"AWS Marketplace",
        answer : 1,
        Right :"AWS Config"


    },

]


function availableQuestion(){
    for(let i=0; i<questions.length ; i++){

        availableQuestionA.push(questions[i]);
        

    }
}






function showQuestion(){

    availableQuestion();

    getNewQuestion();





}



function getNewQuestion(){

    questionNumber.innerHTML = 'Question ' + (questionConter + 1) + ' / ' + questions.length;

    fullProgress.style.width = `${(questionConter*100)/questions.length}%`;

    if(questionConter == questions.length){
        return window.location.assign('highscores.html');
    }
    
    
    questionIndex = availableQuestionA[Math.floor(Math.random() * availableQuestionA.length)];// id=2

    for(let i=0; i<object.length; i++){
   
    
        object[i].innerText=questionIndex["choix" + i];
    
    }
    const index1 = availableQuestionA.indexOf(questionIndex);
    availableQuestionA.splice(index1, 1);

    questionConter++;




}


  


function answerQuestion(option){


        if(option.id == questionIndex.answer){
            

            score += 10;
            localStorage.setItem("score",score);
            console.log( localStorage.getItem('score'));

          

            console.log(score);



           option.classList.add("addGreen");
                
           setTimeout ( () => {
            option.classList.remove("addGreen");
            getNewQuestion();

           },1000);
            
            
           
            
        }else{
            
            localStorage.setItem("score",score);
            console.log( localStorage.getItem('score'));
            

            option.classList.add("addRed");

            //get info
            
           
            answerUser.push(option.innerText);
            console.log(answerUser);

           
            questionChoice.push(questionIndex.choix0);

           
            RightAnswer.push(questionIndex.Right);

           


            localStorage.setItem("answerUser",JSON.stringify(answerUser));
            localStorage.setItem("Question",JSON.stringify(questionChoice));
            localStorage.setItem("RightAnswer",JSON.stringify(RightAnswer));

            //end info


            // console.log(option.innerText);
            // console.log(questionIndex.choix0);
            // console.log(questionIndex.Right);
            
           
           setTimeout ( () => {
            option.classList.remove("addRed");
            getNewQuestion();

           },1000);
           

           

        }
        


        


       
    }






showQuestion();


  

// function checkAnswer(){
   
//    for(let i=0; i<Object.keys(questionIndex).length; i++){

//         if(questionIndex[answer] === Object.keys(questionIndex)[i]){



//     }

//    }

   



// }
