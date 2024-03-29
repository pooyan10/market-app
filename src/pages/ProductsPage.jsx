import { useEffect, useState } from "react";
import Card from "../components/modules/Card";
import Loader from "../components/modules/Loader";
import { useProducts } from "../context/productsContext";

import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/modules/SearchBox";
import SideBar from "./SideBar";
import Lottie from "lottie-react";
import shop from "../animation/shop.json";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <div className="flex mt-6 -mb-2">
        <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
        {!!displayed.length && (
          <div className="flex items-center mt-4 ml-5">
            <SideBar query={query} setQuery={setQuery} />
          </div>
        )}
      </div>

      {!displayed.length && <Loader />}

      <div className=" flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Lottie className="h-[70vh]" animationData={shop} loop={true} />
        {displayed.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
