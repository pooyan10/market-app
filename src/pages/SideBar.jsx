import React from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const categories = [
  { id: 1, type: "All" },
  { id: 2, type: "Electronics" },
  { id: 3, type: "Jewelery" },
  { id: 4, type: "Men's Clothing" },
  { id: 5, type: "Women's Clothing" },
];

function SideBar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));

    if (tagName !== "LI") return;
  };

  return (
    <Dropdown className="">
      <DropdownTrigger>
        <Button className="text-orange-700" color="warning" variant="flat">
          Categories
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={categories}>
        {(categorie) => (
          <DropdownItem
            key={categorie.id}
            className=""
            onClick={categoryHandler}
          >
            {categorie.type}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
// <div className="">
//   <div className="">
//     <FaListUl />
//     <p className="">Categories</p>
//   </div>
//   <ul onClick={categoryHandler} className="">
//     {categories.map((category) => (
//       <li
//         className={
//           query.category === category.type.toLowerCase()
//             ? "selected"
//             : "hover:text-orange-600"
//         }
//         key={category.id}
//       >
//         {category.type}
//       </li>
//     ))}
//   </ul>
// </div>
//   );
// }

export default SideBar;
