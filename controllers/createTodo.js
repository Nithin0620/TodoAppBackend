const Todo = require("../models/Todo");

exports.createTodo= async(req,res)=>{
   try{
      const {title,description}= req.body;
      const response = await Todo.create({title,description});
      res.status(200).json({
         success:true,
         data:response,
         message:'Successfully entry create ho gaya '
      })
   }
   catch(err){
      console.log(err);
      console.error(err);
      res.status(500).json({
         success:false,
         data:'internal server error occured',
         message:err.message
      })

   }
}