import React from "react";
import Email from "./Email";
import OrderSummary from "./OrderSummary";
import Payment from "./Payment";
import ReviewPurchase from "./ReviewPurchase";
import Shipping from "./Shipping";

const Index = () => {
  return (
    <div className="bg-bgGray py-[33px]">
      <div className="max-w-4xl mx-auto px-5">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-12 gap-7">
          <div>
            <Email />
            <Shipping />
            <Payment />
            <ReviewPurchase />
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
