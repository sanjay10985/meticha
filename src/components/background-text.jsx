import React from "react";

const BackgroundText = () => {
  return (
    <div className="absolute z-0 inset-x-0 top-32 flex flex-col items-center justify-center text-center pointer-events-none">
      <div className="text-[140px] font-bold text-white ">YES!</div>
      <div className="text-[42px] leading-tight font-bold text-white/30 max-w-4xl">
        ON DECEMBTER 25, 2024
        <br />
        ARC FOR WINDOWS WAS
        <br />
        RELEASED TO THE PUBLIC
      </div>
    </div>
  );
};

export default BackgroundText;
