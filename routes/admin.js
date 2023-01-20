const express = require('express');
const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

router.get('/add-product',(req,res,next) => {

    res.sendFile(path.join(rootDir,'views','add-product.html'))
});
router.get('/success',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','success.html'))
})

router.get('/contact-us',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
})
router.post('/contact-us',(req,res,next) => {
    res.redirect('/success');
})

router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;