import React, { useState, useEffect } from "react";
import axios from "axios";


const SearchBar = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log("test");

  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.themoviedb.org/3/discover/movie?api_key=98b0a57ebbd979bd65dbc8d64644699a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&with_watch_monetization_types=flatrate"
  //       );
  //       setData(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <div className="">
        <nav>
          <input
            placeholder="Rechercher"
            className="border-slate-200 border-2 placeholder-slate-400 mt-2 py-1 rounded-md w-4/5 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
            value={search}
            onChange={ handleChange }
          />
        </nav>
      </div>
      {/* <div className="mx-auto flex flex-wrap justify-evenly">
        {data.results
          .filter((elem) => {
            return elem.title.toLowerCase().includes(search.toLowerCase());
          })
          .map((elem, index) => {
            return (
              <>
                <div
                  key={elem.id}
                  className="h-[600px] w-72 md:w-72 lg:h-56 lg:w-96 mx-1 my-4 border-2 shadow-lg lg:flex transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 duration-300"
                >
                  <img
                    className="object-cover w-72 lg:w-40"
                    src={"https://image.tmdb.org/t/p/w500" + elem.poster_path}
                    alt={elem.title}
                  />
                  <div className="mx-auto flex-col">
                    <h1 className="pl-4 font-bold py-4 text-left">
                      {elem.title}
                    </h1>
                    <hr className="w-64 mx-auto lg:w-44 " />
                    <p className="pt-3 pl-4 text-left">{elem.release_date}</p>
                    <div className="pt-10 flex justify-between px-4">
                      <Link to={`/detail/${elem.id}`} key={elem.id}>
                      <button className="bg-yellow-400 rounded-md p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300" 
                      >
                        Detail
                      </button>
                      </Link>
                    
                      <button className="bg-blue-400 rounded-md p-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-300">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div> */}
    </>
  );
};

export default SearchBar;
