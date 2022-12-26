import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    note:{type:String, required: true},
    color:{type:String, required: true},
})

const listModel = mongoose.model("note", listSchema)

export default listModel;