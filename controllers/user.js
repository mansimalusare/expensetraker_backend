const userModel = require("./../modules/user");

//to create new user API


exports.CreatUser = async (req, res) => {
     try {
          const users = await new userModel(req.body).save();
          res.json(users);
     } catch (err) {
          res.json(err);
     }
}
exports.getUser = async(req , res)  => {
     try{
          const users =  await userModel.find({_id:req.params.userID});
          res.json(users);
 }catch(err){
       res.json({err});
     }
}
//read user
exports.getAllUser = async(req , res)  => {
     try{
          const users =  await userModel.find();
          res.json(users);
 }catch(err){
       res.json({err});
     }
}
exports.deleteUser = (req , res)  => {
     
     userModel.findOneAndDelete({_id:req.params.userID},
         (err,data) =>{
              if(err){
                   res.json({err}); 
              }else{
                   res.json(data); 
              }
         });
   
}
//to update user
exports.UpdateUser = (req , res)  => {
     
     userModel.findOneAndUpdate({_id:req.params.userID},req.body, {new:true},
         (err,data) =>{
              if(err){
                   res.json({err}); 
              }else{
                   res.json(data); 
              }
          
         });
   
}


