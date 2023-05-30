import React from "react";

const Shipping = () => {
  return (
    <div>
      {" "}
      <div className="input-container">
        <h2 className="input_title">2. Shipping</h2>
        <div className="grid grid-cols-2 gap-3">
          <input
            name="FirstName"
            placeholder="First Name"
            className="checkout_input_box mb-[22px]"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            className="checkout_input_box mb-[22px]"
          />
        </div>
        <div>
          <input
            name="address"
            placeholder="Address 1"
            className="checkout_input_box mb-[22px]"
          />
        </div>
        <div>
          <input
            name="address"
            placeholder="Address 2"
            className="checkout_input_box mb-[22px]"
          />
        </div>
        <div>
          <select className="checkout_input_box bg-white mb-[22px] pr-3">
            <option>united states</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <input
            name="code"
            placeholder="Zip Code"
            className="checkout_input_box mb-[22px]"
          />
          <input
            name="city"
            placeholder="City"
            className="checkout_input_box mb-[22px]"
          />
          <select className="checkout_input_box text-Gray bg-white mb-[22px] pr-3">
            <option>State</option>
          </select>
        </div>
        <div>
          <input
            name="phone"
            placeholder="Phone Number"
            className="checkout_input_box mb-[22px]"
          />
        </div>
        <div>
          <h4 className="text-[19px] font-medium">Shipping Options</h4>
          <p className="text-xs text-Gray">
            You cannot continue checkout because there are no shipping options
            available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
