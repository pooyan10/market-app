import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale,
} from "./Icons.jsx";
import { SlBasket } from "react-icons/sl";
import { Badge } from "@nextui-org/react";
import { useCart } from "../../context/CartContext.jsx";

export default function Nav() {
  const [state, dispatch] = useCart();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar className="bg-orange-200 rounded-b-md h-10 md:h-14">
      <NavbarBrand className="">
        <p className="font-bold text-inherit">PooStore</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="lg"
                variant="light"
              >
                Categories
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="ACME features"
            className="w-[200px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="All" startContent={icons.scale} href="/">
              All
            </DropdownItem>
            <DropdownItem key="Electronics" startContent={icons.activity}>
              Electronics
            </DropdownItem>
            <DropdownItem key="Jewelery" startContent={icons.flash}>
              Jewelery
            </DropdownItem>
            <DropdownItem key="Men's Clothing" startContent={icons.server}>
              Men's Clothing
            </DropdownItem>
            <DropdownItem key="Women's Clothing" startContent={icons.user}>
              Women's Clothing
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <Link href="/checkouts">
        <Badge
          className="-m-[5px] bg-orange-600 text-white text-xs "
          content={!!state.itemsCounter && state.itemsCounter}
          variant="shadow"
          size="sm"
          showOutline="false"
          placement="top-right"
        >
          <NavbarItem className="">
            <SlBasket className="text-xl" />
          </NavbarItem>
        </Badge>
      </Link>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link className="text-orange-600" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-orange-300 h-7"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
