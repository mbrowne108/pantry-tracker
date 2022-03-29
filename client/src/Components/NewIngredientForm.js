import React, { useState } from 'react';

function NewIngredientForm({ onNewIngredient }) {
    const [formData, setFormData] = useState({
        name: '',
        amount: 0,
        measurement: ''
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function formSubmit(e) {
        e.preventDefault()
        fetch(`/ingredients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        })
          .then(r => r.json())
          .then((newIngredient) => onNewIngredient(newIngredient))
        setFormData({
            name: '',
            amount: 0,
            measurement: ''
        })
    }

    return (
        <div id="form" className="collapse">
            <h4 className='text-center'>New Item Form</h4>
            <form onSubmit={formSubmit}>
                <div className='form-group'>
                    <label>Ingredient Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Ingredient Measurement (lbs, oz, etc.)</label>
                    <input type="text" name="measurement" value={formData.measurement} onChange={handleChange} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Ingredient Amount</label>
                    <input type="text" name="amount" value={formData.amount} onChange={handleChange} className='form-control'/>
                </div>
                <button type="submit" className='btn btn-primary'>Add Item</button>
            </form>
        </div>
    );
}

export default NewIngredientForm;