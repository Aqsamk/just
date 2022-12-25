var Form = document.getElementById('form');
var userList = document.getElementById('entries')
let Expanse = document.getElementById('expanse').value;
    let Description = document.getElementById('description').value;
    let Category = document.getElementById('category').value;
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
dlt.appendChild(document.createTextNode('Delete'));
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
    saveData();

})

//localstorage
function saveData(){
    let Expanse = document.getElementById('expanse').value;
    let Description = document.getElementById('description').value;
    let Category = document.getElementById('category').value;
    let index = document.getElementById("indexing").value;
    let exepense_record = new Array();
    exepense_record = JSON.parse(localStorage.getItem(index))?JSON.parse(localStorage.getItem(index)) : [];
    exepense_record.push({
        "expanse":Expanse,
        "description":Description,
        "category":Category
    })
    localStorage.setItem(index,JSON.stringify(exepense_record));
}

//edit
//delete
let ItemList = document.getElementById("entries");

ItemList.addEventListener('click',removeItem);
ItemList.addEventListener('click',editItem);
function removeItem(e){
    let index = document.getElementById("indexing").value;
    if(e.target.classList.contains('delete')){
       if(confirm('Are you sure ..')){
        var li = e.target.parentElement;
        ItemList.removeChild(li);

        localStorage.removeItem(index);
       }
    }
    
}

function editItem(e){
   let index =  document.getElementById("indexing").value
    document.getElementById('expanse').value = Expanse;
    document.getElementById('description').value = Description;
    document.getElementById('category').value = Category;
    let ItemList = document.getElementById("entries");
    var li = e.target.parentElement;
    ItemList.removeChild(li);

    localStorage.removeItem(index);
}


