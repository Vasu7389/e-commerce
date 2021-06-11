import React from "react";
import { HomeBanner } from "../HomeBanner/HomeBanner";
import ProductList from "../ProductList/ProductList";
import SectionHeader from "../SectionHeader/SectionHeader";

const HomePage = () => {
  return (
    <>
      <HomeBanner />
      <SectionHeader text="Best Sellers" />
      <ProductList />
    </>
  );
};

export default HomePage;
