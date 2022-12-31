




var Mark = document.getElementById('Mark');

console.log(Mark);

Mark.innerHTML=localStorage.getItem('score') + '/100';





if(localStorage.getItem('score')>=10){
    document.getElementById('user').innerHTML='Congratulation '+localStorage.getItem('name');
    document.getElementById('msgSucc').innerHTML='You succeeded in quiz';
    if(localStorage.getItem('score')==30){
        document.querySelector('.btnResult').style.display = "none";
    }


}else{
    document.getElementById('user').innerHTML='Unfortunately '+localStorage.getItem('name');
    document.getElementById('msgSucc').innerHTML='You failed in quiz';
    document.querySelector('.scor').classList.add('scorR');
    document.getElementById('user').classList.add('msgF');

}