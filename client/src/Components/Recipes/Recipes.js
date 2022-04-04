import React, { useState } from 'react';
import RecipeCard from './RecipeCard.js'
import NewRecipeForm from './NewRecipeForm.js'

function Recipes({ recipes, ingredients, itemColor, onUpdateIngredient, onDeleteRecipe, onNewRecipe }) {
  const [searchValue, setSearchValue] = useState('')

  function handleSearch(e) {
    setSearchValue(e.target.value)
  }

  const searchedRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchValue.toLowerCase()))
  
  return (
    <div>
      <br/>
      <div className="container accordion">
        <h3 className='text-center display-6'>Recipes</h3>
        <input type="search" className="form-control rounded col-4" placeholder="Search..." value={searchValue} onChange={handleSearch}/>
        {searchedRecipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} onUpdateIngredient={onUpdateIngredient} onDeleteRecipe={onDeleteRecipe} itemColor={itemColor} />
        })}
      </div>
      <br/>
      <div className="container text-center"> 
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#rec-form-modal">Add New Recipe</button>
      </div>
      <br/>
      <div className='modal fade' id="rec-form-modal">
        <NewRecipeForm ingredients={ingredients} onNewRecipe={onNewRecipe} /> 
      </div>
    </div>
  );
}

export default Recipes;