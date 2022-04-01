import React from 'react';
import ShoppingListCard from './ShoppingListCard.js'

function ShoppingList({ ingredients, onUpdateIngredient, itemColor }) {
  const filteredIngredients = ingredients.filter((ingredient) => ingredient.in_shopping_list === true)

  return (
    <div className='container'>
      <br/>
      <h3 className='text-center display-6'>Shopping List</h3>
        <div className="list-group">
          {filteredIngredients.map((ingredient) => <ShoppingListCard key={ingredient.id} ingredient={ingredient} onUpdateIngredient={onUpdateIngredient} itemColor={itemColor}/>)}
        </div>
    </div>
  );
}

export default ShoppingList;