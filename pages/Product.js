import React from "react";
import { Header, Footer } from "../component/ui";
import MainProduct from "../features/product/MainProduct";
import Description from "../features/product/Description";

export default function Product() {
  return (
    <>
      <Header />
      <MainProduct />
      <Description />
      <Footer />
    </>
  );
}
