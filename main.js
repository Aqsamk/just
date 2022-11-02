
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

var titles = document.querySelectorAll('.title');
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

}

//In quaryselector we can select only one thing at a time first item will be selected by default but 
//in quaryselectorall we can do anything we can select anything by our choice.




