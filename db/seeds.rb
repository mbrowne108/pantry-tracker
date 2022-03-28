RecipeIngredient.delete_all
Ingredient.delete_all
Recipe.delete_all

puts "Seeding ingredients..."
spaghetti = Ingredient.create(name: 'Spaghetti', amount: 5, measurement: 'lb(s)')
meatballs = Ingredient.create(name: 'Meatballs', amount: 1, measurement: 'lb(s)')
sauce = Ingredient.create(name: 'Pasta Sauce', amount: 3, measurement: 'jar(s)')
onions = Ingredient.create(name: 'Onions', amount: 6, measurement: 'onion(s)')
eggs = Ingredient.create(name: 'Eggs', amount: 2, measurement: 'dozen')
flour = Ingredient.create(name: 'Flour', amount: 5, measurement: 'lb(s)')
butter = Ingredient.create(name: 'Butter', amount: 0, measurement: 'stick(s)')
sugar = Ingredient.create(name: 'Sugar', amount: 1, measurement: 'lb(s)')

puts "Seeding recipes..."
cake = Recipe.create(name: 'Pound Cake', instructions: '1. Mix wet ingredients 2. Mix dry ingredients 3. Mix wet ingredients into dry ingredients 4. Bake at 350F for 35 minutes')
cake.ingredients << eggs
cake.ingredients << flour
cake.ingredients << butter
cake.ingredients << sugar

pasta = Recipe.create(name: 'Spaghetti and Meatballs', instructions: '1. Cook meatballs with onions 2. Add pasta sauce 3. Cook pastas 4. Add cooked sauce to cooked pasta')
pasta.ingredients << spaghetti
pasta.ingredients << meatballs
pasta.ingredients << sauce
pasta.ingredients << onions

omelette = Recipe.create(name: 'Omelette', instructions: '1. Heat butter in pan 2. Cook onions in butter 3. Add whipped eggs 4. Flip omelette')
omelette.ingredients << eggs
omelette.ingredients << butter
omelette.ingredients << onions

puts "Seeding complete!"