const Banner = () => {
    return (
      <section className="relative bg-cover bg-center w-[1320px] h-[600px] mx-auto rounded-2xl overflow-hidden mt-5" style={{ backgroundImage: `url('https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
          {/* Banner Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover an exceptional cooking <br /> class tailored for you!</h1>
          
          {/* Banner Subtitle */}
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database, and solve 500+ coding problems to become an exceptionally well world-class Programmer.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-[#0BE58A]  text-black font-bold py-3 px-6 rounded-full">Explore Now</button>
            <button className="bg-transparent  text-white font-bold py-3 px-6 rounded-full border border-gray-400">Our Feedback</button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banner;
  