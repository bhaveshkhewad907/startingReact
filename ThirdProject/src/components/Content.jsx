import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = () => {
  return (
    <div className="h-11/12 py-5 gap-6 px-10 flex justify-between w-full ">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Content;
