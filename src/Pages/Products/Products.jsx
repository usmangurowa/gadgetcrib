import React from "react";
import Product from "../../Components/Product/Product";

const Products = () => {
  return (
    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Products;
