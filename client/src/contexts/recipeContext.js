import {createContext, useState} from "react"; 

export const RecipeContext = createContext();

const RecipeProvider = ({children}) => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [recipeTable, setProductTable] = useState(false);

    const fetchData = async()=>{
        const response = await fetch(
            'http://localhost:8080/'
        );
        if(response.ok){
            const jsonData = await response.json();
            setRecipes(jsonData.data);
            setLoading(false);
        }else{
            setLoading(false);
            setError(true);
            throw new Error('Network response was not ok!');
        }
    }

    return(
        <RecipeContext.Provider value={{recipes, loading, error, fetchData, recipeTable, setProductTable}}>
            {" "}
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeProvider;