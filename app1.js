const express=require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const adminRoute=require('./routes/admin')
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(adminRoute)
app.use(shopRoute)

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','not-found.html'))
})

app.listen(3000)

//module.exports = path.dirname(require.main.filename)