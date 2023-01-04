



// document.querySelector('.inpText').value;

function getInputvalue(){
    var x = document.querySelector('.inpText').value
    if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    
    

    localStorage.setItem("name",document.querySelector('.inpText').value);
    console.log( localStorage.getItem('name'));
    // alert(document.querySelector('.inpText').value);

}


// console.log(document.querySelector('.inpText').value);














