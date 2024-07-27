const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const routes = require("./routes")



dotenv.config();
const app = express();




app.use(express.json());


app.use(
	cors()
)
const PORT = 4000;

app.use("/",routes)

app.listen(PORT,()=>{
    console.log("server started successfully.....");   
})
