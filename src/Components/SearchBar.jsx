import { useEffect, useState } from "react";
import React from "react";
import Recipe from "./recipe";

const SearchBar = () => {
  const [recipe, setRecipe] = useState([]); 
  const [itemData, setItemData] = useState([]);

  useEffect(()=>{
    console.log(itemData);
  },[])

  function search(e){
    e.preventDefault();
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=e73ec75c&app_key=3a75977a56a82cfac64c91aac73296d0&q=${e.target.value}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => response.json())
    .then((data) => {
      if(!e.target.value){
        setRecipe([])
      } else {
        setRecipe(data.hits.slice(0, 11));
      }
    })
    .catch((err) => {
      console.error(err);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemData(recipe); 
    setRecipe([]);
  };

  return (
    <>
      <div className="w-full h-[80px] mt-2 flex flex-col sm:flex-row items-center gap-4 justify-between px-4  sm:px-12 py-2 max-sm:h-[120px]">
        <h1 className="text-[24px] sm:text-[27px] font-bold text-white">Food Recipes</h1>
        <div className="w-full sm:w-[80%] relative flex flex-col sm:flex-row justify-end items-center">
          <form className="flex w-full sm:w-[60%] gap-x-3" onSubmit={handleSubmit}>
            <input
              onChange={search}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-[75%] sm:w-[60%] md:w-[75%] lg:w-[80%] p-2"
            />
            <button
              type="submit"
              className="btn btn-outline text-white w-20 h-10 border-accent"
            >
              Search
            </button>
          </form>
          {recipe.length > 0 && (
            <div className="w-[50%] mr-28  max-sm:w-[75%] mt-2 sm:mt-0 h-auto absolute z-50 top-12 sm:top-14 max-sm:mr-[96px] rounded-md  text-black bg-neutral-400">
              {recipe.map((item, index) => (
                <p key={index} className="border-b-[1px] ml-1  border-accent p-1">
                  {item.recipe.label}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      {itemData.length > 0 ? (
        <Recipe items={itemData} />
      ) : (
        <div className="w-full h-[500px] flex justify-center items-center">
          <span className="text-2xl font-bold text-accent">Oops!! No Item Found</span>
        </div>
      )}
    </>
  );
};

export default SearchBar;
