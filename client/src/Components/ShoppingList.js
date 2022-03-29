import React from 'react';
import ShoppingListCard from './ShoppingListCard.js'

function ShoppingList({ ingredients, onUpdateIngredient }) {
  const filteredIngredients = ingredients.filter((ingredient) => ingredient.in_shopping_list === true)

  return (
    <div className='container'>
      <br/>
      <h3 className='text-center'>Shopping List</h3>
        <div className="list-group">
          {filteredIngredients.map((ingredient) => <ShoppingListCard key={ingredient.id} ingredient={ingredient} onUpdateIngredient={onUpdateIngredient}/>)}
        </div>
    </div>
  );
}

export default ShoppingList;