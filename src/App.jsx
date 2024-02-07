import { Navigate, Route, Routes } from "react-router-dom";
import ProductsProvider from "./context/productsContext";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutsPage from "./pages/CheckoutsPage";
import PageNotFound from "./pages/404";
import { CartProvider } from "./context/cartContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkouts" element={<CheckoutsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
