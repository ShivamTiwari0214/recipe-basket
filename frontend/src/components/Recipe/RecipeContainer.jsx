import React, { useContext, useEffect, useState } from 'react';
import PromptDataContext from '../../context/PromptDataContext';
import './recipeContainer.css';

const RecipeContainer = () => {
  const { promptData } = useContext(PromptDataContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(promptData)
        });
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
      setLoading(false);
    };

    if (promptData) {
      fetchRecipes();
    }
  }, [promptData]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="recipe-container">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions.map((instruction, i) => (
                <li key={i}>{instruction}</li>
              ))}
            </ol>
            <h3>Tips</h3>
            <ul>
              {recipe.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeContainer;
