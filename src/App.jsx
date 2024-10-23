import { useState } from "react";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import OurRecipes from "./Components/OurRecipes/OurRecipes";
import Recipes from "./Components/Recipes/Recipes";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState([]);
  const [removedRecipes, setRemovedRecipes] = useState([]);

  const [totalPreparingTime, setTotalPreparingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const calculateTimeAndCalories = (time, calories) => {
    setTotalPreparingTime((prevTime) => prevTime + Number(time)); // Ensure `time` is a number
    setTotalCalories((prevCalories) => prevCalories + Number(calories)); // Ensure `calories` is a number
  };

  const addSelectedRecipe = (recipe) => {
    // Check if the recipe is already in the selectedRecipe array
    const isAlreadyAdded = selectedRecipe.find(
      (selected) => selected.recipe_id === recipe.recipe_id
    );

    if (isAlreadyAdded) {
      alert("This recipe is already selected!");
    } else {
      setSelectedRecipe([...selectedRecipe, recipe]);
    }
  };

  const removeSelectedRecipe = (id) => {
    // Find the recipe that matches the provided recipe_id in selectedRecipe
    const recipeToRemove = selectedRecipe.find(
      (selected) => selected.recipe_id === id
    );

    if (!recipeToRemove) {
      alert("Recipe not found!");
      return;
    }

    // Filter out the recipe that matches the provided recipe_id
    const updatedSelectedRecipes = selectedRecipe.filter(
      (selected) => selected.recipe_id !== id
    );

    // Update selectedRecipe and add the removed recipe to removedRecipes
    setSelectedRecipe(updatedSelectedRecipes);
    setRemovedRecipes([...removedRecipes, recipeToRemove]);
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
        <Sidebar
          selectedRecipe={selectedRecipe}
          removeSelectedRecipe={removeSelectedRecipe}
          removedRecipes={removedRecipes}
          calculateTimeAndCalories={calculateTimeAndCalories}
          totalPreparingTime={totalPreparingTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;
