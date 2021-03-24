const express = require('express');
const db = require('../models/database.js')
const router = express.Router();

//var users =  [{id: 1, name : 'Renuka'},{id:2, name : 'Deepak'}];
var users;
var foundUser;
var content;

router.get('/allUsers',async (req, res) => {
    try{
    db.getUsers(function(err, data){
         if (err) throw err; 
   
    // Converting to JSON 
     users = JSON.parse(data); 
      
    console.log(users); // Print users 
     });}
     catch{
        console.log(err)
     }
    res.send(users);
 });

router.get('/userbyID/:userid',async (req, res) => {
    try{    
        var getID=Number(req.params.userid);
        await db.getUsers(function(err, data){
        if (err) throw err; 
    
   // Converting to JSON 
        users = JSON.parse(data).filter(data=>data.id ===getID); 
     
         console.log(users);
        })
       
    }
    catch(err){
            console.log(err);
    }
        res.send(users);
    });



router.post('/addUser',async (req,res)=>{

        try{
        console.log(req.body);
        content = req.body;
        await db.getUsers(function (err, data) {
            if (err)
                throw err;

            // Converting to JSON 
            users = JSON.parse(data);
        });
        console.log(content);
        console.log(users);
        await users.push(content);
        const newuser = JSON.stringify(users);
         db.adduser(newuser,function(err, data){
            if (err) throw err;     
        
        });
    }
    catch(err){
        console.log(err);
    }
    res.send(req.body);
});


router.delete('/deleteuser/:userID',async(req,res)=>{
    try{
        console.log(req.params.id);
         db.deleteUser(req.params.userID,function(err, data){
        if (err) throw err;     
     
    });}
    catch(err){
        console.log(err)
    }
    res.send(req.params.id)
});


module.exports = router;