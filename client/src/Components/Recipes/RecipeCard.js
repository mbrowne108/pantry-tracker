import React, { useState } from 'react';

function RecipeCard({ recipe, user, itemColor, onUpdateIngredient, onDeleteRecipe }) {
    const newInstructions = recipe.instructions.replaceAll('\\n','\n')
    const splitInstructions = newInstructions.split(/\r?\n/)
    const measurements = recipe.measurements.replace('[','').replace(']','').replaceAll('"', '').split(', ')
    const ingredients = recipe.ingredients.map((ing,i) => Object.assign(ing, {measurement: measurements[i]}))
    const [errors, setErrors] = useState([]);

    function handleUpdate(e) {
        const ingredient = ingredients.find(ing => ing.id == e.target.value)

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

    function handleDelete(e) {
        const result = window.confirm(`Are you sure you want to delete ${recipe.name}?`)
        if (result) {
            fetch(`/recipes/${recipe.id}`, {
                method: "DELETE",
            })
            .then(r => {
                if (r.ok) {
                    r.json()
                    .then(() => onDeleteRecipe(recipe))
                } else {
                    r.json().then(err => setErrors(err.errors))
                }
            })
        }
    }

    return (
        <div className='accordion-item'>
            <div className="card-header">
                <button 
                    className='accordion-button h3' 
                    type='button' 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#recipe-details-${recipe.id}`}
                >{recipe.name} 
                </button>
            </div>
            <div id={`recipe-details-${recipe.id}`} className='card-body accordion-collapse collapse hide'>
                <p className='lead small'>Submitted by {user.username}</p>
                <h5>Ingredients:</h5>
                <div className='list-group list-group-horizontal'>
                    <ul className={`list-group-item col-8`}>
                        {ingredients.map((ingredient) => {
                            return (
                                <div className='row' key={ingredient.id}>
                                    <h6 className={`list-group-item-${itemColor(ingredient)} p-2 col-9`}>{ingredient.measurement} — {ingredient.name}</h6>
                                    {!ingredient.in_shopping_list ? 
                                        <button className='btn btn-primary active btn-sm col-3 fa fa-cart-plus' value={ingredient.id} onClick={handleUpdate}></button> :
                                        <button className='btn btn-secondary btn-sm col-3 fa fa-cart-plus' value={ingredient.id} onClick={handleUpdate}></button>
                                    }
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <h5>Instructions:</h5>
                {splitInstructions.map((inst) => {
                    return <p key={inst} className='col-8'>{inst}</p>
                })}
                {errors.map(err => {
                    return (
                        <div className='alert alert-danger alert-dismissible fade show' key={err}>
                            {err}
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        </div>)
                })}
                <button className='btn btn-primary btn-lg fa fa-trash' value={recipe.user.id} onClick={handleDelete}></button>
            </div>
        </div>
    )
}

export default RecipeCard;