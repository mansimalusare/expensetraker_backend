const express = require("express");
const rounter = express.Router();



//to  create  new user
    
rounter.post("/",require("./../controllers/user").CreatUser);
//To read  1 user
rounter.get("/:userID",require("./../controllers/user").getUser);
//To read users
rounter.get("/",require("./../controllers/user").getAllUser);
//To delete Users
rounter.delete("/:userID",require("./../controllers/user").deleteUser);

//To update users

rounter.put("/:userID",require("./../controllers/user").UpdateUser);






















module.exports = rounter;
