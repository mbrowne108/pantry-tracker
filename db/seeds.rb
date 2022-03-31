RecipeIngredient.delete_all
Ingredient.delete_all
Recipe.delete_all
User.delete_all

puts "Seeding users..."
matt = User.create(username: "mbrowne", password: "123")

puts "Seeding ingredients..."
spaghetti = matt.ingredients.create(name: 'Spaghetti', amount: 5, measurement: 'lb(s)', in_shopping_list: false)
meatballs = matt.ingredients.create(name: 'Meatballs', amount: 1, measurement: 'lb(s)', in_shopping_list: false)
sauce = matt.ingredients.create(name: 'Pasta Sauce', amount: 3, measurement: 'jar(s)', in_shopping_list: false)
onions = matt.ingredients.create(name: 'Onions', amount: 6, measurement: 'onion(s)', in_shopping_list: false)
eggs = matt.ingredients.create(name: 'Eggs', amount: 2, measurement: 'dozen', in_shopping_list: false)
flour = matt.ingredients.create(name: 'Flour', amount: 5, measurement: 'lb(s)', in_shopping_list: false)
butter = matt.ingredients.create(name: 'Butter', amount: 0, measurement: 'stick(s)', in_shopping_list: false)
sugar = matt.ingredients.create(name: 'Sugar', amount: 1, measurement: 'lb(s)', in_shopping_list: false)

puts "Seeding recipes..."
cake = matt.recipes.create(name: 'Pound Cake', instructions: '1. Mix wet ingredients\n2. Mix dry ingredients\n3. Mix wet ingredients into dry ingredients\n4. Bake at 350F for 35 minutes')
cake.ingredients << eggs
cake.ingredients << flour
cake.ingredients << butter
cake.ingredients << sugar

pasta = matt.recipes.create(name: 'Spaghetti and Meatballs', instructions: '1. Cook meatballs with onions\n2. Add pasta sauce\n3. Cook pasta\n4. Add cooked sauce to cooked pasta')
pasta.ingredients << spaghetti
pasta.ingredients << meatballs
pasta.ingredients << sauce
pasta.ingredients << onions

omelette = matt.recipes.create(name: 'Omelette', instructions: '1. Heat butter in pan\n2. Cook onions in butter\n3. Add whipped eggs\n4. Flip omelette')
omelette.ingredients << eggs
omelette.ingredients << butter
omelette.ingredients << onions

puts "Seeding complete!"