const express = require ('express');
const router = express.Router();
const User = require('../models/profile.js');

//GET Request to Pull Information
router.get('/users', function(req, res, next){
    User.find({}).then(function(users){
        res.send(users);
    })
});

//POST Request to Create A New User
router.post('/users', function(req, res, next){
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next);
});

//PUT Request to Update a User
router.put('/users/:id', function(req, res){
    User.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    User.findOne({_id: req.params.id}).then(function(user){
    res.send(user);  
    });
});
});

//DELETE Request to Delete a User
router.delete('/users/:id', function(req, res){
    User.findByIdAndDelete({_id: req.params.id}).then(function(user){
    res.send(user);
    });
});

module.exports = router;