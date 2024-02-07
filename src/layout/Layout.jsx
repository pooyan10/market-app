import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";
import { Badge, Navbar, NavbarBrand } from "@nextui-org/react";
import { SlBasket } from "react-icons/sl";
import toast, { Toaster } from "react-hot-toast";

function Layout({ children }) {
  const [state] = useCart();

  useEffect(() => {
    state.checkout && toast.success("خرید شما با موفقیت انجام شد");
  }, [state.checkout]);
  console.log(state);
  return (
    <>
      {/* <Nav /> */}
      <header className="sticky top-0 left-0 right-0 z-20">
        <Navbar className="bg-orange-200  rounded-b-md h-14 md:h-14">
          <NavbarBrand className="">
            <Link to="/">
              <p className="font-bold text-inherit ml-4">PooStore</p>
            </Link>
          </NavbarBrand>
          <Link to="/checkouts" className="mt-2 mr-4">
            <Badge
              className="-m-[5px] bg-orange-600 text-white text-xs "
              content={!!state.itemsCounter && state.itemsCounter}
              variant="shadow"
              size="sm"
              showOutline="false"
              placement="top-right"
            >
              <SlBasket className="text-xl" />
            </Badge>
          </Link>
        </Navbar>
      </header>
      <Toaster />
      {children}
    </>
  );
}

export default Layout;
