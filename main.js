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

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
headerTitle.textContent = ' hello';
headerTitle.innerText = 'Good Bye';
headerTitle.textContent = 'Aqsam';
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px red';
header.style.borderBottom = 'solid 4px blue';
var title = document.getElementsByClassName("title");
title[0].className

