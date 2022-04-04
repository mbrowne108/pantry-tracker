import React, { useState } from 'react';

function ShoppingListCard({ ingredient, onUpdateIngredient, itemColor }) {
    const [itemAmount, setItemAmount] = useState(0)

    function increaseItem() {
        setItemAmount(() => itemAmount + 1)
    }

    function decreaseItem() {
        itemAmount > 0 ? setItemAmount(() => itemAmount - 1) : setItemAmount(0)
    }

    function handleUpdate() {
        fetch(`/ingredients/${ingredient.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: ingredient.amount + itemAmount,
                in_shopping_list: false
            }),
        })
            .then(r => r.json())
            .then((updatedIngredient) => onUpdateIngredient(updatedIngredient))
            setItemAmount(0)
    }

    return (
        <div key={ingredient.id} className={`row h5 list-group-item-${itemColor(ingredient)}`}>
            <h6 className='col-8'>{ingredient.name + ': ' + ingredient.measurement}</h6>
            {itemAmount > 0 ?
                <button className='btn btn-outline-secondary activebtn-sm col-1 fa fa-minus' name="decrease" onClick={decreaseItem}></button> :
                <button className='btn btn-outline-secondary btn-sm col-1 fa fa-minus invisible' disabled name="decrease" onClick={decreaseItem}></button>
            }
            <p className='h4 text-center col-1' name="amount">{itemAmount}</p>
            <button className='btn btn-outline-secondary btn-sm col-1 fa fa-plus' onClick={increaseItem}></button>
            <button className='btn btn-primary btn-sm col-1 fa fa-check' onClick={handleUpdate}></button>
        </div>
    )
}

export default ShoppingListCard;