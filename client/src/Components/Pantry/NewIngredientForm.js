import React, { useState } from 'react';

function NewIngredientForm({ onNewIngredient }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        amount: 0,
        measurement: '',
        in_shopping_list: false
    })

    function handleChange(e) {
        let value = e.target.value

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        setFormData({...formData, [e.target.name]: value})
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
        .then(r => {
            if (r.ok) {
                r.json()
                .then((newIngredient) => onNewIngredient(newIngredient))
                setFormData({
                    name: '',
                    amount: 0,
                    measurement: '',
                    in_shopping_list: false
                })
            } else {
                r.json().then(err => setErrors(err.errors))
            }
        })
    }

    return (
        <div id="form" className="collapse container col-sm-4 card bg-light">
            <br/>
            <h5 className='text-center card-title'>New Item Form</h5>
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
                    <label>Ingredient Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Ingredient Measurement (lbs, oz, etc.)</label>
                    <input type="text" name="measurement" value={formData.measurement} onChange={handleChange} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Ingredient Amount</label>
                    <input type="number" name="amount" value={formData.amount} onChange={handleChange} className='form-control'/>
                </div>
                <div className='form-check'>
                    <input className='form-check-input' type="checkbox" name="in_shopping_list" checked={formData.in_shopping_list} onChange={handleChange}/>
                    <label className='form-check-label' >Add this item to your shopping list?</label>
                </div>
                <button type="submit" className='btn btn-primary'>Add Item</button>  
            </form>
        </div>
    );
}

export default NewIngredientForm;