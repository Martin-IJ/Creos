import React, { useState } from "react";
import { products } from "./db";

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 my-32 px-5 md:px-0">
      <div className="lg:w-1/2 w-full">
        <h2 className="text-white text-3xl md:text-5xl md:font-semibold mb-10">
          Products
        </h2>
        {selectedProduct && (
          <p className="border-white/60 border px-10 py-16 rounded-3xl leading-relaxed">
            {selectedProduct.description}
          </p>
        )}
      </div>
      <div className="lg:w-1/2 w-full text-center lg:text-end text-7xl md:text-[9rem] font-semibold">
        <ul className="space-y-10">
          {products.map((product) => (
            <li
              key={product.id}
              onClick={() => handleProductClick(product)}
              className={
                product === selectedProduct ? "text-white" : "text-white/30"
              }
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
