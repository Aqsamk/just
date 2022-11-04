var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
//form submit event

form.addEventListener('submit',addItem);
//delete element
itemList.addEventListener('click', removeItem);

//ADD Item

function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element 
    var li = document.createElement('li');
    //add classs
    li.className = 'list-group-item';
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete button 
    var dlt = document.createElement('button');
    //add classes to dlt button
    dlt.className = 'btn btn-danger btn-sm float-right delete';
    //text node
    dlt.appendChild(document.createTextNode('X'));
    li.appendChild(dlt);
    itemList.appendChild(li);

    //edit button
    var edit = document.createElement('button');
    //add classes to dlt button
    edit.className = 'btn btn-edit btn-sm float-right edit';
    //text node
    edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(edit);
    itemList.appendChild(li);


}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ? ')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}