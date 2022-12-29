const posts = [
    {title:'post One',body:'This is post one',createdAtTime:new Date().getTime()},
    {title:'post Two',body:'This is post two',createdAtTime:new Date().getTime()}
    
];

let intervalId = 0;

function getPost(){
        clearInterval(intervalId);
       
        setInterval( () => {
            let output = '';
            posts.forEach((post,index)=>{
                output += `<li>${post.title} - last updated ${(new Date().getTime() - posts[index].createdAtTime)/1000} seconds ago</li>`;
            });
            document.body.innerHTML = output;
        },1000);

    
}
getPost();
function createPost(post, callback){
    setTimeout(()=>{
        posts.push({...post,createdAtTime:new Date().getTime()});
        callback();
    },2000)
}

createPost({title:'post three', body:'This is post three'},getPost);

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAtTime:new Date().getTime()});
        callback();
    },3000);
}

create4thPost({title:'post Four', body:'This is post Four'},getPost);
