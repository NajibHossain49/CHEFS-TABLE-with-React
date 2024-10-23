import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState([]);

  const addSelectedRecipe = (recipe) => {
    // Check if the recipe is already in the selectedRecipe array
    const isAlreadyAdded = selectedRecipe.find(
      (selected) => selected.recipe_id === recipe.recipe_id // Each recipe has a unique `id` that compare to selected recipe's `id`
    );

    if (isAlreadyAdded) {
      alert("This recipe is already selected!");
    } else {
      setSelectedRecipe([...selectedRecipe, recipe]);
    }
  };

  // console.log(selectedRecipe);
  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>

      {/* Recipes Cards Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Cards Section */}
        <Recipes addSelectedRecipe={addSelectedRecipe}></Recipes>
        {/* Sidebar */}
        <Sidebar selectedRecipe={selectedRecipe}></Sidebar>
      </section>
    </div>
  );
};

export default App;
