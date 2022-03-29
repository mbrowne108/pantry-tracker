import React from 'react';
import PantryCard from './PantryCard.js'
import NewIngredientForm from './NewIngredientForm.js'

function Pantry({ ingredients, onNewIngredient, onDeleteIngredient, onUpdateIngredient }) {
  return (
    <div className='container'>
      <br/>
      <h3 className='text-center'>Pantry</h3>
        <div className="list-group">
          {ingredients.map((ingredient) => <PantryCard key={ingredient.id} ingredient={ingredient} onDeleteIngredient={onDeleteIngredient} onUpdateIngredient={onUpdateIngredient} />)}
        </div>
        <br/>
        <button data-bs-toggle="collapse" data-bs-target="#form">Add new item</button>
        <NewIngredientForm ingredients={ingredients} onNewIngredient={onNewIngredient} /> 
    </div>
  );
}

export default Pantry;