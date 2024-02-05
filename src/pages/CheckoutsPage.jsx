import React from "react";
import { useCart } from "../context/CartContext";
import BasketCart from "../components/modules/BasketCart";
import BasketSidebar from "../components/modules/BasketSidebar";

function CheckoutsPage() {
  const [state, dispatch] = useCart();
  console.log(state);

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  if (!state.itemsCounter) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p>empty</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse">
      <BasketSidebar data={state} />
      {state.selectedItems.map((item) => (
        <BasketCart key={item.id} clickHandler={clickHandler} data={item} />
      ))}
    </div>
  );
}

export default CheckoutsPage;
