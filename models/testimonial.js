const { Binary } = require('bson');
const mongoose=require('mongoose');

const TestimonialSchema=new mongoose.Schema({
    img:{
       data:Buffer,
       contentType:String
   },
    name:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    TestimonialDescription:{
        type:String,
        required:true
    },
    CreatedOn:{
        type:Date,
        default:Date.now
    },
    LastUpdatedOn:{
        type:Date,
        default:Date.now
    },
    Active:{
        type:String,
        trim:true,
        default:0
    }
})
module.exports=mongoose.model('Testimonial',TestimonialSchema);