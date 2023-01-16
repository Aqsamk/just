/*const hobbies = ['sports','Cooking'];

const NewArray = [...hobbies,'Programming','Farming']

console.log(NewArray);

console.log(hobbies);

const person = {
    Name: 'Aqsam',
    Age : '24',
    greet(){
        console.log('Hi, I am ' + this.Name);
    }
}

const copiedPerson = {...person};
copiedPerson.Name = 'Junaid';
console.log(copiedPerson.Name)
console.log(person.Name)

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));*/

const person = {
    Name: 'Aqsam',
    Age : '24',
    greet(){
        console.log('Hi, I am ' + this.Name);
    }
}

const printName = ({Name,Age,greet}) => {
    console.log(Name,Age,greet);
}
printName(person);

const {Name,Age} = person;

console.log(Name,Age)
const hobies = ['sprots','cooking','farming'];
const [hobby1,hobby2,hobby3] = hobies;
console.log(hobby1,hobby2,hobby3);