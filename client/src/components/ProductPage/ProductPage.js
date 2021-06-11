import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../Rating/RatingStars";
import products from "../../products";
import "./ProductPage.css";

function ProductPage({ match }) {
  const product = products.find((p) => p._id === match.params.id);
  return (
    <div className="productPage__container">
      <div className="productPage__productImage">
        <img src={product.image} alt="Loading..." width="80%" height="80%" />
      </div>
      <div className="productPage__productText">
        <div className="productPage__productHeader">{product.name}</div>
        <hr />
        <div className="productPage__productRating">
          <RatingStars
            value={product.rating}
            text={`(${product.numReviews})`}
          />
        </div>
        <div className="productPage__productDescription ">
          {product.description}
        </div>
        <div className="productPage__productPrice ">${product.price}</div>
        <div className="productPage__addToCartButton ">
          <button type="submit">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
