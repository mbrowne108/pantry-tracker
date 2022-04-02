import React, { useState } from 'react';

function NewRecipeForm({ ingredients, onNewRecipe }) {
    const [errors, setErrors] = useState([])
    const [ingredientFields, setIngredientFields] = useState([
        {measurements: '', ing_id: ''}
    ])


    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        ingredient_ids: [],
        measurements: [],
    })

    function addIngredientFields() {
        const newField = {measurements: '', ing_id: ''}
        setIngredientFields([...ingredientFields, newField])
    }

    function handleChange(e, index) {
        let value = e.target.value

        if (e.target.name === "ingredient_ids") {
            const options = e.target.options
            value = []
            ingredientFields[index].ing_id = e.target.value
            for (let i = 0, l = ingredientFields.length; i < l; i++) {
                for (var oi = 0, ol = options.length; oi < ol; oi++) {
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

    function formSubmit(e) {
        console.log(formData)
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
        <div id="form" className="collapse container col-sm-6 card bg-light">
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



                {/* NEW STUFF */}
                {ingredientFields.map((input, index) => {
                    return (
                        <div className='row' key={index}>
                            <div className='col-sm-4'>
                                <input className='form-control' name="measurements" placeholder="Measure" value={input.measurements} onChange={e => handleChange(e,index)}/>
                            </div>
                            <div className='col-sm-6'>
                                <select className='form-select' name="ingredient_ids" onChange={e => handleChange(e,index)}>
                                    <option value=''>Choose Ingredient</option>
                                    {ingredients.map((ingredient) => {
                                        return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                                    })}
                                </select>
                            </div>
                            <div className='col-sm-1'>
                                <button className="btn-outline-secondary btn-sm" type="button">➖</button>
                            </div>
                        </div>
                    )
                })}
                <div className='text-center'>
                    <br/>
                    <button type="button" className="btn-outline-secondary btn-sm col-sm-4" onClick={addIngredientFields}>➕</button>
                </div>
                {/* NEW STUFF */}


                {/* OLD STUFF */}
                {/* <div className='mb-3'>
                    <label>Recipe Ingredients <small>(Ctrl+Click for multiple)</small></label>
                    <select name="ingredient_ids" multiple onChange={handleChange} className='form-select'>
                        {ingredients.map((ingredient, index) => {
                            return <option key={ingredient.id} value={index}>{ingredient.name}</option>
                        })}
                    </select>
                </div> */}
                {/* OLD STUFF */}

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
    );
}

export default NewRecipeForm;