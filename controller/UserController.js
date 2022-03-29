const express = require("express")
const { validationResult } = require("express-validator")
const UserSchema = require("../models/User")

const get_users = (req,res,next) =>{
    UserSchema.find({}, function (err,data){
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
      UserSchema.findOne({name:name}, function (err, data) {
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
      UserSchema.create(data,function (err, data){
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
    UserSchema.updateOne({_id:id}, data, function(err,data){
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
  
  const delete_users = (req,res,next) =>{
    UserSchema.findOneAndDelete({
      _id:req.params.id 
    }) 
    .then((data)=> res.json(data))
    .catch((err)=> res.json(err))
  }
  
  module.exports = {
    get_users,create,update,delete_users,findOne
  }