const express=require('express');
const mongoose=require('mongoose');
const url ='mongodb://localhost/Testimonial'
const app=express();

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open', ()=>{
    console.log('connected...');
})
app.use(express.json())
const testimonialRouter=require('./routes/testimonials')
app.use('/testimonials',testimonialRouter)
app.listen(9000,()=>{
    console.log('Server started')
})