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
            alert(`You have added ${ingredient.name} to your shopping list`)
    } 

    return (
        <h5 className={`row list-group-item-${itemColor(ingredient)}`}>
            <span className='badge rounded-pill bg-primary col-sm-1'>{ingredient.amount}</span>
            <p className="col-sm-9">{' ' + ingredient.name + ': ' + ingredient.measurement}</p>
            {<button className='btn btn-primary btn-sm col-sm-1' onClick={handleDelete}>❌</button>}
            {!ingredient.in_shopping_list ? 
                <button className='btn btn-primary active btn-sm col-sm-1' onClick={handleUpdate}>🛒</button> :
                <button className='btn btn-primary btn-sm col-sm-1' disabled>🛒</button>
            }
        </h5>
    )
}

export default PantryCard;