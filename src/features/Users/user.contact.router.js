const express=require("express");
const contactrouter=express.Router();
const {contactmodel}=require("./user.contact.model")
contactrouter.get("/data",async(req,res)=>{
    try{
              let que=req.body;
              const get=await contactmodel.find(que);
              res.send(get)
    }
    catch(err)
    {
        console.log(err)
    }
})
//console.log(contactmodel)
contactrouter.post("/data",async(req,res)=>{
    const payload=req.body;
    console.log(payload)
    try{
              
              const post=new contactmodel(payload);
              await post.save()
              console.log(post)
              res.send("data added sucessfully")
    }
    catch(err)
    {
        res.send(err);
    }
})
contactrouter.delete("/data/:id",async(req,res)=>{
    const payload=req.params.id;
    try{
        await contactmodel.findByIdAndDelete(payload)
              res.send(`data deleted sucessfully id:${payload}`)
    }
    catch(err)
    {
        res.send(err);
    }
})
module.exports={
    contactrouter
}