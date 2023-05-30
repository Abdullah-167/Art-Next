import React from "react";

function Email(props) {
  return (
    <div className="input-container">
      <h2 className="input_title">1. Your Email</h2>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="checkout_input_box"
        />
        <p className="text-xs text-Gray mt-[6px] leading-4">{`You'll receive receipts and notifications at this email address.`}</p>
      </div>
      <div>
        <input type="button" value="Continue" className="continue__btn" />
      </div>
    </div>
  );
}

export default Email;
