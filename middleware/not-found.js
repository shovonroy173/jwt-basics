const notFoundhandler = (req , res)=>{
    res.status(404).send(`Route not FOUND!`);
}

module.exports = notFoundhandler;