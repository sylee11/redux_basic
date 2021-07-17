import React from "react";
import Product from "./Product";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/actions.js/productActions";

export default function ProductList() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container">
      <Product></Product>
    </div>
  );
}
