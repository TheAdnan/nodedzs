var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});


router.post('/', function(req, res, next) {
    console.log(req.body);
    if(req.body.password === req.body.repeat_password){
        User.create({
            username: req.body.username,
            password: req.body.password,
            full_name: req.body.full_name,
            birth_date: req.body.birth_date
        }, function (err, instance) {
            if (err) console.log(err);
            res.send("Successfully saved");
        });
    }
    else{
        res.redirect(req.get('referer'));
    }
});

module.exports = router;
