const mongoose =require('mongoose')
//require('dotenv').config()
const connectToDatabase=async()=> {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo connect to database`)
    }catch(e){
        console.log(e)
    }
}
module.exports=connectToDatabase