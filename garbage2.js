const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const parentNode = document.querySelector('#users')


function saveTolocalStorage(event){
    event.preventDefault();
    const name = event.target.nameInput.value;
    const email = event.target.emailInput.value;

    const obj = {
        name,
        email
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showNewUserOnScreen(obj)
}


window.addEventListener('DOMContentLoaded', () =>{
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
})


function showNewUserOnScreen(user){
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
            
            // console.log(localStorage.getItem(user.emailId))
        if(localStorage.getItem(user.mail) !== null){
            removeUserFromScreen(user.mail)
        }
    
    

    const ParentNode = document.querySelector('#users');
    const childHTML = `<li id=${user.email}> ${user.nameInput} - ${user.emailInput}
                            <button onClick=deleteUser('${user.email}')> Delete User <button>   
                            <button onClick=editUser('${user.email})> Edit User </button>
                        </li> `
        ParentNode.innerHTML = ParentNode.innerHTML + childHTML;
    
}

function editUserDetails(email, name){

    emailInput.value = email;
    nameInput.value = name;
    

    deleteUser(email)
 }


function deleteUser(email){
    console.log(email)
    localStorage.removeItem(email);
    removeUserFromScreen(email);

}

function removeUserFromScreen(email){
    const parentNode = document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(email);

    parentNode.removeChild(childNodeToBeDeleted)
}