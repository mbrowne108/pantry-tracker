import React from 'react';
import PantryCard from './PantryCard.js'
import NewIngredientForm from './NewIngredientForm.js'

function Pantry({ ingredients, onNewIngredient, onDeleteIngredient, onUpdateIngredient, itemColor }) {
  return (
    <div className='container'>
      <br/>
      <h3 className='text-center'>Pantry</h3>
        <div className="list-group">
          {ingredients.map((ingredient) => <PantryCard key={ingredient.id} ingredient={ingredient} onDeleteIngredient={onDeleteIngredient} onUpdateIngredient={onUpdateIngredient} itemColor={itemColor}/>)}
        </div>
        <br/>
        <div className="container text-center"> 
          <button className="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#form">Add New Item</button>
        </div>  
        <NewIngredientForm ingredients={ingredients} onNewIngredient={onNewIngredient} />
    </div>
  );
}

export default Pantry;