import "../App.css"

export default function Dinner() {

    const recipes =
    {
        "recipes": [
            {
                "name": "Chicken Biryani",
                "ingredients": [
                    "500g chicken, cut into pieces,",
                    "2 cups basmati rice, soaked,",
                    "2 onions, thinly sliced,",
                    "1 tomato, chopped,",
                    "1/2 cup yogurt,",
                    "1/4 cup mint leaves,",
                    "1/4 cup coriander leaves,",
                    "2 tablespoons ghee,",
                    "2 bay leaves,",
                    "4 cloves,",
                    "2-inch cinnamon stick,",
                    "2 cardamom pods,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon chili powder,",
                    "1 teaspoon biryani masala,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat ghee in a pan, add whole spices and cumin seeds.",
                    "Add sliced onions and cook until golden brown.",
                    "Add chopped tomato, mint leaves, coriander leaves, and sauté for a few minutes.",
                    "Add yogurt, chili powder, biryani masala, and salt.",
                    "Layer soaked rice over the chicken mixture.",
                    "Cover with a lid, cook on low heat until rice is done, and serve hot."
                ]
            },
            {
                "name": "Palak Paneer",
                "ingredients": [
                    "250g paneer (Indian cottage cheese), cubed,",
                    "4 cups spinach, washed and chopped,",
                    "1 onion, finely chopped,",
                    "2 tomatoes, chopped,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons cream,",
                    "2 tablespoons oil,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Blanch spinach in boiling water for 2-3 minutes, then blend into a smooth paste.",
                    "Heat oil in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add chopped tomatoes, spices, and cook until tomatoes soften.",
                    "Add spinach puree, cook for a few minutes, and add paneer cubes.",
                    "Simmer for 5-7 minutes, add cream, and serve hot with naan or rice."
                ]
            },
            {
                "name": "Dal Makhani",
                "ingredients": [
                    "1 cup whole black lentils (urad dal), soaked,",
                    "1/4 cup kidney beans (rajma), soaked,",
                    "2 onions, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1 teaspoon garam masala,",
                    "3 tablespoons butter,",
                    "2 tablespoons cream,",
                    "2 tablespoons chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Pressure cook soaked lentils and kidney beans until soft and mushy.",
                    "Heat butter in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add tomato puree, turmeric powder, red chili powder, and salt.",
                    "Add cooked lentils and beans, simmer for 20-30 minutes on low heat.",
                    "Add garam masala, cream, and coriander leaves. Stir well and serve hot."
                ]
            },
            {
                "name": "Matar Paneer",
                "ingredients": [
                    "250g paneer (Indian cottage cheese), cubed,",
                    "1 cup green peas (matar),",
                    "2 onions, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1/2 teaspoon red chili powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "2 tablespoons chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add tomato puree, spices, and cook until oil separates.",
                    "Add green peas, paneer cubes, and simmer for 10-15 minutes.",
                    "Garnish with coriander leaves and serve hot with naan or rice."
                ]
            },
            {
                "name": "Vegetable Pulao",
                "ingredients": [
                    "2 cups basmati rice, soaked,",
                    "1 onion, thinly sliced,",
                    "1 carrot, diced,",
                    "1 potato, diced,",
                    "1/2 cup green beans, chopped,",
                    "1/2 cup green peas,",
                    "2 tomatoes, chopped,",
                    "2 tablespoons ghee,",
                    "2 bay leaves,",
                    "4 cloves,",
                    "2-inch cinnamon stick,",
                    "2 cardamom pods,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon ginger-garlic paste,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon garam masala,",
                    "4 cups water,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat ghee in a pan, add whole spices and cumin seeds.",
                    "Add sliced onions and cook until golden brown.",
                    "Add ginger-garlic paste, chopped tomatoes, and sauté until tomatoes soften.",
                    "Add all vegetables, turmeric powder, garam masala, and sauté for a few minutes.",
                    "Add soaked rice, water, salt, and cook until rice is done.",
                    "Fluff the rice gently and serve hot with raita or curry."
                ]
            },
            {
                "name": "Chole (Chickpea Curry)",
                "ingredients": [
                    "2 cups chickpeas (chole), soaked and boiled,",
                    "2 onions, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1 teaspoon chole masala,",
                    "2 tablespoons oil,",
                    "2 tablespoons chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add tomato puree, spices, and cook until oil separates.",
                    "Add boiled chickpeas and simmer for 15-20 minutes.",
                    "Garnish with coriander leaves and serve hot with bhature or rice."
                ]
            },
            {
                "name": "Aloo Gobi",
                "ingredients": [
                    "2 cups cauliflower florets,",
                    "2 potatoes, cubed,",
                    "1 onion, finely chopped,",
                    "2 tomatoes, chopped,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "2 tablespoons chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add chopped tomatoes, spices, and cook until tomatoes soften.",
                    "Add cauliflower florets, potatoes, and cook until vegetables are tender.",
                    "Garnish with coriander leaves and serve hot with roti or rice."
                ]
            },
            {
                "name": "Butter Chicken (Murgh Makhani)",
                "ingredients": [
                    "500g boneless chicken, cut into pieces,",
                    "1 cup yogurt,",
                    "1 onion, finely chopped,",
                    "2 tomatoes, pureed,",
                    "2 tablespoons butter,",
                    "2 tablespoons cream,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons cashew paste,",
                    "2 tablespoons chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Marinate chicken pieces in yogurt and salt for 30 minutes.",
                    "Heat butter in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add tomato puree, spices, cashew paste, and cook until oil separates.",
                    "Add marinated chicken and cook until tender.",
                    "Add cream, garam masala, coriander leaves, and simmer for a few minutes.",
                    "Serve hot with naan or rice."
                ]
            },
            {
                "name": "Fish Curry",
                "ingredients": [
                    "500g fish fillets (any firm white fish),",
                    "1 onion, finely chopped,",
                    "2 tomatoes, chopped,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1/2 teaspoon fenugreek seeds,",
                    "1/2 teaspoon mustard seeds,",
                    "2 tablespoons oil,",
                    "2 tablespoons chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add mustard seeds and let them splutter.",
                    "Add cumin seeds, fenugreek seeds, and sauté for a few seconds.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add chopped tomatoes, spices, and cook until tomatoes soften.",
                    "Add fish fillets, salt, and simmer until fish is cooked.",
                    "Garnish with coriander leaves and serve hot with rice."
                ]
            },
            {
                "name": "Vegetable Korma",
                "ingredients": [
                    "1 cup mixed vegetables (carrots, beans, peas),",
                    "1 onion, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1/2 cup coconut milk,",
                    "1/4 cup cashews,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "2 tablespoons chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Boil mixed vegetables until tender and keep aside.",
                    "Grind cashews into a smooth paste with water.",
                    "Heat oil in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until raw smell disappears.",
                    "Add tomato puree, spices, and cook until oil separates.",
                    "Add boiled vegetables, cashew paste, coconut milk, and simmer for 5-7 minutes.",
                    "Garnish with coriander leaves and serve hot with naan or rice."
                ]
            }
        ]
    }





    return (
        <div className="container">
            <h2>Dinner</h2>
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
