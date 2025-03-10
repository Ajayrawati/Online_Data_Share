import mongoose,{Schema} from "mongoose";

const data = new Schema({
    urlId :{
        type : String,
        unique:true,
        required:true
    },
    savedData :{
        type : String,
        required :true
    }
    
});

const Data = mongoose.model("Data", data);
export  default Data;
