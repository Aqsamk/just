const express=require('express');

const app = express();
const bodyParser = require('body-parser');
const loginRoute=require('./chat/login')
const messageRoute = require('./chat/chatapp')

app.use(bodyParser.urlencoded({ extended:false}))

app.use(loginRoute)
app.use(messageRoute)
app.listen(7000)