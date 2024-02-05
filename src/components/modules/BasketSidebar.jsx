import React from "react";
import { TbChecklist } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

function BasketSidebar({ data }) {
  const [state, dispatch] = useCart();

  return (
    <div className=" border-2 p-4 border-dotted border-orange-600 bg-white rounded-xl mt-6 mx-4 space-y-2 ">
      <p className="text-orange-600 flex items-center space-x-2">
        <TbChecklist /> Total:
        <span className="text-gray-500"> {data.total}</span>
      </p>
      <p className="text-orange-600 flex items-center space-x-2">
        <FaHashtag /> Quantity:
        <span className="text-gray-500"> {data.itemsCounter}</span>
      </p>
      <p className="text-orange-600 flex items-center space-x-2">
        <BsPatchCheck /> Status:
        {!data.checkout ? (
          <p className="text-gray-500">pending ...</p>
        ) : (
          <span className="text-gray-500">{data.total}</span>
        )}
      </p>
      <button
        onClick={() => dispatch({ type: "CHECKOUT" })}
        className="w-full bg-orange-500 rounded-xl py-1 mt-6 text-white "
      >
        Checkout
      </button>
    </div>
  );
}

export default BasketSidebar;
