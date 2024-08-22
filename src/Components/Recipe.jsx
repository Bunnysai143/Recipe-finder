import React, { useEffect, useState } from "react";

const Recipe = (props) => {
  const [itemData, setItemdata] = useState(props.items);

  useEffect(() => {
    setItemdata(props.items);
  }, [props.items]);

  return (
    <>
      <div className="w-full h-screen bg-neutral-300 flex flex-wrap gap-4 px-[20px] sm:px-[40px]">
        {itemData.map((item) => (
          <div className="card bg-base-100 w-full sm:w-[48%] md:w-[30%] lg:w-[19%] shadow-2xl shadow-neutral-600 mt-5">
            <figure>
              <img
                className="w-full h-40 object-cover"
                src={item.recipe.images.REGULAR.url}
                alt={item.recipe.label}
              />
            </figure>
            <div className="card-body h-auto flex flex-col">
              <h2 className="card-title text-[17px] font-bold">{item.recipe.label}</h2>
              <p>Meal Type: {item.recipe.mealType[0]}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-success bg-accent"
                  onClick={() => document.getElementById(`modal_${item.recipe.label}`).showModal()}
                >
                  Guide
                </button>
                <dialog id={`modal_${item.recipe.label}`} className="modal">
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
                        className="w-[50%] border-1 border-neutral-300 rounded my-6 h-40"
                        src={item.recipe.images.REGULAR.url}
                        alt={item.recipe.label}
                      />
                    </figure>
                    {item.recipe.ingredients.map((elm, index) => (
                      <div key={index} className="flex flex-col gap-y-3">
                        <p className="text-[20px]">- {elm.text}</p>
                        <div className="w-full flex justify-end">
                          <span className="font-extralight text-sm">
                            Quantity: {elm.quantity} {elm.measure}
                          </span>
                        </div>
                      </div>
                    ))}
                    <p className="py-4 text-center text-accent font-thin text-[17px]">
                      <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">
                        View the process here
                      </a>
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipe;
