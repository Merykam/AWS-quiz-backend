
const object=Array.from( document.getElementsByClassName('choix-text'));

var questionNumber=document.getElementById('question-number');
var questionConter=0;
var fullProgress = document.querySelector('.full-progress');



let availableQuestionA = [];
var score = 0;
var answerUser=[];
var questionChoice=[];
var RightAnswer=[];
var Explication=[];





var data ;
async function getText() {
    let myObject = await fetch('quiz.php');
    let myText = await myObject.text();
    data = JSON.parse(myText);
    availableQuestion();
   
    getNewQuestion();
    
    
  }


console.log(data);
function availableQuestion(){
    
    for(let i=0; i<data.length ; i++){

        availableQuestionA.push(data[i]);
        

    }
}





getText();





function getNewQuestion(){
    console.log(data);

    questionNumber.innerHTML = 'Question ' + (questionConter + 1) + ' / ' + data.length;
    console.log(data.length);

    fullProgress.style.width = `${(questionConter*100)/data.length}%`;

    if(questionConter == data.length){
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
        // storage.clear();
    


        if(option.id == questionIndex.Answer){

            

            score += 10;
            
            localStorage.setItem("score",score);
            console.log( localStorage.getItem('score'));

          

            // console.log(score);
            // console.log(option)

        //    if(option!= undefined){
            option.classList.add("addGreen");
        //    }
                
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

           
            RightAnswer.push(questionIndex.RightAnswer);
            Explication.push(questionIndex.Explication);


           


            localStorage.setItem("answerUser",JSON.stringify(answerUser));
            localStorage.setItem("Question",JSON.stringify(questionChoice));
            localStorage.setItem("RightAnswer",JSON.stringify(RightAnswer));
            localStorage.setItem("Explication",JSON.stringify(Explication));

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





