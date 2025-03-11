const Todo = require("../models/Todo");

exports.deleteTodo= async(req,res)=>{
   try{
      const id = req.params.id;

      const todo = await Todo.findByIdAndDelete(id);

      res.status(200).json({
         success:true,
         data:todo,
         message:"deleted successfully"
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