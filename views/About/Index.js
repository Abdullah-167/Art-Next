import React from "react";

const Index = () => {
  return (
    <div className="w-full">
      <div className="main-container">
        <div className="md:grid grid-cols-4 pt-28">
          <div className="col-span-3 border-b-[1px] pb-8 border-black">
            <h1 className="mb-8 text-sm md:text-base ">About</h1>
            <h1 className="text-2xl md:text-[36px] md:leading-[42px]">
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.{" "}
            </h1>
            <h1 className="mt-8 text-sm md:text-base">
              Don’t worry about sounding professional. Sound like you. There are
              over 1.5 billion websites out there, but your story is what’s
              going to separate this one from the rest. If you read the words
              back and don’t hear your own voice in your head, that’s a good
              sign you still have more work to do.
            </h1>
          </div>
          <div className="bg-white"></div>
        </div>
        <div className="pb-20">
          <a className="cursor-pointer mt-10 mb-1 block text-sm md:text-base">
            email@example.com
          </a>
          <a className="cursor-pointer underline text-sm md:text-base">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
