

var Mark = document.getElementById('Mark');

console.log(Mark);

Mark.innerHTML=localStorage.getItem('score') + '/100';

console.log(parseInt(localStorage.getItem('score')));





if(parseInt(localStorage.getItem('score'))>50){

  
  

    document.getElementById('user').innerHTML='Congratulation '+localStorage.getItem('name');
    document.getElementById('msgSucc').innerHTML='You succeeded in quiz';
    if(localStorage.getItem('score')==100){
        document.querySelector('.btnResult').style.display = "none";
    }


}else if(parseInt(localStorage.getItem('score'))<50){
    console.log("helloooooooooo");
    document.getElementById('user').innerHTML='Unfortunately '+localStorage.getItem('name');
    document.getElementById('msgSucc').innerHTML='You failed in quiz';
    document.querySelector('.scor').classList.add('scorR');
    document.getElementById('user').classList.add('msgF');

}