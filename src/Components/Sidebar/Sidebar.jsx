const Sidebar = ({selectedRecipe}) => {
  return (
    <div className="md: w-1/3 mt-14">
      <h1>selectedRecipe: {selectedRecipe.length}</h1>
    </div>
  );
};

export default Sidebar;
