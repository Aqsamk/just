//Design pattern problem - How will you design a Student 
//class which stores the name , age , phone number, board marks of each student. 
//Make a constructor to initialize the values.



class Student{
    static numberOfStudents = 0;
    constructor(name,age,phone,marks){
        this.name = name;
        this.age = age;
        this.marks = marks
        this.phone = phone;
        Student.numberOfStudents += 1;
    }
    Print(){
        console.log(`Student name is ${this.name} and he is ${this.age} year old his phone is ${this.phone} his marks is ${this.marks}`)
    }
    Eligible(){
        
        if(this.marks>40){
            console.log('You are eligible for college');
        }else {
            console.log('Not Eligible');
        }
    }
    EnrolledStudents(){
        console.log(Student.numberOfStudents);
    }
}

const s1 = new Student('Aqsam','25','8109832648','89');
const s2 = new Student('Yash','27','81098348','85');
const s3 = new Student('Afreen','20','810832648','100');
const s4 = new Student('Ved','24','81092648','99');
const s5 = new Student('Vivek','23','81032648','39');
const s6 = new Student('Roshan','78','53205729',90);
s1.Print();
s1.Eligible();
s5.Eligible();
s1.EnrolledStudents();
console.log(Student.numberOfStudents);
