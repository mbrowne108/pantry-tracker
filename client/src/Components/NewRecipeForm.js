import React, { useState } from 'react';

function NewRecipeForm({  }) {
    const [formData, setFormData] = useState({
        name: '',
        instructions: '',
        ingredients: []
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    console.log(formData)

    // function formSubmit(e) {
    //     e.preventDefault()
    //     fetch(`/recipes`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(formData),
    //     })
    //       .then(r => r.json())
    //       .then((newIngredient) => onNewIngredient(newIngredient))
    //     setFormData({
    //         name: '',
    //         amount: 0,
    //         measurement: '',
    //         in_shopping_list: false
    //     })
    // }

    return (
        <div id="form" className="collapse container col-sm-4">
            <h5 className='text-center'>New Recipe Form</h5>
            <form>
                <div className='mb-3'>
                    <label>Recipe Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Ingredient:</label>
                    <input type="text" name="ingredients" value={formData.ingredient} onChange={handleChange} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Recipe Instructions</label>
                    <textarea type="text" name="instructions" value={formData.instructions} onChange={handleChange} className='form-control'/>
                </div>
                <button type="submit" className='btn btn-primary'>Add Item</button>
            </form>
        </div>
    );
}

export default NewRecipeForm;