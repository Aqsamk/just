var Form = document.getElementById('form');
var userList = document.getElementById('entries')
Form.addEventListener('submit',function(event){
    event.preventDefault();

    let Expanse = document.getElementById('expanse').value;
    let Description = document.getElementById('description').value;
    let Category = document.getElementById('category').value;
    let li = document.createElement('li');
    var dlt = document.createElement('button');
    li.appendChild(document.createTextNode(`${Expanse}Rs. - ${Description} - ${Category}`));
//add classes to dlt button
dlt.className = 'btn btn-danger btn-sm float-right delete';
//text node
dlt.appendChild(document.createTextNode('Remove'));
li.appendChild(dlt);
userList.appendChild(li);

//edit button
var edit = document.createElement('button');
//add classes to dlt button
edit.className = 'btn btn-dark btn-sm float-right edit';
//text node
edit.appendChild(document.createTextNode('Edit'));
li.appendChild(edit);
userList.appendChild(li);
    
    userList.appendChild(li);
    Expanse = "";
    Description = "";
    Category = "";

    
})





//delete Event

userList.addEventListener('click',RemoveItem())


function RemoveItem(e){
   e.preventDefault();
}