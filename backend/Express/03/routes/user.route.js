const express = require('express');
const app = express.Router();
const User = require('../models/user');
const user = require('../models/user');


// Create a new user
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get a user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        if (!foundUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(foundUser);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.delete('/users/:id',async (req,res) => {
    try {
        const deleteUser = await user.findByIdAndDelete(req.params.id)
        if (!deleteUser) {
            res.json("user not found")          
        }
        else {
            res.json("user delete success")
        }
        
    } catch (error) {
 console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Internal server error' });

        
    }
    
})


app.put("/user/udpate/:id", async(req,res)=>{
    try{
 const updateUser = await user.findByIdAndUpdate(req.params.id,req.body)
 console.log(updateUser);
 
 if(!updateUser){
    res.json("user not udpate")
 }
 else{
    res.json("udpate udpated")
 }}
 catch(error){
    res.json("user not udpate")

 }
})

module.exports = app;