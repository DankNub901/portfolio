const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index',{
        title: 'Home'
    })
})

router.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'About'
    })
})

router.get('/contact', (req, res, next) => {
    res.render('contact',{
        title: 'Home'
    })
})

router.get('/products', (req, res, next) => {
    res.render('products',{
        title: 'Home'
    })
})

router.get('/services', (req, res, next) => {
    res.render('services',{
        title: 'Home'
    })
})

router.get('/home', (req, res, next) => {
    res.render('home',{
        title: 'Home'
    })
})

module.exports = router;