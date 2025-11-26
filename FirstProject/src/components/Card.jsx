import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <img src={props.img} alt=""></img>
      <h1>
        {props.user}, {props.age}
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
        dolore?
      </p>
      <button>See Profile</button>
    </div>
  );
};

export default Card;
