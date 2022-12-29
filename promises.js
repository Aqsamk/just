const posts = [
    {title:'Post one ', body:'This is post one'},
    {title:'Post Two ', body:'This is post two' }
]

const Users = [
    {name: 'Aqsam',activitiTime:new Date().getTime()}
]


function getPost(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post,index)=>{
            output += `<li>${post.title} </li>`;
        })
        document.body.innerHTML = output;
    },1000)
}
let counter = 2;

function createPost(post){
   return new Promise((resolve,reject) =>{
    setTimeout(()=>{
        posts.push(post)
        counter = counter+1;
        
        
            resolve('post created');
        
    },2000);
   });
}

function DeletePost(){
    return new Promise((resolve,reject) =>{
     setTimeout(()=>{
         posts.pop();
         counter = counter-1;
         
         if(counter>=0){
             resolve('post deleted');
         }else{
             reject('Error : Somehing went wrong')
         }
     },3000);
    });
 }
function updateLastActivityTime(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            Users.activitiTime = new Date().getTime();
            resolve(Users.activitiTime);
        },1000)
    })
}

Promise.all([updateLastActivityTime(),createPost({title:'Post Three ', body:'This is post two'})]).then((values) => console.log(values));
Promise.all([updateLastActivityTime(),DeletePost()]).then((values) => console.log(values));
Promise.all([updateLastActivityTime(),createPost({title:'Post four ', body:'This is post four'})]).then((values) => console.log(values));
createPost({title:'Post five ', body:'This is post five'}).then(getPost)




