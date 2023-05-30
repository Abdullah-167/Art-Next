import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const Index = () => {
  return (
    <div className="w-full py-20">
      <div className="main-container">
        <h1 className="text-2xl">Shopping Cart</h1>
        <div className="md:flex justify-between py-16 border-b border-black">
          <div className="flex gap-10">
            <div>
              <img
                className="max-w-[190px] min-w-[190px]"
                src="/images/Gorilla+on+paper.jpg"
                alt=""
              />
            </div>
            <div className="mt-3">
              <a href="" className="block cursor-pointer text-base">
                Nuclear
              </a>
              <h1 className="text-gray-500 text-sm mt-1">Frame: White</h1>
            </div>
          </div>
          <div className="flex justify-between md:gap-48 gap-28 md:pt-0 pt-16">
            <div className="flex gap-6 md:gap-10 items-center">
              <a className="cursor-pointer">
                <FiMinus />
              </a>
              <a>2</a>
              <a className="cursor-pointer">
                <FiPlus />
              </a>
            </div>
            <div className="flex gap-6 md:gap-10 items-center">
              <h1>$450</h1>
              <a className="cursor-pointer hover:bg-slate-200 rounded-full p-2 duration-100">
                <CgClose />
              </a>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3">
          <div className="bg-white col-span-2"></div>
          <div className="col-span-1">
            <div className="flex justify-between py-10">
              <h1>Subtotal</h1>
              <h1>$450.00</h1>
            </div>
            <Link href={"/checkout"}>
            <a className="bg-black px-32 flex justify-center md:px-40 py-4 text-white cursor-pointer">
              Checkout
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
