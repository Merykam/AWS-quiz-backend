
let qst =JSON.parse(localStorage.getItem('Question'));
let AnswerUser =JSON.parse(localStorage.getItem('answerUser'));
let RightUser =JSON.parse(localStorage.getItem('RightAnswer'));


for(let i=0;i<qst.length;i++){
    console.log(qst[i]);
    document.querySelector('.container3').innerHTML+=`

    <div class="card2">
            
           <h6>Question :</h6>
           <p id="name">${qst[i]}</p>

           <h6>Your answer :</h6>
           <p id="AnswerUser">${AnswerUser[i]}</p>

            <h6>The right answer :</h6>
            <p id="RightAnswer">${RightUser[i]}</p>

            <h6>Explication :</h6>
            <p id="Explication">eeeeezzrty</p> 

      

           

    </div>

    
    `


}



      

           




    


