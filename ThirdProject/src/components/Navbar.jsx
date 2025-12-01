import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-3 px-5 text-lg ">
      <h3 className="bg-black rounded-full text-white p-3 uppercase">
        Target audience
      </h3>
      <h4 className="bg-gray-300 rounded-full flex justify-center p-3 items-center">
        Digital Banking Platform
      </h4>
    </div>
  );
};

export default Navbar;
