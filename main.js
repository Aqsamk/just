//Examine the document object
//console.dir(document);

/*console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = "Hello";
console.log(document.forms[0]);
console.log(document.links);*/

/*console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
headerTitle.textContent = ' hello';
headerTitle.innerText = 'Good Bye';
headerTitle.textContent = 'Aqsam';
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px red';
header.style.borderBottom = 'solid 4px blue';
var title = document.getElementsByClassName("title");
title[0].className*/

//getElementbyclassname

/*var items = document.getElementsByClassName('list-group-item');

console.log(items);

console.log(items[1]);

//items[1].textContent = 'Hello 2';

items[3].style.fontWeight = 'bold';

items[2].style.backgroundColor = 'green';

for(let i = 0;i<items.length;i++){

    items[i].style.fontWeight = 'bold';

}*/
var li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'Pink';

for(var i = 0;i<li.length;i++){
    li[i].style.backgroundColor = 'pink';
}

//Quary selector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px orange'



