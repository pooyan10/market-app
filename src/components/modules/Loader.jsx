import { ColorRing } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center mb-10 h-[80vh] w-screen ">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#FFBB5C", "#FF9B50", "#E25E3E", "#C63D2F", "#FFD099"]}
      />
    </div>
  );
}

export default Loader;
