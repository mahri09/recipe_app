import { useEffect, useContext, useState } from "react";
import { RecipeContext } from "../contexts/recipeContext";
import {Link, useParams, Navigate} from 'react-router-dom';
import { ThreeDots } from "react-loading-icons";
import '../style/recipeList.css';


function RecipeList(){
    const {recipes, loading, error, fetchData} = useContext(RecipeContext);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState();
    
    useEffect(()=>{
        fetchData().catch(console.error);
    }, [])
    console.log(recipes)
    useEffect(()=>{
        
    },[])

    return(
        <div className="recipe-list">
            <div className="search-bar">
                <input type="search" name="search" className="search-input" />
            </div>
            <div>
                {loading?(
                     <ThreeDots stroke="#FFE61B" style={{"margin-left":"5rem"}}/>
                ): error?(
                    <div className="text-danger">
                        {" "}
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
                            width={"50px"}
                            alt='error-img'
                    /> {" "}
              <p>Network response was not ok!</p>
            </div>
                ): (
                    <div className="card-container">
                        {recipes.map(({id, name, img_Url, ingredients, type, cuisine},i)=>{
                            return (
                                <div className="recipe-card" key={id}>
                                    <div className="image-container">
                                        <img 
                                            alt="recipe-image" 
                                            src={img_Url}/>
                                    </div>
                                    <div className="card-text">
                                        <h3 className="recipe-name">{name}</h3>
                                        <p>Ingredients: {ingredients.map(i=>i + ', ')}</p>
                                        <p>Type: {type}</p>
                                        <p>Cuisine: {cuisine}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default RecipeList;