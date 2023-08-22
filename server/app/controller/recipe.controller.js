const RecipeModel=require('../model/recipe.model');

/* GET recipe listing. */
module.exports.getRecipe = async (req, res, next) => {
    try {
        const recipes= await RecipeModel.find({});
        
        return res.status(200).send({message:"All Recipes data in your database: ",data:recipes});
    } catch (error) {
        return res.status(400).send({message:"Error Occured!",error:error.message});
    }
};

/* GET ONE recipe listing. */
module.exports.finOne = async (req, res, next) => {
    try {
        const recipeId = req.params.recipeId;
        const recipe = await RecipeModel.findById(recipeId);
        
        return res.status(200).send({message:"Found recipe : ",data:recipe});
    } catch (error) {
        return res.status(400).send({message:"Error Occured!",error:error.message});
    }
};

//CREATE recipe
module.exports.createRecipe = async (req, res, next) =>  {
    try {
        const {name,img_Url,ingredients,type,cuisine}=req.body;
        const newRecipe= new RecipeModel({ name, img_Url, ingredients,type, cuisine });
        await newRecipe.save();
    
        return res.status(200).send({message:"Data has been added!",data:newRecipe});
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured!",error:error.message});
    }
};
  
//delete recipe
module.exports.deleteRecipe = async (req, res, next) => {
    try {
        const recipeId= req.params.recipeId;
        await RecipeModel.findByIdAndDelete(recipeId);
    
        return res.status(200).send({message:"Recipe has been deleted!"});
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured in delete!",error:error.message});
}};
  
//update recipe
module.exports.updateRecipe = async (req, res, next) =>{
    try {
        const recipeId= req.params.recipeId;
        const {name,img_Url,ingredients,type,cuisine}=req.body;
        await RecipeModel.findByIdAndUpdate(recipeId,{name,img_Url,ingredients,type,cuisine});
    
        return res.status(200).send({message:"Recipe has been updated!"});
    
    } catch (error) {
        return res.status(400).send({message:"Error Occured in update!",error:error.message});
    }
};