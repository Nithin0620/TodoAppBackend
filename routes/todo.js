const express= require("express");
const router=express.Router();

const {createTodo}=require("../controllers/createTodo");


router.post("/createtodo",createTodo);

module.exports = router;