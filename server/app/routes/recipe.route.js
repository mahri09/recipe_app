const express = require('express');
const router = express.Router();
const recipeController = require('../controller/recipe.controller');

router.get('/', recipeController.getRecipe);
router.get('/:recipeId', recipeController.finOne);
router.post('/', recipeController.createRecipe);
router.delete('/:recipeId', recipeController.deleteRecipe);
router.put('/:recipeId', recipeController.updateRecipe);

module.exports = router;