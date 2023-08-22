const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img_Url: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Array,
    required:true
  },
  type:{
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required:true
  }
},{timestamps:true});

module.exports = mongoose.model("recipe", RecipeSchema);