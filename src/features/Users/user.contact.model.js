const mongoose=require("mongoose");
const contactshema=mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    jobTitle: String,
    phonenumber: Number,
    Lifecycle: String,
    LeadStatus: String,
    contactowner: String,
    createdate: String,
})
const contactmodel=mongoose.model("hubcontact",contactshema)
module.exports={
    contactmodel
}