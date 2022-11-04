
//Quary selector
/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px orange'

var input = document.querySelector('input');
input.value = 'Hello I am Aqsam';

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
var secondItem = document.querySelector('.list-group-item:nth-child(2)');

secondItem.style.color = 'coral';
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');

thirdItem.style.color = 'white';*/

//quaryselectortoall

/*var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i =0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}
for(var i =0;i<even.length;i++){
    even[i].style.backgroundColor = 'orange';
    console.log('Nothing')

}*/

//In quaryselector we can select only one thing at a time first item will be selected by default but 
//in quaryselectorall we can do anything we can select anything by our choice.
//Traversing the DOM

var itemList = document.querySelector('#items');
//parent node
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'violet';
console.log(itemList.parentNode.parentNode.parentNode);

console.log(itemList.parentElement);

//child node
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';
itemList.children[2].style.backgroundColor = 'green';

//firstchild

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello Fools';
itemList.lastElementChild.textContent = 'Last child';
itemList.lastElementChild.style.backgroundColor ='pink';

//next sibling

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'Aqsam';
itemList.previousElementSibling.style.color = 'RED';

var heading = itemList.parentNode.parentNode.parentNode.previousElementSibling;
console.log(heading);

console.log(heading.lastElementChild)
heading.lastElementChild.textContent = 'Hello world Item Lister';

console.log(itemList.firstElementChild);

//create div
var newDiv = document.createElement('div');
newDiv.className = 'Hello';
//add ID
newDiv.id = 'Hello 1';

//add atribute
newDiv.setAttribute('title','Hello Div');

//creaate text node
var newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px'
container.insertBefore(newDiv,h1);
console.log(itemList.parentNode);
//text node
var item = document.getElementById('items');
var parentnode = document.getElementById('Helloworld ');
var Helloworld = document.createElement('li');
Helloworld.appendChild(document.createTextNode(items));
parentnode.appendChild(Helloworld);



 


