import React from 'react';
import { recipes } from '../data';

const RecipeList = () => {
  return (
    <div style={{ color: 'black' }}>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h1>{recipe.name}</h1>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
