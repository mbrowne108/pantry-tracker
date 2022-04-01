import React, { useState } from 'react';

function NewRecipeForm({ ingredients, onNewRecipe }) {
    const [errors, setErrors] = useState([])
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
        .then(r => {
            if (r.ok) {
                r.json()
                .then((newRecipe) => onNewRecipe(newRecipe))
                setFormData({
                    name: '',
                    instructions: '',
                    ingredients: []
                })
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })      
    }

    return (
        <div id="form" className="collapse container col-sm-4 card bg-light">
            <br/>
            <h5 className='text-center card-title'>New Recipe Form</h5>
            <form onSubmit={formSubmit}>
                <div className='mb-3'>
                    {errors.map(err => {
                        return (
                            <div className='alert alert-danger alert-dismissible fade show' key={err}>
                                {err}
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            </div>)
                    })}
                </div>
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