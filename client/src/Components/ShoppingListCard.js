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
        <h6 key={ingredient.id} className={`row list-group-item-${itemColor(ingredient)}`}>
            <h6 className='col-sm-8'>{ingredient.name + ': ' + ingredient.measurement}</h6>
            <button className='btn btn-outline-secondary btn-sm col-sm-1' onClick={decreaseItem}>➖</button>
            <p className='h4 text-center col-sm-1' name="amount">{itemAmount}</p>
            <button className='btn btn-outline-secondary btn-sm col-sm-1' onClick={increaseItem}>➕</button>
            <button className='btn btn-primary btn-sm col-sm-1' onClick={handleUpdate}> ✔️</button>
        </h6>
    )
}

export default ShoppingListCard;