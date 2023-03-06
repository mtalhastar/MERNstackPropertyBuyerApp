const asyncHandler = require('express-async-handler');
const Property = require('../models/propertySchema')
const mongoose=require('mongoose')
const getProperty=asyncHandler(async(req, res) => {
    const property =await Property.find({}).sort({createdAt:-1})
    res.status(200).json(property)
})
const getAProperty=asyncHandler(async(req, res) => {
  
  const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such Property `})
      }
     const property=await Property.findById({_id:id})
   if(!property){
   return res.status(404).json({error: 'No such a Property'})
  }
  res.status(200).json(property)
})
const createProperty=asyncHandler(async(req, res) => {
    
  const {Name,Address,City,ImageLink,Price,Description} = req.body
  try {
  const property= await Property.create({Name,Address,City,ImageLink,Price,Description})
  res.status(200).json(property)
  }catch(err) {
   res.status(400).json({error: err.message})
  }
})
const updateProperty=asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({message:`No such Property `})
      }
    const update =await Property.findByIdAndUpdate({_id:id},{...req.body})
    res.status(200).json(update)
})
const validatePropertyName =(Name) => {
   if(Name.length<25){
    return "ValidLength";
   }
}
function containsNumbers(str) {
  return /[0-9]/.test(str);
}
const deleteProperty=asyncHandler(async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(400).json({message:`No such Property `})
    }
    const deleted=await Property.findOneAndDelete({_id:id})
     if(!deleted){
     return res.status(404).json({error:'Nothing found'})
     }
    res.status(200).json(deleted)
})
module.exports ={
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    getAProperty,
    validatePropertyName,
    containsNumbers
};