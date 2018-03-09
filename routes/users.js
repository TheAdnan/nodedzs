var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function(req, res, next) {
    User.find({}, function(err, data) {
        if (!err){
            res.render('users', { title: 'Users', data: data });
        } else {
            throw err;
        }
    });

});


module.exports = router;
