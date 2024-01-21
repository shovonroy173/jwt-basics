// external import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// internal imports
const authRouter = require("./routes/main");
const notFoundhandler = require("./middleware/not-found"); //route not error handler
const errorHandler = require("./middleware/error-handler"); //server error

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1" , authRouter);

// database connect
mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser:true , 
    useCreateIndex:true , 
    useFindAndModify:false , 
    useUnifiedTopology:true
})
        .then( ()=>{console.log(`Successful database connection`)} )
        .catch(()=>{console.log(`Unsuccess`)});

// error handler
app.use(notFoundhandler);
app.use(errorHandler);

// listening to port
const port = process.env.PORT || 3000;
app.listen(port , ()=>{
  console.log(`Listening to port ${port}`);
});