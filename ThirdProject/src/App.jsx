import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const App = (props) => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1705091982079-d8bb61603cc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      tag: "",
      status: "Satisfied",
      color: "green",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1678453147461-0e53fe848df6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHdvcmt8ZW58MHx8MHx8fDA%3D",
      tag: "",
      status: "Underbanked",
      color: "orange",
    },
    {
      img: "https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHx3b3JrfGVufDB8fDB8fHww",
      tag: "",
      status: "Overworked",
      color: "royalblue",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
