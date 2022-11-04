var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event

form.addEventListener('submit',addItem);
//delete element
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup',filterItems);


//ADD Item

function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById('item').value;
    var newobj = document.getElementById('object').value;
    //create new li element 
    var li = document.createElement('li');
    //add classs
    li.className = 'list-group-item';
    //add text node with input value
     li.appendChild(document.createTextNode("\n"+newItem + "\n"));
     li.appendChild(document.createTextNode( newobj + "\n"));
    
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

//Filter Items

function filterItems(e){
    //converts text to lowercase
    var text = e.target.value.toLowerCase();
   var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item ){
    var itemName = item.firstChild.textContent;
    var objName = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || objName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
  })
  
 

}
