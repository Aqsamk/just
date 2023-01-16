
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const userList = document.querySelector('#users')
myForm.addEventListener('submit',onSubmit);


function onSubmit(e){
    e.preventDefault();

    const li = document.createElement('li');
    var dlt = document.createElement('button');
    var edit = document.createElement('button');
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    
    dlt.className = 'btn btn-danger btn-sm float-right delete';
    //text node
    dlt.appendChild(document.createTextNode('Delete'));
    
   li.appendChild(dlt)
    li.appendChild(edit)
    //add classes to dlt button
    edit.className = 'btn btn-dark btn-sm float-right edit';
    //text node
    edit.appendChild(document.createTextNode('Edit'));
    
    userList.appendChild(li);
    
    
    saveData();
}

function saveData(){
    let nm = nameInput.value;
    let email = emailInput.value;
    
    
    let user_record = new Array()
    user_record = JSON.parse(localStorage.getItem(email))?JSON.parse(localStorage.getItem(index)) : [];
    user_record.push({
        "name":nm,
        "Email":email,
        
    })
    localStorage.setItem(email,JSON.stringify(user_record));
}
userList.addEventListener('click',removeItem);
function removeItem(e){
    let email = emailInput.value;
    if(e.target.classList.contains('delete')){
       if(confirm('Are you sure ..')){
        var li = e.target.parentElement;
        userList.removeChild(li);

        localStorage.removeItem(email);
       }
    }
    
}

userList.addEventListener('click',editItem);
function editItem(e){
    let email = emailInput.value;
    nameInput.value = nameInput.value;
    emailInput.value = emailInput.value;
    
     var li = e.target.parentElement;
     userList.removeChild(li);
 
     localStorage.removeItem(email);
 }
 

 
    

       
       
    
    
