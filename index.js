// const express = require('express')
<<<<<<< HEAD
import express from "express";
=======
import express, { json } from "express";
>>>>>>> 3f0913d (apis done)
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

<<<<<<< HEAD
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
=======


//Add Users

app.post("/users" , (req , res) => {
    const {name} = req.body;
    if(!name) {
        res.json({
            message: "Name is Required"
        });
        return;
    };
    
    users.push({
        id: Date.now(),
        name,
    });
    res.send({
        message: "Title is Required",
        data: users,
    });
});


// Single User

app.get("/users" , (req , res) => {
    const {id} = req.params

    const index = users.findIndex((item) => item.id === +id);

    if(index == -1){
        req.status(404).json({
            message: "User not Found"
        });
        return;
    }

    req.status(200).json({
        data: users[index],
    });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
>>>>>>> 3f0913d (apis done)
