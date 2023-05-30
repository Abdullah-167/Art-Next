import React from "react";

const Index = () => {
  return (
    <div className="w-full">
      <div className="main-container">
        <div className="text-2xl text-gray-700 py-28">
          <a className="flex flex-wrap justify-center mb-3">
            Email:{" "}
            <a className="ml-2 underline cursor-pointer">
              studio@elizabethwaggett.com
            </a>{" "}
            or use the form below
          </a>
          <a className="flex flex-wrap justify-center mb-3">
            Instagram{" "}
            <a className="ml-2 underline cursor-pointer"> @elizabeth_waggett</a>
          </a>
          <a className="flex flex-wrap justify-center mb-3">
            Follow the artist on{" "}
            <a className="ml-2 underline cursor-pointer"> Artsy</a>
          </a>
        </div>
        <div className="bg-[#EDEDED] py-20 mb-20 shadow-md px-4">
          <h1 className="text-center text-[#272727] text-[30px] font-medium mb-4">
            Pre-release and updates
          </h1>
          <p className="text-center text-[#272727] text-base font-light mb-8">
            Only once in a while, don’t worry {`;)`}
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col gap-2 md:flex-row">
              <input
                type={"text"}
                placeholder="Email Address"
                className="px-4 py-3 border-none focus-within:outline-none"
              />
              <button className="text-white bg-[#272727] py-3 px-6">GO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
