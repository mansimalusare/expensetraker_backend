const express =  require("express");
const app = express();
const conn = require("./db2");
const port = 4000;
const cors = require("cors");



conn.connection.on("connected", (err) =>{
    if(err){
        console.error(err);
    }
    else{
        console.log("connected to Mongodb");
    }
})




app.use(cors());
app.use(express.json());
app.use("/user",require("./routes/user"));

//To start server
app.listen(port , () =>{
    console.log("Server is start");
});



