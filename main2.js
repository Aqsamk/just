
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    var name = nameInput.value;
    var mail = emailInput.value;
    
    const obj = {
       name,
       mail
    }
    localStorage.setItem(obj.mail,JSON.stringify(obj));

    if(name === '' || mail === ''){
        msg.classList.add('error');
    }else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${name} : ${mail}` ));
        userList.appendChild(li);
        name ='';
        mail='';
    }

}
