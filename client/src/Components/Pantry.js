import React from 'react';

function Pantry({ ingredients }) {
  return (
    <div>
      <h3>Pantry</h3>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <div>
                <li key={ingredient.id}>{ingredient.name} {<button>Add to Shopping List</button>}</li>
              </div>
            )
          })}
        </ul>
    </div>
  );
}

export default Pantry;