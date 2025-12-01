import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-between overflow-hidden  w-1/3 p-6">
      <div className=" ">
        <h2 className="text-6xl font-bold">
          Prospective <br />
          <span className="text-gray-400">customer</span>
          <br />
          segmentation
        </h2>
        <p className="text-sm mt-5 font-medium text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis
          esse, ducimus possimus cupiditate libero.Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Autem labore magni officiis ab. Nisi,
          reiciendis!
        </p>
      </div>
      <div className="text-9xl ">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
