# Phase 4 Project - Front End

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

## Front End (React)
To start the front end server, run : ``npm start --prefix client`` The server will be hosted on [http://localhost:4000](http://localhost:4000)

The front end consists of React components fetching data from our JSON API, using fetch requests to perform CRUD actions.

Additionally, the site is hosted on Heroku at [pantry-tracker-app.herokuapp.com/](https://pantry-tracker-app.herokuapp.com/). The following actions below can be accessed on the remote server by replacing **localhost:4000** with **pantry-tracker-app.herokuapp.com/**.

### READ
- #### GET: ``useEffect`` on the ``/recipes`` and ``/ingredients`` tables reads all data from the API.

### UPDATE
- #### PATCH: In the ``Pantry`` tab, clicking on the ``Shopping Cart``, ``+``, or ``-`` icons updates the corresponding ingredient accordingly (either the amount of ingredients in the pantry, or whether or not it is in the shopping cart).

### CREATE
- #### POST: On either the ``Recipes`` or ``Pantry`` tab, filling out the ``New Recipe/Ingredient Form`` posts a new item to the corresponding table.
- #### POST: On the initial ``Sign Up`` screen, filling out the ``Sign Up Form`` posts a new user to the database, with authentication.
- #### POST: On the initial login screen, filling out the ``Login Form`` posts a new session to the database, with associated user data.

### DELETE
- #### DELETE: On either the ``Recipes`` or ``Pantry`` tab, clicking the ``Trash Can`` icon deletes the corresponding recipe/ingredient (subject to user auth).

## License
[MIT](https://choosealicense.com/licenses/mit/)
