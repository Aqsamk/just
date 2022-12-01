/*Take the student class which you made up and write a function called egligible 
for placements which basically takes the minimum board marks required by a candidate to 
sit for the company coming for placement and it returns a fat arrow function.The fat arrow function takes 
age as an argument and returns true if the given student has board marks greater than minimum 
board marks required by company and is above the required age set by the company.*/
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
    EligibleforPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) => {
            console.log('inside egligibleForCurrentCOmpany',this)
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(this.name + "is ready for placements");
            }
            else{
                console.log(this.name + "is not ready for placement")
            }
        }
    return Efp;
    }

}
const s1 = new Student('Aqsam','25','8109832648','89');
const s2 = new Student('Yash','27','81098348','85');
const s3 = new Student('Afreen','20','810832648','100');
const s4 = new Student('Ved','24','81092648','99');
const s5 = new Student('Vivek','23','81032648','39');
const s6 = new Student('Roshan','78','53205729',90);
s1.EligibleforPlacementAge(19)(78);
s2.EligibleforPlacementAge(30)(90);