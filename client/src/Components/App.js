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

  console.log(recipes)

  return (
    <div>
      <header className="App-header">
        <h1>Recipes/Pantry/Shopping List App</h1>
        <NavBar />
        <Routes>
          <Route 
            exact path="/" 
            element={<RecipesContainer recipes={recipes} />}
          />
          <Route 
            exact path="/pantry" 
            element={<Pantry ingredients={ingredients} />}
          />
          <Route 
            exact path="/shoppinglist" 
            element={<ShoppingList ingredients={ingredients} />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;