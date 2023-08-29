import HomePage from './pages/HomePage';
import RecipeProvider from './contexts/recipeContext';

function App() {
  return (
    <div >
      <RecipeProvider>
        <HomePage/>
      </RecipeProvider>
    </div>
  );
}

export default App;
