const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipesSchema = new Schema({
    recipe_name :{
        type:String,
        required: true
    } ,
    ingredients : {
        type: [String],
        required: true
    },
    description : {
        type: String,
        required: true
    }

});

const RecipeDetails = mongoose.model('recipedetail',recipesSchema);
module.exports = RecipeDetails;