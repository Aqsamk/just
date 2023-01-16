
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const userList = document.querySelector('#users')
myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    
       var nm = name.value;
       var mail = email.value;

    let obj = {
        nm,
        mail
    }
    localStorage.setItem(obj.mail,JSON.stringify(obj));
    showNewUserOnScreen(obj)
}
    
    window.addEventListener("DOMContentLoaded ", () => {
        const localStorageObj = localStorage;
        const localstoragekeys  = Object.keys(localStorageObj)

        for(var i =0; i< localstoragekeys.length; i++){
            const key = localstoragekeys[i]
            const userDetailsString = localStorageObj[key];
            const userDetailsObj = JSON.parse(userDetailsString);
            showNewUserOnScreen();
        }
    })

    function showNewUserOnScreen(user){
        document.getElementById('email').value = '';
                document.getElementById('name').value = '';
                
                // console.log(localStorage.getItem(user.emailId))
                if(localStorage.getItem(user.mail) !== null){
                    removeUserFromScreen(user.mail)
                }
        

            }
    // deleteUser('abc@gmail.com')

    
    function editUserDetails(mail, nm){

        document.getElementById('email').value = mail;
        document.getElementById('username').value = nm;
        

        deleteUser(mail)
     }
    
    function deleteUser(mail){
        console.log(mail)
        localStorage.removeItem(mail);
        removeUserFromScreen(mail);

    }

    function removeUserFromScreen(mail){
        const parentNode = document.getElementById('users');
        const childNodeToBeDeleted = document.getElementById(mail);

        parentNode.removeChild(childNodeToBeDeleted)
    }
    

    /////////////////////////////////////////////////////////////////////////////////



    const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');
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
    user_record = JSON.parse(localStorage.getItem(email))?JSON.parse(localStorage.getItem(email)) : [];;
    user_record.push({
        "name":nm,
        "Email":email,
        
    })
    localStorage.setItem(email,JSON.stringify(user_record));
    nameInput.value = '';
    emailInput.value = '';
   
}
   
    //localStorage.setItem(email,JSON.stringify(user_record));

userList.addEventListener('click',removeItem);
function removeItem(e){
    let email = emailInput.value;
    if(e.target.classList.contains('delete')){
       
        var li = e.target.parentElement;
        userList.removeChild(li);

        localStorage.removeItem(email);
       
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
       
    
    
