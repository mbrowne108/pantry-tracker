import React, { useState } from 'react';

function NewRecipeForm({ ingredients, onNewRecipe }) {
    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        ingredients: []
    })

    function handleChange(e) {
        let value = e.target.value

        if (e.target.name === "ingredients") {
            const options = e.target.options
            value = []
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(ingredients[i])
                }
            }  
        }
        setFormData({...formData, [e.target.name]: value})
    }

    function formSubmit(e) {
        e.preventDefault()
        fetch(`/recipes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        })
          .then(r => r.json())
          .then((newRecipe) => onNewRecipe(newRecipe))
        setFormData({
            name: '',
            instructions: '',
            ingredients: []
        })
    }

    return (
        <div id="form" className="collapse container col-sm-4">
            <h5 className='text-center'>New Recipe Form</h5>
            <form onSubmit={formSubmit}>
                <div className='mb-3'>
                    <label>Recipe Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Recipe Ingredients <small>(Ctrl+Click for multiple)</small></label>
                    <select name="ingredients" multiple onChange={handleChange} className='form-select'>
                        {ingredients.map((ingredient, index) => {
                            return <option key={ingredient.id} value={index}>{ingredient.name}</option>
                        })}
                    </select>
                </div>
                <div className='mb-3'>
                    <label>Recipe Instructions</label>
                    <textarea type="text" name="instructions" value={formData.instructions} onChange={handleChange} className='form-control'/>
                </div>
                <button type="submit" className='btn btn-primary'>Add Recipe</button>
            </form>
        </div>
    );
}

export default NewRecipeForm;