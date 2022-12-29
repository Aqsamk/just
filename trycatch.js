console.log('person1: Shows the ticket');
console.log('person2: Shows the ticket');

const preMovie = async () => {
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
        setTimeout(()=>reject('ticket'), 3000);

    });
    let ticket
    try {
         ticket = await promiseWifeBringingTicks;
    }catch(e){
         ticket = 'sad face'
    }
    return ticket;
}
preMovie().then((m) => console.log(`person3: shows ${m}`));



console.log('person4: Shows the ticket');
console.log('person5: Shows the ticket');