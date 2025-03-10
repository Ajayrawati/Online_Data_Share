import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/cluster0`);
        console.log(`\nMongoDb connected !! DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection errror", error);
        process.exit(1);
    }
}
export default connectDB;