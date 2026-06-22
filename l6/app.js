import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from Server!")
});

// DataBase 
let user = [
    {
        name:"Muzaffar Ali",
        age:20,
        city:"Ghotki"
    },
    {
        name:"Ali",
        age:19,
        city:"karachi"
    },
];

app.get("/api/v1/users",(req,res)=>{
    res.status(200).json({
        "message":"data Recived",
        "data":user
    })
});

app.use(express.json())

app.post("/api/v1/user",(req,res)=>{
    let data = req.body.name;
    console.log(`Data ${data}`);
    res.status(200).json({"message":"Data Submited!"});
})

app.listen(5000,()=>{
    console.log("Server run at localhost:5000");
});

