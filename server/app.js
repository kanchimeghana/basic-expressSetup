import express from "express";

const app = express();

app.use(express.json()) // This line imp for post,put,delete apis

const PORT = 5005;


app.get("/",(req,res)=>{
  try {
        res.status(200).json({ msg : "Hello server"});
    }catch (error) {
        console.log(error);
        res.status(200).json({ msg: error});
    }
});

app.post("/register",(req,res)=>{
  try {
        res.status(300).json({ msg : "Hello users"});
    }catch (error) {
        console.log(error);
        res.status(300).json({ msg: error});
    }
    
})

app.delete("/delete",(req,res)=>{
  try {
        res.status(200).json({ msg : "user is deleted"});
    }catch (error) {
        console.log(error);
        res.status(200).json({ msg: error});
    }
})

app.put("/update",(req,res)=>{
  try {
        res.status(600).json({ msg : "user is updated"});
    }catch (error) {
        console.log(error);
        res.status(600).json({ msg: error});
    }
})


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
