import mongoose from "mongoose";

// Connection to Mongodb database
const connectDB=async()=>{
    mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB