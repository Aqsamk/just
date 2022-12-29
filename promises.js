const posts = [
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}
];

const Users = {
   username:'Aqsam',lastactivity: new Date().getTime()
}

function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index) =>{
            output += `<li>${post.title} - ${Users.lastactivity}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}
let counter = 2;
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
            counter = counter+1;
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error : something went wrong')
            }
        },2000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            counter = counter-1;
           if(counter<0){
           
            reject('Erorr: Array is empty now');
           }else{
            error = false;
            resolve()
           }
        },3000)
    })
}

//all promises

/*const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) =>{
    setTimeout(resolve,200,'Goodbye')
})


Promise.all([promise1,promise2,promise3]).then(((values)=>console.log(values)))*/

function updateLastActivityTime()  {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            Users.lastactivity = new Date().getTime();
            resolve(Users.lastactivity);
            let error = false;
            if(!error){
                reject('Error');
            }
        },4000)
        
    })
        
    
}

Promise.all([createPost({title:'Post three',body:'Post three is created'}),updateLastActivityTime()]).then(((values)=>console.log(values)));




