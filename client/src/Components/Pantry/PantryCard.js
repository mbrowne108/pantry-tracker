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
            <button className='btn btn-outline-primary text-center col-1'>{ingredient.amount}</button>
            <p className="col-7">{' ' + ingredient.name + ': ' + ingredient.measurement}</p>
            {ingredient.amount > 0 ?
                <button className='btn btn-outline-secondary activebtn-sm col-1 fa fa-minus' name="decrease" onClick={handleUpdate}></button> :
                <button className='btn btn-outline-secondary btn-sm col-1 fa fa-minus' disabled name="decrease" onClick={handleUpdate}></button>
            }
            <button className='btn btn-outline-secondary btn-sm col-1 fa fa-plus' name="increase" onClick={handleUpdate}></button>
            {<button className='btn btn-primary btn-sm col-1 fa fa-trash' onClick={handleDelete}></button>}
            {!ingredient.in_shopping_list ? 
                <button className='btn btn-primary active btn-sm col-1 fa fa-cart-plus' name="in_shopping_list" onClick={handleUpdate}></button> :
                <button className='btn btn-primary btn-sm col-1 fa fa-cart-plus' disabled></button>
            }
        </h5>
    )
}

export default PantryCard;