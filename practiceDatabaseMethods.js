const mongoose = require('mongoose')
const dotenv = require("dotenv").config(); 
const Recipe = require('./model/Recipe')
const { name } = require('ejs')


console.log(process.env.DATABASE_CONNECTION_STRING); 9
// 1. connect to DB 

async function ConnectToDatabase() {
    try { 
        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING)
            console.log("Connected to Databse")
    }
    catch(error) {
console.log("Error Occured" , error)

    }
}


ConnectToDatabase() 

// CREATING: create a new recipe in the DB 

async function createNewRecipe(){

    try{ 
        const createdRecipe = await Recipe.create({
        name: "Um Ali",
        instructions: "bake at 180C",
        prepTime: 120,
        difficulty: "Medium"    
        })
        console.log(createdRecipe); 
    } catch (err) { 
        console.log("Error: Failed to create recipe." , err )
    }
}


createNewRecipe()

// get All Recipes

async function getAllRecipes(){ 
    try { 
const allRecipes = await Recipe.find(Recipe) 
console.log(`${name} is an ${difficulty} recipe and takes ${prepTime} minutes to prepare.`)
    } catch (err) { 
        console.log("Error: No recipe found" , err )
    } 
}

// get Recipe by ID 

async function getRecipeById(){
    const foundRecipe = await Recipe.findById("6a4ce4b0799eaa32bc3340b4"); 
console.log(foundRecipe); 

}

getRecipeById() 

// update Recipe by ID to New recipe data 

async function updateOneRecipe(){ 
    const updateRecipe = await Recipe.findByIdAndUpdate("6a4ce4b0799eaa32bc3340b4", 
{new:true} 
    )
}

// delete recipe by ID 

async function deleteOneRecipe(){ 
    const deleteRecipe = await Recipe.findByIdAndDelete("6a4ce4b0799eaa32bc3340b4");
}

