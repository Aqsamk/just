//let multiply = function(x,y){
 //   console.log(x*y)
//}

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}
let multiplybyTwo = multiply(2);
 multiplybyTwo(5);

//let multiplybyThree = multiply.bind(this,3);
//multiplybyThree(6);

let multiplybyThree = multiply(3);
multiplybyThree(3);

