import React from "react";
import "./ProductList.css";
import products from "../../products";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

class ProductList extends React.Component {
  render() {
    return (
      <div className="productList__productCards">
        {products.map((product) => (
          <Link to={`/product/${product._id}`}>
            <ProductCard key={product._id} product={product} />
          </Link>
        ))}
      </div>
    );
  }
}

export default ProductList;
