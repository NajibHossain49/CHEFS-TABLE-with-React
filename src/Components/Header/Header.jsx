import { FaSearch, FaUser } from "react-icons/fa"; // For search and user icons

const Header = () => {
  return (
    <div>
      <header className="">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          {/* Left Side: Logo or Title */}
          <div className="text-4xl font-bold">Recipe Calories</div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-500">
              Home
            </a>
            <a href="#recipes" className="hover:text-gray-500">
              Recipes
            </a>
            <a href="#about" className="hover:text-gray-500">
              About
            </a>
            <a href="#Search" className="hover:text-gray-500">
              Search
            </a>
          </nav>

          {/* Right Side: Search Input with Icon and User Icon */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-4 py-1 rounded-full bg-gray-200 text-white focus:outline-none focus:ring focus:border-blue-300"
              />
              <FaSearch className="absolute left-2 top-2 text-gray-400" />
            </div>
            <FaUser className="text-xl" />
          </div>
        </div>

        {/* Mobile Navigation: Hamburger Menu */}
        <div className="md:hidden flex justify-between items-center px-4">
          <button className="text-2xl">☰</button>
          <div className="flex items-center space-x-4">
            <FaSearch className="text-xl" />
            <FaUser className="text-xl" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
