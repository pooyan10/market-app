import React from "react";
import { TbChecklist } from "react-icons/tb";
import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { useCart } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";

function BasketSidebar({ data }) {
  const [state, dispatch] = useCart();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/products"), dispatch({ type: "CHECKOUT" });
  };

  return (
    <div className=" border-2 p-4 border-dotted border-orange-600 bg-white rounded-xl mt-6 mx-4 gap-y-2 mb-4 ">
      <div className="ml-4 ">
        <p className="text-orange-600 flex items-center space-x-2 mt-2">
          <TbChecklist /> Total:
          <span className="text-gray-500"> {data.total}</span>
        </p>
        <p className="text-orange-600 flex items-center space-x-2 mt-2">
          <FaHashtag /> Quantity:
          <span className="text-gray-500"> {data.itemsCounter}</span>
        </p>
        <p className="text-orange-600 flex items-center space-x-2 mt-2">
          <BsPatchCheck /> Status:
          {!data.checkout ? (
            <p className="text-gray-500">pending ...</p>
          ) : (
            <span className="text-gray-500">{data.total}</span>
          )}
        </p>
      </div>
      <button
        onClick={clickHandler}
        className="w-full bg-orange-500 rounded-xl py-1 text-white mt-10 mb-2 hover:bg-orange-600/90 transition-all duration-100 hover:scale-95"
      >
        Checkout
      </button>
    </div>
  );
}

export default BasketSidebar;
