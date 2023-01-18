const http = require('http');

const express = require('express')

const app = express();

app.use((rqs,res,next) => {
  console.log('in the middleware!')
  next();
})
app.use((req,res,next) => {
  console.log('in the another middleware!')
  res.send()
})
 
  
app.listen(3000);