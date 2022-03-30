RecipeIngredient.delete_all
Ingredient.delete_all
Recipe.delete_all

puts "Seeding ingredients..."
spaghetti = Ingredient.create(name: 'Spaghetti', amount: 5, measurement: 'lb(s)', in_shopping_list: false)
meatballs = Ingredient.create(name: 'Meatballs', amount: 1, measurement: 'lb(s)', in_shopping_list: false)
sauce = Ingredient.create(name: 'Pasta Sauce', amount: 3, measurement: 'jar(s)', in_shopping_list: false)
onions = Ingredient.create(name: 'Onions', amount: 6, measurement: 'onion(s)', in_shopping_list: false)
eggs = Ingredient.create(name: 'Eggs', amount: 2, measurement: 'dozen', in_shopping_list: false)
flour = Ingredient.create(name: 'Flour', amount: 5, measurement: 'lb(s)', in_shopping_list: false)
butter = Ingredient.create(name: 'Butter', amount: 0, measurement: 'stick(s)', in_shopping_list: false)
sugar = Ingredient.create(name: 'Sugar', amount: 1, measurement: 'lb(s)', in_shopping_list: false)

puts "Seeding recipes..."
cake = Recipe.create(name: 'Pound Cake', instructions: '1. Mix wet ingredients\n2. Mix dry ingredients\n3. Mix wet ingredients into dry ingredients\n4. Bake at 350F for 35 minutes')
cake.ingredients << eggs
cake.ingredients << flour
cake.ingredients << butter
cake.ingredients << sugar

pasta = Recipe.create(name: 'Spaghetti and Meatballs', instructions: '1. Cook meatballs with onions\n2. Add pasta sauce\n3. Cook pasta\n4. Add cooked sauce to cooked pasta')
pasta.ingredients << spaghetti
pasta.ingredients << meatballs
pasta.ingredients << sauce
pasta.ingredients << onions

omelette = Recipe.create(name: 'Omelette', instructions: '1. Heat butter in pan\n2. Cook onions in butter\n3. Add whipped eggs\n4. Flip omelette')
omelette.ingredients << eggs
omelette.ingredients << butter
omelette.ingredients << onions

puts "Seeding complete!"