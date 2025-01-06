import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseAPI } from "../../../utils/constanst";

const Products = ({ searchQuery }: { searchQuery: string }) => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return <div>Token mavjud emas!</div>;
      }
      try {
        const response = await axios.get(`${baseAPI}/product/all`, {
          params: { search: searchQuery },
        });
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (searchQuery) fetchProducts();
  }, [searchQuery]);

  return (
    <>
      {products?.map((product) => (
        <div>
          {products ? (
            <div
              style={{
                color: "black",
                width: "auto",
              }}
            >
              <h6 style={{ borderBottom: "0px solid #D1BCB2", width: "auto" }}>
                {product.types}
              </h6>
            </div>
          ) : (
            <div>No results yet...</div>
          )}
        </div>
      ))}
    </>
  );
};

export default Products;
