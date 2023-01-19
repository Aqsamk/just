const express= require('express');
const data = require('./data');
const fs = require('fs')
// const { use } = require('./login');

const router=express.Router();

/*router.get(`/`,(req, res,next) => {
    
    
    res.send(`<form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
    method="POST"><input id="message" name="message" type="text"placeHolder="message"><input type="hidden" name="username" id="username"><button type="submit">send</button></form>`)
   })*/

   router.get(`/`, (req, res, next) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) throw err;
        res.send(`
            <form action="/" method="POST">
                <input id="message" name="message" type="text"placeHolder="message">
                <input type="hidden" name="username" id="username">
                <button type="submit">send</button>
            </form>
            <div id="data-container">${data}</div>
        `);
    });
});

router.post(`/`,(req, res, next) => {
    
    data.push(`{${req.body.username}:${req.body.message}}`);
    fs.appendFile('data.txt',`{${req.body.username}:${req.body.message}}`,(err) => {
        if(err) console.log(err);
        console.log(`Data saved to data.text:${req.body.username}:${req.body.message}`);
    })
    
   // console.log(`${req.body.username}:${req.body.message}`);

    res.redirect(`/`)
    
    
})


module.exports = router