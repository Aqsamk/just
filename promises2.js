console.log('person1: Shows the ticket');
console.log('person2: Shows the ticket');


const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('ticket'), 3000)});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log(`Wife: I have the ticket`);
    console.log('husband: We should go in');
    console.log("Wife: no I i am hungry");
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) => {
    console.log(`Husband: I got some popcorn`);
    console.log('Husband: We Should go in');
    console.log('Wife: I want butter on my popcorn');

    return new Promise((resolve, reject) => resolve(` ${t} butter`))

});

const getColdDrinks = getButter.then((t) => {
    console.log(`hunsband: I got some butter on popcorn`);
    console.log('husband: anything else darling');
    console.log('wife: Yes I want coldDrinks');
    console.log('husand: Okay let me get it');

    return new Promise((resolve, reject) => resolve(`${t} colddrinks`))

})

getColdDrinks.then((t) => console.log(t));