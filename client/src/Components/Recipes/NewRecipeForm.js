import React, { useState } from 'react';

function NewRecipeForm({ ingredients, onNewRecipe }) {
    const [errors, setErrors] = useState([])
    const [ingredientFields, setIngredientFields] = useState([
        {measurements: '', ing_id: '', id: Math.floor(Math.random() * 10000)}
    ])

    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        ingredient_ids: [],
        measurements: [],
    })

    function addIngredientFields() {
        const newField = {measurements: '', ing_id: '', id: Math.floor(Math.random() * 10000)}
        setIngredientFields([...ingredientFields, newField])
    }

    function removeIngredientFields(index) {
        let data = [...ingredientFields]
        data.splice(index, 1)
        setIngredientFields(data)

        formData.measurements.splice(index, 1)
        formData.ingredient_ids.splice(index, 1)
    }

    function handleChange(e, index) {
        let value = e.target.value

        if (e.target.name === "ingredient_ids") {
            const options = e.target.options
            console.log(options)
            value = []
            ingredientFields[index].ing_id = e.target.value
            for (let i = 0, l = ingredientFields.length; i < l; i++) {
                for (let oi = 0, ol = options.length; oi < ol; oi++) {
                    if (options[oi].selected) {
                        value.push(ingredientFields[i].ing_id)
                    }
                }
            }  
        } else if (e.target.name === "measurements") {
            value = []
            ingredientFields[index].measurements = e.target.value
            for (let i = 0, l = ingredientFields.length; i < l; i++) {
                value.push(ingredientFields[i].measurements)
            }
        }
        setFormData({...formData, [e.target.name]: value})
    }

    console.log(formData)

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
                    ingredients: [],
                    measurements: []
                })
                setIngredientFields([{measurements: '', ing_id: '', id: Math.floor(Math.random() * 10000)}])
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })      
    }

    return (
        <div className="modal-dialog container col-sm-6 bg-light">
            <div className='modal-content'>
                <div className='modal-header'>
                    <h5 className='display-6'>New Recipe Form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className='modal-body'>
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
                        {ingredientFields.map((input, index) => {
                            return (
                                <div className='row' key={input.id}>
                                    <div className='col-sm-4'>
                                        <input 
                                            className='form-control' 
                                            name="measurements" 
                                            placeholder="Measure" 
                                            value={input.measurements} 
                                            onChange={e => handleChange(e, index)}
                                        />
                                    </div>
                                    <div className='col-sm-6'>
                                        <select className='form-select' name="ingredient_ids" onChange={e => handleChange(e, index)}>
                                            <option value=''>Choose Ingredient</option>
                                            {ingredients.map((ingredient) => {
                                                return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <div className='col-sm-1'>
                                        <button type="button" className="btn-outline-secondary btn-sm" onClick={() => removeIngredientFields(index)}>➖</button>
                                    </div>
                                </div>
                            )
                        })}
                        <div className='text-center'>
                            <br/>
                            <button type="button" className="btn-outline-secondary btn-sm col-sm-4" onClick={addIngredientFields}>➕</button>
                        </div>
                        <div className='mb-3'>
                            <br/>
                            <label>Recipe Instructions</label>
                            <textarea type="text" name="instructions" value={formData.instructions} onChange={handleChange} className='form-control'/>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-primary col-sm-4'>Add Recipe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewRecipeForm;