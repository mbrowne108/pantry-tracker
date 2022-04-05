# Phase 4 Project - Back End

# Kitchen Kingpin

This is an app keep track of user made recipes, ingredients in the user's pantry, and a shopping list.

## Purpose of the App

This is the culmination of a Flatiron School phase teaching Ruby, Active Record, and Rails. It also utilizes React knowledge from previous phases (React front end sold separately)

## Technologies used

As mentioned above, this is the culmination of my Flatiron School knowledge to date. In this project I use the following:

    1. CSS (Bootstrap)
    2. HTML/JSX
    3. React
    4. Ruby
    5. Active Record
    6. Rails

## Back End (Ruby, ActiveRecord, Rails)
To start the back end server, run : ``rails s`` The server will be hosted on [http://localhost:3000](http://localhost:3000)

The front end consists of React components fetching data from our JSON API, using fetch requests to perform CRUD actions.

Additionally, the site is hosted on Heroku at [pantry-tracker-app.herokuapp.com/](https://pantry-tracker-app.herokuapp.com/). The following actions below can be accessed on the remote server by replacing **localhost:3000** with **pantry-tracker-app.herokuapp.com/**.

### READ
- #### GET [localhost:3000/recipes](http://localhost:3000/recipes): Gets a list of every recipe in the database, with their corresponding ingredients.
- #### GET [localhost:3000/recipes/:id](http://localhost:3000/recipes/:id): Gets a specific recipe from the database.
- #### GET [localhost:3000/ingredients](http://localhost:3000/ingredients): Gets a list of every ingredient in the database, with their corresponding recipe.
- #### GET [localhost:3000/ingredients/:id](http://localhost:3000/ingredients/:id): Gets a specific ingredient from the database.
- #### GET [localhost:3000/me](http://localhost:3000/me): Gets the currently logged in user.

### UPDATE
- #### PATCH [localhost:3000/ingredients/:id](http://localhost:3000/ingredients/:id): Updates an ingredient, specifically whether it is in the shopping cart, and the amount in the pantry.

### CREATE
- #### POST [localhost:3000/recipes](http://localhost:3000/recipes): Creates a new recipe, with corresponding ingredients.
- #### POST [localhost:3000/ingredients](http://localhost:3000/ingredients): Creates a new ingredient, with corresponding recipes. 
- #### POST [localhost:3000/signup](http://localhost:3000/signup): Creates a new user with authentication.
- #### POST [localhost:3000/login](http://localhost:3000/login): Creates a new session with an associated user.

### DELETE
- #### DELETE [localhost:3000/recipes/:id](http://localhost:3000/recipes/:id): Deletes a recipe (subject to user auth).
- #### DELETE [localhost:3000/ingredients/:id](http://localhost:3000/recipes/:id): Deletes an ingredient (subject to user auth).
- #### DELETE [localhost:3000/logout](http://localhost:3000/logout): Deletes a user's current session.

## License
[MIT](https://choosealicense.com/licenses/mit/)