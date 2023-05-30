import React from "react";
import Cards from "./Cards";
const Index = ({allProducts}) => {
  return (
    <div className="font-sans">
      <Cards allProducts={allProducts} />
    </div>
  );
};

export default Index;
