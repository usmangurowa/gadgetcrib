import React from "react";

import { AiOutlineShoppingCart, AiOutlineScan } from "react-icons/ai";
import IconButton from "../Micro/IconButton";

const Product = () => {
  return (
    <div class="group relative overflow-hidden rounded-3xl bg-gray-100">
      <div class="p-5 flex justify-between items-center">
        <IconButton icon={<AiOutlineScan />} />
        <IconButton icon={<AiOutlineShoppingCart />} />
      </div>
      <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src="/images/image1.jpeg"
          alt="Front of men&#039;s Basic Tee in black."
          class="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div class="p-5 flex flex-col text-center justify-between">
        <div>
          <h3 class="text-md text-secondary">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              Earbuds Headphones
            </a>
          </h3>
        </div>
        <p class="text-sm font-medium text-secondary">$35</p>
      </div>
    </div>
  );
};

export default Product;
