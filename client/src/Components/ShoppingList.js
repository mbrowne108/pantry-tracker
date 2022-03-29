import React from 'react';

function ShoppingList({ ingredients }) {
  return (
    <div className='col-sm-6'>
      <br/>
      <h3 className='text-center'>Shopping List</h3>
      <ul>
          {ingredients.map((ingredient) => {
            if (ingredient.amount < 2) {
              return <li key={ingredient.id}>{ingredient.name}</li>
            } else {
              return null
            }
          })}
        </ul>
    </div>
  );
}

export default ShoppingList;