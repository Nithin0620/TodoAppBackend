const Todo = require("../models/Todo");

exports.getTodo= async(req,res)=>{
   try{
     const todos= await Todo.find({});

     res.status(200).json({
      success:true,
      data:todos,
      message:"data retreving successfully",
     });
   }
   catch(err){

      console.log(err.message),
      res.status(500).json({
         success:false,
         data:err.message,
         message:"Error has occured",
      });
      

   }
}



exports.getTodoById= async(req,res)=>{
   try{
      const id= req.params.id;

      const todo= await Todo.findById({_id:id});
      if(!todo){
         res.status(404).json({
            success:false,
            message:"data not found"
         })
      }
      res.status(200).json({
         success:true,
         data:todo,
         message:`successfully retrived data with id : ${id}`
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