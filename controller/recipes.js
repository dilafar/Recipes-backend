let RecipeDetails = require('../models/recipeDetails');

/**
 * @param  req - Request from the frontend
 * @param  res - Response that need to send to the client

 * @returns {recipe[]} document
 */
const getRecipes = async(req,res)=>{
        await RecipeDetails.find().then((recipes)=>{
            res.status(200).json(recipes);
        }).catch((err)=>{
            res.status(404).json(err);
            console.log(err);
        })
};


/**
 * @param  req - Request from the frontend
 * @param  res - Response that need to send to the client

 * @returns {recipe} document
 */
const createRecipe = async(req,res)=>{
    const {recipe_name,ingredients,description} = req.body;
    const newRecipe = new RecipeDetails({
        recipe_name,ingredients,description
    });
    await newRecipe.save().then(()=>{
        res.status(200).json(newRecipe);
    }).catch((err)=>{
        res.status(404).json(err);
        console.log(err);
    })
};

/**
 * @param  req - Request from the frontend
 * @param  res - Response that need to send to the client

 * @returns {recipe} document
 */
const updateRecipe = async(req,res)=>{
    const recipeID = req.params.id;
    const {recipe_name,ingredients,description} = req.body;
    const updateRecipe = {
        recipe_name , ingredients , description

    }

    await RecipeDetails.findByIdAndUpdate(recipeID,updateRecipe).then(()=>{
        res.status(200).json(updateRecipe);
    }).catch((err)=>{
        res.status(400).json(err);
        console.log(err);
    })
}

/**
 * @param  req - Request from the frontend
 * @param  res - Response that need to send to the client

 * @returns recipe document
 */
const deleteRecipe = async(req,res)=>{
    const recipeID = req.params.id;
    await RecipeDetails.findByIdAndDelete(recipeID).then(()=>{
        res.status(200).json({msg:"Deletion Successful"});
    }).catch((err)=>{
        res.status(400).json(err);
        console.log(err);
    })
}

/**
 * @param  req - Request from the frontend
 * @param  res - Response that need to send to the client

 * @returns recipe document
 */
const getRecipeById = async(req,res)=>{
    const recipeID = req.params.id;
    await RecipeDetails.findById(recipeID).then((recipe)=>{
        res.status(200).json(recipe);
    }).catch((err)=>{
        res.status(400).json(err);
        console.log(err);
    })
}

module.exports = {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
    getRecipeById
}

