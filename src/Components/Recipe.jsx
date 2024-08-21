import React, { useEffect, useState } from "react";

const Recipe = (props) => {
  const [itemData, setItemdata] = useState(props.items);

  console.log("main", itemData);

  useEffect(() => {
    
    setItemdata(props.items);
    
  }, [props.items]);

  return (
    <>
      <div className="w-[100%]  bg-neutral-300 flex  flex-wrap gap-4 px-[40px]">
        {itemData.map((item) => {

          return (
            <>
              <div className="card bg-base-100 w-[19%]  shadow-2xl shadow-neutral-600 mt-5 ">
                <figure>
                  <img
                    className="w-[100%] h-40 "
                    src={item.recipe.images.REGULAR.url}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body h-auto flex-col">
                  <h2 className="card-title text-[17px] font-bold">
                    {item.recipe.label}
                  </h2>
                  <p>Meal Type : {item.recipe.mealType[0]}</p>
                  <div className="card-actions justify-end">
                  
                    <button
                      className="btn btn-success bg-accent"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Guide
                    </button>
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                        
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-3xl text-accent text-center">
                          {item.recipe.label}
                        </h3>
                        <figure>
                          <img
                            className="w-[50%] border-1 border-neutral-300 rounded my-6 h-40 "
                            src={item.recipe.images.REGULAR.url}
                            alt="Shoes"
                          />
                        </figure>
                        {
                            item.recipe.ingredients.map((elm,index)=>{
                                console.log(item.recipe.url);
                                return (
                                    <>
                                    <div className="flex flex-col  gap-y-3">
                                    <p className="text-[20px]">- {elm.text}</p>
                                    <div className="w-[100%] flex justify-end">
                                        <span className="font-extralight text-sm ">Quantity: {elm.quantity} {elm.measure}</span>
                                    </div>

                                    </div>
                                    </>
                                )
                            })
                        }

                        <p className="py-4 text-center text-accent font-thin text-[17px]">
                            
                         <a href={item.recipe.url} alt='Link'>Here You Can Veiw The Process,Clink Here</a>
                        </p>
                      </div>
                    </dialog>
                   
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Recipe;
