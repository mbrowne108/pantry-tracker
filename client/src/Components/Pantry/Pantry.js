import React, { useState } from 'react';
import PantryCard from './PantryCard.js'
import NewIngredientForm from './NewIngredientForm.js'

function Pantry({ ingredients, onNewIngredient, onDeleteIngredient, onUpdateIngredient, itemColor }) {
  const [searchValue, setSearchValue] = useState('')

  function handleSearch(e) {
    setSearchValue(e.target.value)
  }

  const searchedIngredients = ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div className='container'>
      <br/>
      <h3 className='text-center display-6'>Pantry</h3>
      <input type="search" className="form-control rounded col-4" placeholder="Search..." value={searchValue} onChange={handleSearch}/>
      <div className="list-group">
        {searchedIngredients.map((ingredient) => <PantryCard key={ingredient.id} ingredient={ingredient} onDeleteIngredient={onDeleteIngredient} onUpdateIngredient={onUpdateIngredient} itemColor={itemColor} />)}
      </div>
      <br/>
      <div className="container text-center"> 
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ing-form-modal">Add New Item</button>
      </div>
      <br/>
      <div className='modal fade' id="ing-form-modal">
        <NewIngredientForm ingredients={ingredients} onNewIngredient={onNewIngredient} />
      </div>  
    </div>
  );
}

export default Pantry;