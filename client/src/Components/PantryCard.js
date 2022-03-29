import React from 'react';

function PantryCard({ ingredient, onDeleteIngredient, onUpdateIngredient }) {
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

  function handleUpdate() {
    fetch(`/ingredients/${ingredient.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            in_shopping_list: !ingredient.in_shopping_list 
        }),
    })
        .then(r => r.json())
        .then((updatedIngredient) => onUpdateIngredient(updatedIngredient))
} 

    return (
        <h6 key={ingredient.id} className={`list-group-item-${itemColor(ingredient)}`}>
          <span className='badge rounded-pill bg-primary'>{ingredient.amount}</span>
          {' ' + ingredient.name + ': ' + ingredient.measurement}
          {<button className='btn btn-primary btn-sm float-end' onClick={handleDelete}>❌</button>}
          {<button className='btn btn-primary btn-sm float-end' onClick={handleUpdate}>🛒</button>}
        </h6>
    )
}

export default PantryCard;