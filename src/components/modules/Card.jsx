import React, { memo } from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { productQuantity, shortenText } from "../../helper/helper";
import { useCart } from "../../context/CartContext";
import { MdDeleteOutline } from "react-icons/md";

function Card({ data }) {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();

  const quantity = productQuantity(state, id);

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };

  return (
    <div className="m-4  h-50 mx-auto bg-white rounded-xl w-screen sm:w-[270px] border-dotted border-2 p-1 flex flex-col items-start justify-end">
      <div className="grid grid-cols-2 w-full sm:flex flex-col ">
        <div className="col-span-1 sm:inline">
          <img
            src={image}
            alt={title}
            className="object-contain p-5 w-[150px] h-[150px] sm:h-[270px] sm:w-[270px] "
          />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-start">
          <h1 className="ml-4 text-orange-500 font-semibold">
            {shortenText(title)}
          </h1>
          <p className="mt-3 ml-4">{price} $</p>
        </div>
      </div>

      <div className="sm:flex grid grid-cols-2 justify-sticky space-x-2 sm:justify-between w-full mt-2 p-3 h-16">
        <Link
          className="p-2 border  border-orange-300 flex items-center rounded-lg hover:scale-105  hover:shadow-lg transition-all duration-200"
          to={`/products/${id}`}
        >
          <TbListDetails className="text-orange-500 text-xl mx-auto" />
        </Link>
        <div className="flex items-center">
          {quantity === 1 && (
            <button
              onClick={() => clickHandler("REMOVE_ITEM")}
              className="p-2 bg-orange-500 h-full rounded-lg hover:scale-105 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <MdDeleteOutline className="text-white text-xl mx-auto" />
            </button>
          )}

          {quantity > 1 && (
            <button
              onClick={() => clickHandler("DECREASE")}
              className=" bg-orange-500 h-full  rounded-lg text-white w-9   shadow-md hover:shadow-lg transition-all duration-200"
            >
              -
            </button>
          )}

          {!!quantity && <span className="mx-3 ">{quantity}</span>}

          {quantity === 0 ? (
            <button
              onClick={() => clickHandler("ADD_ITEM")}
              className=" p-2 bg-orange-500 rounded-lg h-full hover:scale-105 shadow-md hover:shadow-lg transition-all duration-200"
            >
              <TbShoppingBagCheck className="text-white text-xl mx-auto" />
            </button>
          ) : (
            <button
              onClick={() => clickHandler("INCREASE")}
              className=" bg-orange-500 rounded-lg h-full text-white w-9   shadow-md hover:shadow-lg transition-all duration-200"
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
