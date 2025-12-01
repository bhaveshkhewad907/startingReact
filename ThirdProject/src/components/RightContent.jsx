import React from "react";

const RightContent = (props) => {
  console.log(props);
  return (
    <div className=" w-2/3 p-3 ">
      <div className="h-full w-1/3  rounded-4xl relative overflow-hidden ">
        <img
          className="object-cover h-full"
          src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHdvcmt8ZW58MHx8MHx8fDA%3D"
        ></img>
        <div className="absolute flex flex-col justify-between top-0 left-0 h-full w-full p-6 ">
          <h2 className="h-12 w-12 font-bold  bg-white rounded-full flex justify-center items-center">
            1
          </h2>
          <div className="gap-6">
            <p className="mb-5 font-medium ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              consequatur voluptatibus ab! Odio, animi quae?
            </p>
            <div className="flex justify-between">
              <button
                className="bg-green-200 rounded-full p-3 font-medium text-lg
            "
              >
                Satisfied
              </button>
              <button
                className="bg-green-200 rounded-full p-3 font-medium text-lg
            "
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightContent;
