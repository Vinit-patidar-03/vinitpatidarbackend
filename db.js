const mongoose = require('mongoose');

const connectMongoDB = async (mongoURI)=>{

   await mongoose.connect(mongoURI);
   mongoose.connection.on('connected',()=>
   {
         console.log('successfully connected to mongodb');
   })

   mongoose.connection.on('error',()=>
   {
        console.log("some error occured while connecting");
   })
}

module.exports = connectMongoDB;