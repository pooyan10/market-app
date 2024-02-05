import React from "react";
import { shortenText } from "../../helper/helper";
import { MdDeleteOutline } from "react-icons/md";

function BasketCart({ data, clickHandler }) {
  console.log(data);
  return (
    <div className="flex bg-white items-center justify-between border-2 mt-6 mx-4 p-3 px-4  rounded-xl ">
      <img src={data.image} alt={data.title} className="h-20" />
      <p className="">{shortenText(data.title)}</p>
      <div className="h-8 flex items-center space-x-3">
        {data.quantity === 1 && (
          <button
            className="p-2 px-1 flex items-center bg-orange-500 h-full rounded-lg hover:scale-105 shadow-md hover:shadow-lg transition-all duration-200"
            onClick={() => clickHandler("REMOVE_ITEM", data)}
          >
            <MdDeleteOutline className="text-white text-xl mx-auto" />
          </button>
        )}

        {data.quantity > 1 && (
          <button
            className="p-2 px-2.5 flex items-center bg-orange-500 h-full rounded-lg hover:scale-105 shadow-md hover:shadow-lg transition-all duration-200 text-white"
            onClick={() => clickHandler("DECREASE", data)}
          >
            -
          </button>
        )}
        <span className="">{data.quantity}</span>

        <button
          className="p-2 flex items-center bg-orange-500 h-full rounded-lg hover:scale-105 shadow-md hover:shadow-lg transition-all duration-200 text-white"
          onClick={() => clickHandler("INCREASE", data)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BasketCart;
