const mongoose =require('mongoose')

const Schema = mongoose.Schema
const propertySchema=new Schema({
        Name: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true,
        },
        City: {
            type: String,
            required: true
        },
        ImageLink: {
            type: String,
            required: true
        },
        Price: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
    },{timestamps:true});

module.exports=mongoose.model('User',propertySchema)