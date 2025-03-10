const mongoose=require("mongoose");

require("dotenv").config();

const dbConnect =()=>{
   mongoose.connect(process.env.DATABASE_URL,{
      // useNewUrlParser:true,
      // useNewTopology:true
   })
   .then(()=>{console.log("DB Ke sath connection bait gaya he")})
   .catch((err)=>{
      console.log("Error aaya he connection me ");
      console.error(err.message);
      process.exit(1);
   });

}

module.exports = dbConnect;