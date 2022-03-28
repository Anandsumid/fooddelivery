const express = require("express")
const { validationResult } = require("express-validator")
const Food = require("../models/Food_info")

const get_foods = (req,res,next) =>{
  Food.find({}, function (err,data){
    if(err)
    req.json({
      success:false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  })
}
 
const findOne = (req,res,next) =>{
  const name = req.params.name
    Food.findOne({name:name}, function (err, data) {
      if(err)
      req.json({
        success: false,
        data : err 
      })
      else
      res.json({
        success: true,
        data: data
      })
    })
}

const create = (req,res,next) =>{
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({
      success:false,
      errors: errors.array(
      )
    })
  }else{
    const data = req.body 
    Food.create(data,function (err, data){
      if(err) 
      res.json({
        success:false,
        data: err
      })
      else
      res.json({
        success: true,
        data: data}
      )
    })
  }

}

const update = (req,res,next) => {
  const data = req.body
  const id = req.params.id 
  Food.updateOne({_id:id}, data, function(err,data){
    if(err) 
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success:true,
      data:data
    })
  })
}

const delete_food = (req,res,next) =>{
  Food.findOneAndDelete({
    _id:req.params.id 
  }) 
  .then((data)=> res.json(data))
  .catch((err)=> res.json(err))
}

module.exports = {
  get_foods,create,update,delete_food,findOne
}