//promises are asyncronous
//promises may be fullfilled or rejected
async function dadmakesPromise(){
    
try {
    const dadPromise = await new Promise((resolve,reject) =>{
        // after 10 days
        
        setTimeout(()=>{
        var salaryCredited = true;
        var salary = 3000;
        var costofps4 = 30000;
        var costofps5 = 40000;
        if(salaryCredited === true && salary>costofps5){
            resolve('Buy him a ps5');
        }
        else if(salaryCredited=== true && salary>costofps4){
            reject('buy him a ps4');
        }
        else{
            reject('Sorry son i will try in next month')
        }
       },2000)
        
    })
    console.log(dadPromise)
}
catch(err) {
    console.log(err)
}
}

dadmakesPromise();

/*console.log(dadPromise);
const dadPromise = new Promise((resolve,reject) =>{
    // after 10 days

    setTimeout(()=>{
    var salaryCredited = true;
    var salary = 350000;
    var costofps4 = 30000;
    var costofps5 = 40000;
    if(salaryCredited === true && salary>costofps5){
        resolve('Buy him a ps5');
    }
    else if(salaryCredited=== true && salary>costofps4){
        reject('buy him a ps4');
    }
    else{
        reject('Sorry son i will try in next month')
    }
   },2000)
    
})*/
