import React from 'react';

function RecipeCard({ recipe, itemColor, onUpdateIngredient, onDeleteRecipe }) {
    const newInstructions = recipe.instructions.replace('\\n','\n')
    const splitInstructions = newInstructions.split(/\r?\n/)

    function handleUpdate(e) {
        const ingredient = recipe.ingredients[e.target.value]
        console.log(ingredient)
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

    function handleDelete() {
        fetch(`/recipes/${recipe.id}`, {
            method: "DELETE",
        })
            .then(r => r.json())
            .then(() => onDeleteRecipe(recipe))
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
                <h5>Ingredients:</h5>
                <ul className="list-group">
                    {recipe.ingredients.map((ingredient, index) => {
                        return (
                            <div className='row container' key={ingredient.id}>
                                <h6 className={`list-group-item-${itemColor(ingredient)} col-sm-5`}>{ingredient.name}</h6>
                                {!ingredient.in_shopping_list ? 
                                    <button className='btn btn-primary active btn-sm col-sm-1' value={index} onClick={handleUpdate}>🛒</button> :
                                    <button className='btn btn-primary btn-sm col-sm-1' disabled>🛒</button>
                                }
                            </div>
                        )
                    })}
                </ul>
                <h5>Instructions:</h5>
                {splitInstructions.map((inst) => {
                    return <p key={inst} className='col-sm-8'>{inst}</p>
                })}
                <button className='btn btn-primary btn-sm' onClick={handleDelete}>❌ Delete Recipe</button>
            </div>
        </div>
    )
}

export default RecipeCard;