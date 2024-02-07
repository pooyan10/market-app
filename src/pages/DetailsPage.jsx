import React from "react";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../context/productsContext";
import Loader from "../components/modules/Loader";
import { SiOpenproject } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdPricetag } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function DetailsPage() {
  const { id } = useParams();
  const productDetails = useProductDetails(+id);
  const navigate = useNavigate();

  if (!productDetails) return <Loader />;

  return (
    <div className="flex md:h-[80vh] flex-col  md:grid grid-cols-3 items-center m-2 pb-5">
      <img
        className=" border-2 w-[80%]  border-orange-600 rounded-xl p-4 m-4 bg-white border-dotted "
        src={productDetails.image}
        alt={productDetails.title}
      />
      <div className="border-2 flex flex-col justify-center md:mr-8 md:mt-8 md:px-6 p-5 col-span-2 h-full rounded-xl   border-gray-300 border-dotted">
        <h3 className="text-lg font-bold text-orange-600">
          {productDetails.title}
        </h3>
        <p className="text-sm text-gray-600 mt-6">
          {productDetails.description}
        </p>
        <p className="flex items-center gap-2 mt-6">
          <SiOpenproject className="text-orange-600" />
          {productDetails.category}
        </p>

        <div className="flex justify-between items-end h-8 mt-2">
          <span className="flex items-center gap-2 mt-2">
            <IoMdPricetag className="text-orange-600" />
            {productDetails.price} $
          </span>
          <button
            onClick={() => navigate(-1)}
            to="/products"
            className="flex items-center rounded-xl bg-orange-600 px-2 text-sm gap-2 text-white hover:scale-105 transition-all duration-75 hover:px-4 hover:py-2 mr-6"
          >
            <FaArrowLeft /> Back To Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
