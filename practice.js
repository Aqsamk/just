class Queue {
    constructor(){
        this.array = [];
        this.min = 0;
        this.max = 0;

    }
    push(data){
        this.array.push(data);
        this.max = this.max +1;
    }
    display(){
        console.log(this.array);
        console.log(this.min);
        console.log(this.max);
    }
    peakRear(){
       console.log (this.array[this.array.length-1]);
    }
    peakFront(){
        console.log(this.array[this.min]);
    }
    Pop(){
        if(this.min<this.max)
        {
            const valueToPop = this.array[this.min];
            this.array[this.min] = undefined;
            this.min = this.min+1;
        }
        else{
            throw new Error('array is empty');
        }
    }
}
try
{const myq1 = new Queue();
myq1.push(5);
myq1.push(3);
myq1.push(4);
myq1.push(2);
myq1.Pop();
myq1.display();
myq1.peakRear();
myq1.peakFront();
}
catch{
    console.log('Error')
}