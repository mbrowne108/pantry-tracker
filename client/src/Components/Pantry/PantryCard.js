import React from 'react';

function PantryCard({ ingredient, onDeleteIngredient, onUpdateIngredient, itemColor }) {

    function handleDelete() {
        const result = window.confirm(`Are you sure you want to delete ${ingredient.name}?`)
        if (result) {
            fetch(`/ingredients/${ingredient.id}`, {
                method: "DELETE",
            })
                .then(r => r.json())
                .then(() => onDeleteIngredient(ingredient))
        }
    }

    function handleUpdate(e) {
        let btnName = ''
        let value = ''

        if (e.target.name === "in_shopping_list") {
        
            btnName = e.target.name
            console.log(btnName)
            value = !ingredient.in_shopping_list 
        } else if (e.target.name === "increase") {
            btnName = 'amount'
            value = ingredient.amount + 1
        } else if (e.target.name === "decrease") {
            btnName = 'amount'
            value = ingredient.amount > 0 ? ingredient.amount - 1 : ingredient.amount = 0
        } 

        fetch(`/ingredients/${ingredient.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                [btnName]: value
            }),
        })
            .then(r => r.json())
            .then((updatedIngredient) => onUpdateIngredient(updatedIngredient))
    } 

    return (
        <h5 className={`row list-group-item-${itemColor(ingredient)}`}>
            <button className='btn btn-outline-primary text-center col-sm-1'>{ingredient.amount}</button>
            <p className="col-sm-7">{' ' + ingredient.name + ': ' + ingredient.measurement}</p>
            {ingredient.amount > 0 ?
                <button className='btn btn-outline-secondary activebtn-sm col-sm-1' name="decrease" onClick={handleUpdate}>➖</button> :
                <button className='btn btn-outline-secondary btn-sm col-sm-1' disabled name="decrease" onClick={handleUpdate}>➖</button>
            }
            <button className='btn btn-outline-secondary btn-sm col-sm-1' name="increase" onClick={handleUpdate}>➕</button>
            {<button className='btn btn-primary btn-sm col-sm-1' onClick={handleDelete}>❌</button>}
            {!ingredient.in_shopping_list ? 
                <button className='btn btn-primary active btn-sm col-sm-1' name="in_shopping_list" onClick={handleUpdate}>🛒</button> :
                <button className='btn btn-primary btn-sm col-sm-1' disabled>🛒</button>
            }
        </h5>
    )
}

export default PantryCard;