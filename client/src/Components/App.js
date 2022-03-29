import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import RecipesContainer from './RecipesContainer.js'
import Pantry from './Pantry.js'
import ShoppingList from './ShoppingList.js'
import NavBar from './NavBar.js'

function App() {
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch('/recipes')
    .then(r => r.json())
    .then(data => setRecipes(data))
  }, [])

  useEffect(() => {
    fetch('/ingredients')
    .then(r => r.json())
    .then(data => setIngredients(data))
  }, [])

  function onNewIngredient(newIngredient) {
    const newIngredientArray = [...ingredients, newIngredient]
    setIngredients(newIngredientArray)
    alert(`${newIngredient.name} has been added to your pantry`)
  }

  function onDeleteIngredient(deletedIngredient) {
    const updatedIngredients = ingredients.filter((ingredient) => ingredient.id !== deletedIngredient.id)
    setIngredients(updatedIngredients)
    alert(`You have deleted ${deletedIngredient.name} from your pantry`)
  }

  function onUpdateIngredient(updatedIngredient) {
    const updatedIngredients = ingredients.map((ingredient) => {
      if (ingredient.id === updatedIngredient.id) {
        return updatedIngredient
      } else {
        return ingredient
      }
    })
    setIngredients(updatedIngredients)
  }

  return (
    <div>
      <header className="App-header">
        <h1 className='jumbotron display-2 text-center'>Recipes/Pantry/Shopping List App</h1>
        <NavBar />
        <Routes>
          <Route 
            exact path="/" 
            element={<RecipesContainer className='container' recipes={recipes} />}
          />
          <Route 
            exact path="/pantry" 
            element={<Pantry ingredients={ingredients} onNewIngredient={onNewIngredient} onDeleteIngredient={onDeleteIngredient} onUpdateIngredient={onUpdateIngredient} />}
          />
          <Route 
            exact path="/shoppinglist" 
            element={<ShoppingList ingredients={ingredients} onUpdateIngredient={onUpdateIngredient} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;