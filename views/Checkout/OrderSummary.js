/* eslint-disable @next/next/no-img-element */
import React from "react";

const OrderSummary = () => {
  return (
    <div className=" ">
      <div className="input-container">
        <h2 className="input_title">Order Summary</h2>

        <ul
          role="list"
          className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200"
        >
          {products.map((product) => (
            <li key={product.id} className="flex py-6 space-x-6">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
              />
              <div className="flex-auto space-y-1">
                <h3 className="text-gray-900">
                  <a href={product.href}>{product.name}</a>
                </h3>
                <p>{product.color}</p>
                <p>{product.size}</p>
              </div>
              <p className="flex-none font-medium text-gray-900">
                {product.price}
              </p>
            </li>
          ))}
        </ul>

        <dl className="text-sm font-medium text-gray-500 space-y-3 border-t border-gray-200 pt-6">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd className="">$72.00</dd>
          </div>

          <div className="flex justify-between">
            <dt>Shipping</dt>
            <dd className="">$8.00</dd>
          </div>

          <div className="flex justify-between">
            <dt>Taxes</dt>
            <dd className="">$6.40</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium text-black">Total</dt>
            <dd className="font-medium text-black">$86.40</dd>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
            <dt className="text-[10px]"> SECURE SSL CHECKOUT</dt>
          </div>
        </dl>

        <div className="mt-16 border-t border-gray-200 py-6 text-right">
          <a
            href="#"
            className="text-sm font-medium text-black hover:text-indigo-500"
          >
            Continue Shopping<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: "$36.00",
    color: "Charcoal",
    size: "L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/confirmation-page-06-product-01.jpg",
    imageAlt: "Model wearing men's charcoal basic tee in large.",
  },
  // More products...
];
