import "../App.css"

export default function Lunch() {

    const recipes =
    {
        "recipes": [
            {
                "name": "Chicken Curry",
                "ingredients": [
                    "500g chicken, cut into pieces,",
                    "2 onions, finely chopped,",
                    "2 tomatoes, chopped,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, slit,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon chili powder,",
                    "1 teaspoon garam masala,",
                    "1/4 cup chopped coriander leaves,",
                    "2 tablespoons oil,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them splutter.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until the raw smell disappears.",
                    "Add chopped tomatoes and cook until they turn mushy.",
                    "Add all powdered spices and salt, cook for a few minutes.",
                    "Add chicken pieces, mix well, and cook until the chicken is tender.",
                    "Garnish with coriander leaves and serve hot with rice or roti."
                ]
            },
            {
                "name": "Aloo Matar",
                "ingredients": [
                    "3 potatoes, diced,",
                    "1 cup green peas (matar),",
                    "2 onions, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1 teaspoon ginger paste,",
                    "1 teaspoon garlic paste,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them crackle.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger paste, garlic paste, and cook until the raw smell disappears.",
                    "Add tomato puree, turmeric powder, coriander powder, red chili powder, and salt.",
                    "Cook until oil separates, then add diced potatoes and green peas.",
                    "Add garam masala, cover and cook until potatoes are tender.",
                    "Serve hot with chapati or rice."
                ]
            },
            {
                "name": "Egg Curry",
                "ingredients": [
                    "6 boiled eggs, halved,",
                    "2 onions, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, slit,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon chili powder,",
                    "1 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "1/4 cup chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them splutter.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until the raw smell disappears.",
                    "Add tomato puree, turmeric powder, coriander powder, red chili powder, and salt.",
                    "Cook until oil separates, then add boiled egg halves.",
                    "Add garam masala, cover and simmer for 5-7 minutes.",
                    "Garnish with coriander leaves and serve with rice or naan."
                ]
            },
            {
                "name": "Fish Curry",
                "ingredients": [
                    "500g fish pieces (any firm-fleshed fish),",
                    "2 onions, finely chopped,",
                    "2 tomatoes, chopped,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, slit,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon chili powder,",
                    "1 teaspoon garam masala,",
                    "1/4 cup chopped coriander leaves,",
                    "2 tablespoons oil,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them splutter.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until the raw smell disappears.",
                    "Add chopped tomatoes and cook until they turn mushy.",
                    "Add all powdered spices and salt, cook for a few minutes.",
                    "Add fish pieces, mix well, and cook until the fish is cooked through.",
                    "Garnish with coriander leaves and serve hot with rice."
                ]
            },
            {
                "name": "Mutton Rogan Josh",
                "ingredients": [
                    "500g mutton, cut into pieces,",
                    "2 onions, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, slit,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon chili powder,",
                    "1 teaspoon garam masala,",
                    "1/4 cup chopped coriander leaves,",
                    "2 tablespoons oil,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them splutter.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until the raw smell disappears.",
                    "Add tomato puree, turmeric powder, coriander powder, red chili powder, and salt.",
                    "Cook until oil separates, then add mutton pieces.",
                    "Add garam masala, cover and cook until mutton is tender.",
                    "Garnish with coriander leaves and serve with naan or rice."
                ]
            },
            {
                "name": "Paneer Bhurji",
                "ingredients": [
                    "250g paneer (Indian cottage cheese), crumbled,",
                    "2 onions, finely chopped,",
                    "2 tomatoes, finely chopped,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon chili powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "Fresh coriander leaves for garnish,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them splutter.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until the raw smell disappears.",
                    "Add chopped tomatoes and cook until they turn soft.",
                    "Add all powdered spices and salt, cook for a few minutes.",
                    "Add crumbled paneer, mix well, and cook for 5-7 minutes.",
                    "Garnish with coriander leaves and serve with chapati or bread."
                ]
            },
            {
                "name": "Dal Fry",
                "ingredients": [
                    "1 cup yellow lentils (moong dal), washed,",
                    "1 onion, finely chopped,",
                    "2 tomatoes, finely chopped,",
                    "1 teaspoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon mustard seeds,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon red chili powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons ghee,",
                    "1/4 cup chopped coriander leaves,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Boil lentils with turmeric powder and salt until soft and mushy.",
                    "Heat ghee in a pan, add cumin seeds, mustard seeds, and let them splutter.",
                    "Add chopped onions, green chilies, ginger-garlic paste, and sauté until onions turn translucent.",
                    "Add chopped tomatoes, red chili powder, garam masala, and cook until tomatoes are soft.",
                    "Mix cooked lentils with the tempered mixture, simmer for 5 minutes, and garnish with coriander leaves."
                ]
            },
            {
                "name": "Mushroom Masala",
                "ingredients": [
                    "250g mushrooms, sliced,",
                    "2 onions, finely chopped,",
                    "2 tomatoes, pureed,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, chopped,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon chili powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "Fresh coriander leaves for garnish,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them splutter.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until the raw smell disappears.",
                    "Add tomato puree, turmeric powder, coriander powder, red chili powder, and salt.",
                    "Cook until oil separates, then add sliced mushrooms.",
                    "Add garam masala, cover and cook until mushrooms are cooked.",
                    "Garnish with coriander leaves and serve hot with roti or rice."
                ]
            },
            {
                "name": "Mixed Veg Curry",
                "ingredients": [
                    "1 cup mixed vegetables (carrots, beans, peas),",
                    "1 onion, finely chopped,",
                    "2 tomatoes, chopped,",
                    "1 tablespoon ginger-garlic paste,",
                    "2 green chilies, slit,",
                    "1 teaspoon cumin seeds,",
                    "1 teaspoon coriander powder,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon chili powder,",
                    "1/2 teaspoon garam masala,",
                    "2 tablespoons oil,",
                    "Fresh coriander leaves for garnish,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat oil in a pan, add cumin seeds and let them splutter.",
                    "Add chopped onions and sauté until golden brown.",
                    "Add ginger-garlic paste, green chilies, and cook until the raw smell disappears.",
                    "Add chopped tomatoes and cook until they turn mushy.",
                    "Add all powdered spices and salt, cook for a few minutes.",
                    "Add mixed vegetables, mix well, and cook until vegetables are tender.",
                    "Garnish with coriander leaves and serve with rice or roti."
                ]
            },
            {
                "name": "Spinach Rice (Palak Pulao)",
                "ingredients": [
                    "2 cups spinach leaves, blanched and pureed,",
                    "1 cup basmati rice, soaked,",
                    "1 onion, thinly sliced,",
                    "1 tomato, chopped,",
                    "1 teaspoon ginger paste,",
                    "1 teaspoon garlic paste,",
                    "1 teaspoon cumin seeds,",
                    "1 cinnamon stick,",
                    "2 cloves,",
                    "2 cardamom pods,",
                    "1 bay leaf,",
                    "1/2 teaspoon turmeric powder,",
                    "1 teaspoon garam masala,",
                    "2 tablespoons ghee,",
                    "Salt to taste,"
                ],
                "steps": [
                    "Heat ghee in a pan, add whole spices (cinnamon, cloves, cardamom, bay leaf), and cumin seeds.",
                    "Add sliced onions and sauté until golden brown.",
                    "Add ginger-garlic paste, chopped tomatoes, and cook until tomatoes soften.",
                    "Add turmeric powder, garam masala, and salt. Cook for a minute.",
                    "Add spinach puree and mix well.",
                    "Add soaked rice, water (adjust as needed), cover and cook until rice is done.",
                    "Serve hot with raita or yogurt."
                ]
            }
        ]
    }




    return (
        <div className="container">
            <h2>Lunch</h2>
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
