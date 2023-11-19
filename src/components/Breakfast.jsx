import "../App.css"

export default function Breakfast() {

    const recpies = {
        "recpies": [
            {
                "name": "Egg and Cheese Breakfast Sandwich",
                "ingredients": [
                    "2 slices of bread,",
                    "2 eggs,",
                    "1/4 cup shredded cheddar cheese,",
                    "1 tablespoon butter,",
                    "Salt and pepper to taste."
                ],
                "steps": [
                    "Heat a non-stick skillet over medium heat and melt butter.",
                    "Crack the eggs into the skillet, sprinkle with salt and pepper, and cook until set.",
                    "Place cheese on one egg, cover with the other egg, and let it melt slightly.",
                    "Toast the bread slices and place the egg and cheese mixture between them to make a sandwich."
                ]
            },
            {
                "name": "Banana Oatmeal",
                "ingredients": [
                    "1 ripe banana, mashed,",
                    "1/2 cup rolled oats,",
                    "1 cup milk or almond milk,",
                    "1 tablespoon honey or maple syrup,",
                    "1/2 teaspoon cinnamon (optional),",
                    "Nuts or berries for topping (optional)."
                ],
                "steps": [
                    "In a saucepan, combine mashed banana, oats, milk, honey/maple syrup, and cinnamon.",
                    "Cook over medium heat, stirring occasionally until the oats are cooked and the mixture thickens.",
                    "Top with nuts, berries, or additional banana slices if desired before serving."
                ]
            },
            {
                "name": "Spinach and Feta Omelette",
                "ingredients": [
                    "3 eggs",
                    "1 cup fresh spinach, chopped,",
                    "1/4 cup crumbled feta cheese,",
                    "1 tablespoon olive oil,",
                    "Salt and pepper to taste."
                ],
                "steps": [
                    "Whisk eggs in a bowl and season with salt and pepper.",
                    "Heat olive oil in a non-stick skillet over medium heat.",
                    "Add spinach to the skillet and cook until wilted.",
                    "Pour eggs into the skillet, sprinkle with feta, and cook until set. Fold in half and serve."
                ]
            },
            {
                "name": "Peanut Butter Banana Smoothie",
                "ingredients": [
                    "1 ripe banana,",
                    "1/2 cup Greek yogurt,",
                    "1/2 cup milk or almond milk,",
                    "2 tablespoons peanut butter,",
                    "1 tablespoon honey,",
                    "1/2 cup ice cubes."
                ],
                "steps": [
                    "Combine all ingredients in a blender.",
                    "Blend until smooth and creamy.",
                    "Pour into a glass and serve immediately."
                ]
            },
            {
                "name": "Classic French Toast",
                "ingredients": [
                    "4 slices of bread,",
                    "2 eggs,",
                    "1/4 cup milk,",
                    "1 teaspoon vanilla extract,",
                    "1/2 teaspoon cinnamon,",
                    "1 tablespoon butter,",
                    "Maple syrup for serving."
                ],
                "steps": [
                    "In a shallow dish, whisk together eggs, milk, vanilla extract, and cinnamon.",
                    "Heat butter in a skillet over medium heat.",
                    "Dip each slice of bread into the egg mixture, allowing it to soak for a few seconds on each side.",
                    "Cook the bread slices until golden brown on both sides.",
                    "Serve hot with maple syrup."
                ]
            },
            {
                "name": "Fruit Salad",
                "ingredients": [
                    "1 apple, diced,",
                    "1 banana, sliced,",
                    "1 cup strawberries, sliced,",
                    "1 cup grapes, halved,",
                    "1/2 cup blueberries,",
                    "1 tablespoon honey (optional)."
                ],
                "steps": [
                    "In a large bowl, combine all the diced and sliced fruits.",
                    "Toss gently to mix.",
                    "Drizzle honey over the fruit salad if desired.",
                    "Refrigerate until ready to serve."
                ]
            },
            {
                "name": "Veggie Breakfast Burrito",
                "ingredients": [
                    "2 large eggs,",
                    "1/4 cup diced bell peppers,",
                    "1/4 cup diced onion,",
                    "1/4 cup diced tomatoes,",
                    "1/4 cup shredded cheddar cheese,",
                    "2 large flour tortillas,",
                    "Salsa or hot sauce (optional)."
                ],
                "steps": [
                    "Whisk the eggs in a bowl and season with salt and pepper.",
                    "Heat a non-stick skillet over medium heat and cook the diced vegetables until softened.",
                    "Pour in the whisked eggs and scramble until cooked through.",
                    "Warm the tortillas in the skillet or microwave.",
                    "Place the egg mixture in the center of each tortilla, sprinkle with cheese, and fold the sides to form burritos.",
                    "Serve with salsa or hot sauce if desired."
                ]
            },
            {
                "name": "Yogurt and Berry Parfait",
                "ingredients": [
                    "1 cup Greek yogurt,",
                    "1/2 cup granola,",
                    "1/2 cup mixed berries (strawberries, blueberries, raspberries),",
                    "Honey for drizzling (optional)."
                ],
                "steps": [
                    "In a glass or bowl, layer one-third of the yogurt.",
                    "Add a layer of granola followed by a layer of mixed berries.",
                    "Repeat the layers until ingredients are used up.",
                    "Drizzle honey on top if desired."
                ]
            },
            {
                "name": "Breakfast Quesadilla",
                "ingredients": [
                    "2 large flour tortillas,",
                    "1/2 cup cooked and crumbled breakfast sausage,",
                    "1/2 cup shredded cheddar cheese,",
                    "2 eggs, scrambled,",
                    "1/4 cup diced green onions,",
                    "Salsa or sour cream for serving (optional)."
                ],
                "steps": [
                    "Heat a skillet over medium heat and place one tortilla in the skillet.",
                    "Layer half of the cheese, scrambled eggs, sausage, green onions, and the remaining cheese on the tortilla.",
                    "Top with the second tortilla and cook until the bottom tortilla is crispy and the cheese is melted.",
                    "Carefully flip the quesadilla to cook the other side until golden brown.",
                    "Slice into wedges and serve with salsa or sour cream if desired."
                ]
            },
            {
                "name": "Smoked Salmon Bagel",
                "ingredients": [
                    "1 bagel, sliced and toasted,",
                    "2 ounces smoked salmon,",
                    "2 tablespoons cream cheese,",
                    "1 tablespoon capers,",
                    "Sliced red onion and cucumber (optional)."
                ],
                "steps": [
                    "Spread cream cheese on each half of the toasted bagel.",
                    "Layer smoked salmon on top of the cream cheese.",
                    "Sprinkle capers over the salmon.",
                    "Add sliced red onion and cucumber if desired."
                ]
            }
        ]
    }



    return (
        <div className="container">
            <h2>Breakfasts</h2>
            {recpies.recpies.map((data) => {
                return (
                    <>
                        <div className="card-res">
                            <div className="first">
                                <h4 className="name">{data.name}</h4>
                                <h5>Ingredents</h5>
                                <p className="ingredients">{data.ingredients}</p>
                            </div>
                            <div className="second">
                                <h5>Steps</h5>
                                <p className="steps">{data.steps}</p>
                            </div>
                        </div>
                        <hr />
                    </>
                )
            })}
        </div>
    )
}
