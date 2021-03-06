import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Product() {
  const products = useSelector((state) => state.allProduct.products);
  console.log("33", products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt="image" />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta ">$ {category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  // const { title, id, category } = products[0]
  return <>{renderList}</>;
}
