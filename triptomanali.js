function buyacar(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Buy a car')
        },10000)
       
    })
   
}

function planaTrip(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('Go to manali');
           
        },2000)
    })
}

function reachManali(){
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Reached manali')
    },1000)
    
})
}

async function fun1(){
    const msg = await buyacar();
    console.log(msg)
    const msg2 = await planaTrip();
    console.log(msg2)
    const msg3 = await reachManali();
    console.log(msg3)
}
fun1();

//buyacar().then((msg) => {
 //   console.log(msg)
 //   planaTrip().then((msg2) => {
  //      console.log(msg2)
  //      reachManali().then((msg3) => {
  //          console.log(msg3)
  //      })
  //  })
//})
