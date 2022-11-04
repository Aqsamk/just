
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    var nm = nameInput.value;
    var mail = emailInput.value;
    const obj = {
       nm,
       mail
    }
    localStorage.setItem('user Details',JSON.stringify(obj));
}


