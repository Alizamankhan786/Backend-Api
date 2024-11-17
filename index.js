// const express = require('express')
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();
import express from "express"
// const cors = require('cors')
const app = express()
const port = process.env.PORT 



app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Middle Ware

app.use(express.json());
app.use(cors());


const users = [];

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

// Get All User

app.get("users" , (req , res)=> {
    res.status(200).json({
        data: users,
    });

});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
