/* eslint-disable */

import { Route, Routes } from "react-router-dom";

import HomePage from "../../pages/HomePage";
import PageNotFound from "../../pages/PageNotFound";
import DepartmentsPage from "../../pages/DepartmentsPage";
import ProductsPage from "../../pages/ProductsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/departments" element={<DepartmentsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
