const Sidebar = ({ selectedRecipe }) => {
  return (
    <div className="md: w-1/3 mt-14 p-2 rounded-xl border border-gray-400 text-gray-600 bg-base-100">
      {/* Want to Cook Table */}
      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-bold text-xl text-gray-700 text-center pb-2">
          Want to cook: {selectedRecipe.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectedRecipe.map((recipe, index) => {
              return (
                <tr className="hover" key={index}>
                  <th>{index + 1}</th>
                  <td>{recipe.recipe_name}</td>
                  <td>{recipe.preparing_time}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button
                      onClick={() => {
                        console.log(preparing);
                      }}
                      className="
                                   bg-[#0BE58A] 
                                   rounded-full 
                                   py-1 px-3
                                   sm:py-1 sm:px-4
                                   md:py-2 md:px-5
                                   lg:py-2 lg:px-5
                                   text-xs sm:text-sm md:text-base
                                   transition-all duration-300 ease-in-out
                                                                           "
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Currently Cooking Table */}
    </div>
  );
};

export default Sidebar;
