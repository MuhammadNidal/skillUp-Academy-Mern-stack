const express = require('express');

const app = express();

const students = [
    {id:1,name:'John'},
    {id:2,name:'Jane'},
    {id:3,name:'Doe'}
]

app.get('/home',(req,res)=>{
    res.send('Welcome to the Home Page')
})
app.get('/students',(req,res)=>{

    res.json(students)
})
app.get('/students/:id',(req,res)=>{
    const studentId = parseInt(req.params.id)
    const student  = students.find(a=>a.id===studentId)
    if (!student) {
        return res.status(404).json({message: 'Student not found'})
    }
    else {
        res.json(student)
    }
})
app.get('/about',(req,res)=>{
    res.send('Welcome to the About Page')
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

