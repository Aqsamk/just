var obj = {num:2};
var obj2 = {num:5};
var addTothis = function(a,b,c){
    return this.num+a+b+c;
};
//call
let c = addTothis.call(obj,3,4,5); //functionname.call(obj,functionargument)
console.log(c);
//apply
var arr = [1,2,3];
console.log(addTothis.apply(obj,arr));
console.log(addTothis.apply(obj2,arr));
//bind
var bound = addTothis.bind(obj);
console.dir(bound);

console.log(bound(1,2,3))


//function for student using bind
var Student = {age:20};
var ageOfStudent = function(){
    return this.age;
}
var bound2 = ageOfStudent.bind(Student);
console.log(bound2());
