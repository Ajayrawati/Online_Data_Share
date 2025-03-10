import dotenv from "dotenv";
import connectDB from "./MongoDb/db.js";
import app from "./app.js"
dotenv.config({
    path:'./.env'
});



connectDB()
.then(()=>{
    app.listen(8000,()=>{
        console.log("Server Started : ")
    })
}

)
.catch((err)=>{
    console.log("Mongo failed  : ", err);
})

