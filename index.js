const express= require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT ||4000;


app.use(express.json());
const todoRoutes= require("./routes/todo");
app.use("/api/v1",todoRoutes);

app.listen(PORT,()=>{
   console.log(`Server started successfully at port no. ${PORT}`);
})

const dbconnect= require("./config/database");
dbconnect();

app.get("/",(req,res)=>{
   res.send(`<h1>This is the homePage Brother</h1>`);
})

