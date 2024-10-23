import { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css"; // Import the Remix Icons CSS
const Recipes = ({addSelectedRecipe}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./Fake-data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);
  return (
    <div className="md: w-2/3">
      {/* Cards layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14">
        {recipes.map((recipe, index) => (
          <div key={index} className="card bg-base-100  shadow-xl border border-gray-300">
            <figure className="px-8 pt-6">
              <img
                className="w-full md:h-52 rounded-xl"
                src={recipe.recipe_image}
                alt="recipes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe.recipe_name}</h2>
              <p>{recipe.short_description}</p>
              <hr />
              <h3>Ingredients: {recipe.ingredients.length}</h3>
              <ul className="list-disc pl-5 mt-2">
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
              <hr />

              <div className="flex items-center gap-4">
                {/* Time Icon and Label */}
                <div className="flex items-center space-x-2">
                  <i className="ri-time-line text-gray-500 text-xl"></i>{" "}
                  {/* Time icon */}
                  <span>{recipe.preparing_time} </span> {/* Recipe time */}
                </div>

                {/* Calorie Icon and Label */}
                <div className="flex items-center space-x-2">
                  <i className="ri-fire-line text-red-500 text-xl"></i>{" "}
                  {/* Fire icon */}
                  <span>{recipe.calories} kcal</span> {/* Recipe calories */}
                </div>
              </div>

              <div className="card-actions justify-start">
                <button onClick={() => {
                 addSelectedRecipe(recipe) 
                }} className="bg-[#0BE58A] rounded-full py-3 px-4">
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
