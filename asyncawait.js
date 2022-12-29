console.log('person1: Shows the ticket');
console.log('person2: Shows the ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('ticket'), 3000);

    });

    const getPopcorn = new Promise ((resolve, reject) =>resolve(`popcorn`));
    const getButter = new Promise ((resolve, reject) =>resolve(`butter`));
    const getColdDrinks = new Promise((resolve,reject) => resolve(`coldDrink`));
    let ticket = await promiseWifeBringingTicks;
   
    let [popcorn, butter,coldDrink] = await Promise.all([getPopcorn,getButter,getColdDrinks]);

    console.log(`${popcorn},${butter}, ${coldDrink}`);
    
    return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));



console.log('person4: Shows the ticket');
console.log('person5: Shows the ticket');