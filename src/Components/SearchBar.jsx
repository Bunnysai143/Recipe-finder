import { useEffect, useState } from "react";
import React from "react";
import Recipe from "./recipe";

const SearchBar = () => {
  const [recipe, setRecipe] = useState([]); 
  // const [inp, setInp] = useState(""); 
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

          }
          else{
            setRecipe(data.hits.slice(0, 11));

          }
        })
        .catch((err) => {
          console.error(err);
        });
    
  }

  

  const handleSubmit = (e) => {
     e.preventDefault()
    setItemData(recipe); 
    setRecipe([])
    

  
  };

  return (
    <>
    <div className="w-[100%] h-[80px] box-border mt-2 flex items-center gap-x-11 justify-between pl-[50px] pr-[50px] pt-[px] border-b-2 border-b-neutral-500">
      <div>
        <h1 className="text-[27px] font-bold text-white">Food Recipes</h1>
      </div>
      <div className="w-[80%] relative flex justify-end flex-col mr-[20px] items-end">
        <form className="flex w-[60%] gap-x-3 justify-end" onSubmit={handleSubmit}>
          <input
            onChange={search}
            type="text"
            placeholder="Type here"
            className="input input-bordered input-accent w-[75%]"
            
          />
          <button
           onClick={handleSubmit}
            type="submit"
            className="btn btn-outline text-white w-20 h-10 border-accent"
          >
            Search
          </button>
        </form>
        {recipe.length > 0 && (
          <div className="w-[44.8%] h-auto absolute top-12 mr-[96px] rounded-md text-black bg-neutral-400">
            {recipe.map((item, index) => (
              <p key={index} className="border-b-[1px] ml-1 border-accent p-1">
                {item.recipe.label}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
   {
    itemData.length>0?
    <Recipe items={itemData}/>:
    <div className=" w-[100%] h-[500px] flex justify-center items-center">
      <span className="text-2xl font-bold text-accent">Oops!! No Item Found</span>
    </div>
   }
    
    </>
  );
};

export default SearchBar;
