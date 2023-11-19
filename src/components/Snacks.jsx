import "../App.css"

export default function Snacks() {

    const recipes =
    {
        "recipes": [
            {
                "name": "Samosa",
                "ingredients": [
                    "2 cups all-purpose flour,",
                    "2 tablespoons oil,",
                    "2 potatoes, boiled and mashed,",
                    "1 cup green peas,",
                    "1 onion, finely chopped,",
                    "1 teaspoon ginger-garlic paste,",
                    "2 green chilies, finely chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon garam masala,",
                    "1/2 teaspoon turmeric powder,",
                    "1/2 teaspoon red chili powder,",
                    "Fresh coriander leaves for garnish,",
                    "Oil for deep frying,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Prepare dough by mixing flour, oil, and water. Rest for 30 minutes.",
                    "Heat oil in a pan, add cumin seeds, chopped onions, and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add mashed potatoes, peas, and all spices. Mix well and cook for a few minutes.",
                    "Roll the dough into circles, fill with the potato mixture, and seal into triangles.",
                    "Deep fry until golden brown, drain excess oil, and serve hot with chutney."
                ]
            },
            {
                "name": "Pakora",
                "ingredients": [
                    "1 cup chickpea flour (besan),",
                    "1 onion, thinly sliced,",
                    "1 potato, thinly sliced,",
                    "1/2 cup spinach leaves,",
                    "2 green chilies, chopped,",
                    "1 teaspoon ginger paste,",
                    "1/2 teaspoon red chili powder,",
                    "1/2 teaspoon garam masala,",
                    "A pinch of baking soda,",
                    "Fresh coriander leaves for garnish,",
                    "Oil for deep frying,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Mix chickpea flour, salt, baking soda, and spices in a bowl.",
                    "Add sliced onions, potatoes, spinach, ginger paste, and green chilies. Mix well.",
                    "Add water gradually to make a thick batter.",
                    "Heat oil in a pan, drop spoonfuls of batter, and fry until golden and crisp.",
                    "Drain excess oil, garnish with coriander leaves, and serve with chutney."
                ]
            },
            {
                "name": "Paneer Tikka",
                "ingredients": [
                    "250g paneer cubes,",
                    "1 onion, diced,",
                    "1 bell pepper (capsicum), diced,",
                    "1/2 cup yogurt,",
                    "2 tablespoons gram flour (besan),",
                    "1 tablespoon ginger-garlic paste,",
                    "1 teaspoon cumin powder,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon garam masala,",
                    "1 teaspoon chaat masala,",
                    "1 lemon juice,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Mix yogurt, gram flour, ginger-garlic paste, spices, lemon juice, and salt in a bowl.",
                    "Add paneer cubes, onions, and bell peppers. Coat well with the marinade.",
                    "Thread the marinated paneer and veggies onto skewers.",
                    "Grill or bake until the edges are charred and paneer is cooked.",
                    "Serve hot with mint chutney."
                ]
            },
            {
                "name": "Aloo Tikki",
                "ingredients": [
                    "4 potatoes, boiled and mashed,",
                    "1 onion, finely chopped,",
                    "1/2 cup bread crumbs,",
                    "2 green chilies, chopped,",
                    "1 teaspoon ginger paste,",
                    "1/2 teaspoon red chili powder,",
                    "1 teaspoon garam masala,",
                    "1 teaspoon chaat masala,",
                    "Fresh coriander leaves for garnish,",
                    "Oil for shallow frying,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Mix mashed potatoes, onions, bread crumbs, green chilies, and spices in a bowl.",
                    "Divide the mixture and shape into round patties (tikkis).",
                    "Heat oil in a pan, shallow fry the tikkis until golden brown on both sides.",
                    "Drain excess oil, garnish with coriander leaves, and serve with chutney."
                ]
            },
            {
                "name": "Bhel Puri",
                "ingredients": [
                    "4 cups puffed rice (murmura),",
                    "1 cup sev (crispy chickpea noodles),",
                    "1 onion, finely chopped,",
                    "1 potato, boiled and chopped,",
                    "1 tomato, finely chopped,",
                    "1/2 cup raw mango, chopped,",
                    "1/4 cup tamarind chutney,",
                    "1/4 cup mint-coriander chutney,",
                    "1/2 teaspoon chaat masala,",
                    "1/2 teaspoon red chili powder,",
                    "Fresh coriander leaves for garnish,",
                    "Salt to taste,"
                ],
                "steps": [
                    "In a large bowl, mix puffed rice, sev, chopped onions, potatoes, tomatoes, and raw mango.",
                    "Add tamarind chutney, mint-coriander chutney, chaat masala, red chili powder, and salt.",
                    "Toss everything together until well combined.",
                    "Garnish with coriander leaves and serve immediately."
                ]
            },
            {
                "name": "Dahi Vada",
                "ingredients": [
                    "1 cup urad dal, soaked,",
                    "2 cups yogurt, beaten,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon mustard seeds,",
                    "2 green chilies, finely chopped,",
                    "1-inch ginger, grated,",
                    "A pinch of asafoetida (hing),",
                    "2 tablespoons coriander leaves, chopped,",
                    "2 tablespoons tamarind chutney,",
                    "1/2 teaspoon red chili powder,",
                    "Fresh coriander leaves for garnish,",
                    "Oil for frying,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Grind soaked urad dal into a smooth paste, adding minimal water.",
                    "Whisk the batter vigorously until light and fluffy.",
                    "Heat oil in a pan, drop spoonfuls of batter, and fry until golden brown.",
                    "Soak fried vadas in warm water for 20 minutes, then gently squeeze out excess water.",
                    "Arrange vadas in a serving dish, pour beaten yogurt over them.",
                    "Top with tamarind chutney, sprinkle red chili powder, cumin seeds, and mustard seeds.",
                    "Garnish with coriander leaves and serve chilled."
                ]
            },
            {
                "name": "Masala Vada",
                "ingredients": [
                    "1 cup chana dal (split chickpeas), soaked,",
                    "2 onions, finely chopped,",
                    "2 green chilies, chopped,",
                    "1-inch ginger, grated,",
                    "A handful of curry leaves, chopped,",
                    "2 tablespoons coriander leaves, chopped,",
                    "1 teaspoon fennel seeds,",
                    "1 teaspoon cumin seeds,",
                    "1/2 teaspoon red chili powder,",
                    "Oil for deep frying,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Drain excess water from soaked chana dal, coarsely grind without adding water.",
                    "Transfer the dal paste to a bowl, add chopped onions, green chilies, ginger, and all spices.",
                    "Mix well to form a dough-like consistency.",
                    "Heat oil in a pan, take small portions of the dough, flatten into patties, and deep fry until golden brown.",
                    "Drain excess oil and serve hot with chutney or sauce."
                ]
            },
            {
                "name": "Pani Puri",
                "ingredients": [
                    "20 puris (hollow fried crispies),",
                    "1 cup sprouted moong beans,",
                    "1 potato, boiled and mashed,",
                    "1/2 cup tamarind-date chutney,",
                    "1/2 cup mint-coriander chutney,",
                    "1 onion, finely chopped,",
                    "1 tomato, finely chopped,",
                    "1/4 cup sev (crispy chickpea noodles),",
                    "1 teaspoon chaat masala,",
                    "1 teaspoon cumin powder,",
                    "1 teaspoon red chili powder,",
                    "Fresh coriander leaves for garnish,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Make a hole in the puris, add mashed potato, sprouted moong beans, chopped onions, and tomatoes.",
                    "Pour tamarind-date chutney and mint-coriander chutney into each puri.",
                    "Sprinkle chaat masala, cumin powder, red chili powder, and salt.",
                    "Garnish with sev, coriander leaves, and serve immediately."
                ]
            },
            {
                "name": "Dhokla",
                "ingredients": [
                    "1 cup gram flour (besan),",
                    "1/2 cup yogurt,",
                    "1 teaspoon ginger-green chili paste,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon fruit salt (eno),",
                    "1 tablespoon oil,",
                    "1 teaspoon mustard seeds,",
                    "1 teaspoon sesame seeds,",
                    "A pinch of asafoetida (hing),",
                    "2 tablespoons chopped coriander leaves,",
                    "2 tablespoons grated coconut,",
                    "2 tablespoons lemon juice,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Mix gram flour, yogurt, ginger-green chili paste, turmeric powder, and salt in a bowl to make a smooth batter.",
                    "Grease a dhokla plate or any shallow pan.",
                    "Add fruit salt to the batter, mix gently, and immediately pour into the plate.",
                    "Steam for 15-20 minutes or until a toothpick inserted comes out clean.",
                    "Heat oil in a small pan, add mustard seeds, sesame seeds, and asafoetida. Let them splutter.",
                    "Pour this tempering over the steamed dhokla.",
                    "Garnish with chopped coriander leaves, grated coconut, and lemon juice.",
                    "Cut into pieces and serve with mint chutney."
                ]
            },
            {
                "name": "Vada Pav",
                "ingredients": [
                    "6 pav buns,",
                    "6 potato vadas,",
                    "6 teaspoons tamarind-date chutney,",
                    "6 teaspoons mint-coriander chutney,",
                    "6 teaspoons dry garlic chutney,",
                    "1 onion, finely chopped,",
                    "Butter for toasting,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Slit the pav buns horizontally without cutting through.",
                    "Spread tamarind-date chutney on one side and mint-coriander chutney on the other side.",
                    "Place a potato vada inside the pav.",
                    "Sprinkle chopped onions and dry garlic chutney on top of the vada.",
                    "Heat a pan, apply butter, and toast the pav until crispy and golden brown.",
                    "Serve hot with more chutney if desired."
                ]
            }
        ]
    }





    return (
        <div className="container">
            <h2>Snacks</h2>
            {recipes.recipes.map((data) => {
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
