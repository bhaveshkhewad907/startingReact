import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Content = (props) => {
  return (
    <div className="h-11/12 py-5 gap-6 px-10 flex justify-between w-full ">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Content;
