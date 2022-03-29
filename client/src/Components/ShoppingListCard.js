import React, { useState } from 'react';

function ShoppingListCard({ ingredient, onUpdateIngredient }) {
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

    function itemColor(item) {
        if (item.amount >= 3) {
            return 'success'
        } else if (item.amount > 0) {
            return 'warning'
        } else if (item.amount === 0) {
            return 'danger'
        }
    }

    return (
        <h6 key={ingredient.id} className={`list-group-item-${itemColor(ingredient)}`}>
            {ingredient.name + ': ' + ingredient.measurement}
            {<button className='btn btn-primary btn-sm float-end' onClick={handleUpdate}> ✔️</button>}
            {<button className='btn btn-outline-secondary btn-sm float-end' onClick={increaseItem}>➕</button>}
            {<p className='h4 align-text-bottom float-end' name="amount">{itemAmount}</p>}
            {<button className='btn btn-outline-secondary btn-sm float-end' onClick={decreaseItem}>➖</button>}
        </h6>
    )
}

export default ShoppingListCard;