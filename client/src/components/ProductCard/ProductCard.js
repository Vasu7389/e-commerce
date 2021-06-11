import React from "react";
import RatingStars from "../Rating/RatingStars";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { _id, name, image, brand, price, rating, numReviews } = product;

  return (
    <div className="productCard__container">
      <div className="productCard__image">
        <img src={image} alt="Loading..." width="100%" height="100%" />
      </div>
      <div className="productCard__name leftPadding">{name}</div>
      <div className="productCard__brand leftPadding">{brand}</div>
      <div className="productCard__rating leftPadding">
        <RatingStars value={rating} text={`(${numReviews})`} />
      </div>
      <div className="productCard__price leftPadding">${price}</div>
    </div>
  );
}

export default ProductCard;
