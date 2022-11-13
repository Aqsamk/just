const myform = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
myform.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    
       var nm = name.value;
       var mail = email.value;

    let obj = {
        nm,
        mail
    }
    localStorage.setItem(obj.mail,JSON.stringify(obj));
    showNewUserOnScreen(obj);
    }
    window.addEventListener("DOMContentLoaded", () => {
        const localStorageObj = localStorage;
        const localstoragekeys  = Object.keys(localStorageObj)

        for(var i =0; i< localstoragekeys.length; i++){
            const key = localstoragekeys[i]
            const userDetailsString = localStorageObj[key];
            const userDetailsObj = JSON.parse(userDetailsString);
            showNewUserOnScreen(userDetailsObj)
        }
    })

    function showNewUserOnScreen(user){
        document.getElementById('email').value = '';
                document.getElementById('name').value = '';
                
                // console.log(localStorage.getItem(user.emailId))
                if(localStorage.getItem(user.mail) !== null){
                    removeUserFromScreen(user.mail)
                }
        const parentNode = document.getElementById('users');
        const childHTML = `<li id=${user.mail}> ${user.nm} - ${user.mail}
                                <button onclick=deleteUser('${user.mail}')> Delete </button>
                            
                             <button onclick=editUserDetails('${user.mail}','${user.nm}')>Edit  </button>
                             </li>`
        parentNode.innerHTML = parentNode.innerHTML + childHTML;
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
    

       
       
    
    
