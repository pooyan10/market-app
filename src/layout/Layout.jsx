import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Badge, Navbar, NavbarBrand } from "@nextui-org/react";
import { SlBasket } from "react-icons/sl";

function Layout({ children }) {
  const [state] = useCart();
  console.log(state);
  return (
    <>
      {/* <Nav /> */}
      <header>
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
      {children}
    </>
  );
}

export default Layout;
