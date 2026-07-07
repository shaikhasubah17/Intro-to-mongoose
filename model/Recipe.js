const mongoose = require('mongoose')

// Schema: tells my app what the data should look like

const recipeSchema = new mongoose.Schema({

    name: {
type: String, 
required: true, 
minLength: 3, 
maxLength: 100,
    }, 
    instructions:{
type:[String]
    },

prepTime: {
 type: Number, 
 min: 5, 
 max: 500, 
 required: true  
}, 
difficulty: {
    type: [String],
    enum: ['Easy','Medium','Hard']
} 


}, {timestamps:true}) 

// model 

const Recipe = mongoose.model('Recipe',recipeSchema) 

module.exports = Recipe 

