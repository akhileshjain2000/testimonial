const express=require('express');
const testimonial = require('../models/testimonial');
const router=express.Router();
const Testimonial=require('../models/testimonial')
router.get('/',async(req,res)=>{
    try{
         const testimonials=await Testimonial.find();
         res.json(testimonials);
    }catch(err){
        res.send('Error'+err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
         const testimonial=await Testimonial.findById(req.params.id);
         res.json(testimonial);
    }catch(err){
        res.send('Error'+err)
    }
})
router.post('/',async(req,res)=>{
     const testimonial=new Testimonial({
         img:req.body.img,
         name:req.body.name,
         post:req.body.post,
         TestimonialDescription:req.body.TestimonialDescription,
         CreatedOn:req.body.CreatedOn,
         LastUpdatedOn:req.body.LastUpdatedOn,
         Active:req.body.Active
     })
     try{
            const a1=await testimonial.save()
            res.json(a1)
     }catch(err){
       res.send('Error')
     }
})
router.patch('/:id',async(req,res)=>{
    try{
      const testimonial=await Testimonial.findById(req.params.id)
      testimonial.img=req.body.img
      testimonial.name=req.body.name
      testimonial.post=req.body.post
      testimonial.TestimonialDescription=req.body.TestimonialDescription
      testimonial.CreatedOn=req.body.CreatedOn
      testimonial.LastUpdatedOn=req.body.LastUpdatedOn
      testimonial.Active=req.body.Active
      const a1=await testimonial.save()
      res.json(a1)
    }catch(err){
        res.send('Error')
    }
})
router.delete('/:id',async(req,res)=>{
    try{
         const testimonial=await Testimonial.findById(req.params.id);
         res.json(testimonial);
    }catch(err){
        res.send('Error'+err)
    }
})

module.exports=router