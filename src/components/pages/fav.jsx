import { useContext, useState } from "react"
import { ProductContext } from "../productContext"
import { BiTrash } from "react-icons/bi";
   

export const Fav = ({ showfav })=>{
    

    const{state, dispatch} = useContext(ProductContext);

    const removeFromFav = ( item)=>{

        dispatch({ type: 'removeFromFav', payload: item});
    }

    return (
        <div
          className={`${
            showfav ? "fixed top-0 bottom-0 right-0 z-20 shadow-md bg-white text-black h-[100vh] w-[300px] mt-10 " : "hidden"
          } flex flex-col justify-start overflow-y-auto`}
        >
          {state.Fav.length === 0 ? (
            <p className="text-center mt-10">Your have nothing in your favourite is empty.</p>
          ) : (
            state.Fav.map((item) => (
              <div key={item.id} className="mt-10 flex mb-5 items-center pb-3 rounded-xl">
                <div className="p-5 flex justify-center">
                  <img src={item.img} className="w-[100px] h-[100px] md:h-[120px]" alt={item.name} />
                </div>
                <div className="flex flex-col ml-3">
                  <p>{item.name}</p>
                  <p>${item.price}.00</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="flex mt-2">
                    <button onClick={() => removeFromFav(item)} className=" text-white bg-blue-300">
                      <BiTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      );
    };
    