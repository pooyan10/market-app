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
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

      {!displayed.length && <Loader />}
      <div className=" flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayed.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {!!displayed.length && <SideBar query={query} setQuery={setQuery} />}
    </>
  );
}

export default ProductsPage;
