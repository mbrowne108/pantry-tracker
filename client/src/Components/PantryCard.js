import React from 'react';

function PantryCard({ ingredient, onDeleteIngredient }) {
  function itemColor(item) {
    if (item.amount >= 3) {
      return 'success'
    } else if (item.amount > 0) {
      return 'warning'
    } else if (item.amount === 0) {
      return 'danger'
    }
  }

  function handleDelete() {
    fetch(`/ingredients/${ingredient.id}`, {
        method: "DELETE",
    })
        .then(r => r.json())
        .then(() => onDeleteIngredient(ingredient))
  } 

    return (
        <a key={ingredient.id} className={`list-group-item-${itemColor(ingredient)}`}>
        <span className='badge rounded-pill bg-primary'>{ingredient.amount}</span>
        {' ' + ' ' + ingredient.name + ': ' + ingredient.measurement}
        {<button className='btn btn-primary btn-sm float-end' onClick={handleDelete}>❌</button>}
        {<button className='btn btn-primary btn-sm float-end'>🛒</button>}
        </a>
    )
}

export default PantryCard;