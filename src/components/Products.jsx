import React from "react";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Box
        className="body"
        sx={{
          backgroundColor: "#f0f0f0f",
        }}
      >
        <Box
          className="bodyItems"
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          {products.map((item, index) => (
            <ProductItem item={item} key={item.id} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Products;
