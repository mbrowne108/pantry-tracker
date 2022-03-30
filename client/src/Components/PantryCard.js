import React from 'react';

function PantryCard({ ingredient, onDeleteIngredient, onUpdateIngredient, itemColor }) {
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
        <h6 className={`row list-group-item-${itemColor(ingredient)}`}>
          <span className='badge rounded-pill bg-primary col-sm-1'>{ingredient.amount}</span>
          <h6 className="col-sm-9">{' ' + ingredient.name + ': ' + ingredient.measurement}</h6>
          {<button className='btn btn-primary btn-sm col-sm-1' onClick={handleDelete}>❌</button>}
          {<button className='btn btn-primary btn-sm col-sm-1' onClick={handleUpdate}>🛒</button>}
        </h6>
    )
}

export default PantryCard;