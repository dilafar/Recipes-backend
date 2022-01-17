const router = require('express').Router();

const { getRecipes , createRecipe , updateRecipe , deleteRecipe} = require('../controller/recipes');

router.route('/').get(getRecipes);
router.route('/add').post(createRecipe);
router.route('/update/:id').put(updateRecipe);
router.route('/delete/:id').delete(deleteRecipe);



module.exports = router;