import React from "react";
import { useCart } from "../context/cartContext";
import BasketCart from "../components/modules/BasketCart";
import BasketSidebar from "../components/modules/BasketSidebar";
import Lottie from "lottie-react";
import empty from "../animation/empty.json";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CheckoutsPage() {
  const [state, dispatch] = useCart();
  console.log(state);

  const navigate = useNavigate();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  if (!state.itemsCounter) {
    return (
      <div className="h-screen -mt-36 sm:-mt-20 flex flex-col justify-center items-center">
        <Lottie className="" animationData={empty} loop={true} />
        <button
          onClick={() => navigate(-1)}
          to="/products"
          className="flex items-center rounded-xl bg-orange-600 px-2 text-sm gap-2 text-white hover:scale-105 transition-all duration-75 hover:px-4 hover:py-2 hover:animate-pulse"
        >
          <FaArrowLeft className="" /> Back To Shop
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse ">
      <BasketSidebar data={state} />
      {state.selectedItems.map((item) => (
        <BasketCart key={item.id} clickHandler={clickHandler} data={item} />
      ))}
    </div>
  );
}

export default CheckoutsPage;
