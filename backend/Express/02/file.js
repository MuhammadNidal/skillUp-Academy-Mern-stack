const e = require('express');
const express = require('express')
const app = express()
PORT = 3000

app.use(express.json());

const schoolsInformation = [
    {id:1,name:'ABC School',location:'New York'},
    {id:2,name:'XYZ School',location:'Los Angeles'},
    {id:3,name:'LMN School',location:'Chicago'}
]

app.get("/schools",(req,res)=>{
    res.json(schoolsInformation)
    res.end("this is school data")
})

app.get("/schools/:id",(req,res)=>{
  const schoolId=parseInt(req.params.id)
  const school=schoolsInformation.find(a=>a.id===schoolId)  
  if (school) {
    res.json(school)
  } else {
    res.status(404).send("School not found")
  }
})

app.post("/schools/add",(req,res)=>{
    const newSchool ={
        id :schoolsInformation.length + 1,
        name :req.body.name,
        location: req.body.location
    }
    ;
    schoolsInformation.push(newSchool)
    res.status(201).json(newSchool)
})



// Delete method in Schoools Information

app.delete("/schools/:id",(req,res)=>
    {
        const schoolId = parseInt(req.params.id);
        const schoolIdBYIndex =schoolsInformation.findIndex(a=>a.id ===schoolId)

        if (schoolIdBYIndex === -1) {
            return res.status(404).send("School not found")
        }
        else {

        const deletedSchool = schoolsInformation.splice(schoolIdBYIndex,1)
        res.status(200).send("Deleted Successfully",deletedSchool)
        }
    })
    

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })