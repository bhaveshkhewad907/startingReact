import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Prashant"
        age={26}
        img="https://images.unsplash.com/photo-1763854492937-fb7ae2f601f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Hari Om"
        age={28}
        img="https://images.unsplash.com/photo-1763661582974-ee6218176217?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="jai ho"
        age={32}
        img="https://images.unsplash.com/photo-1763848841998-1aa3349d3c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Inderlok"
        age={50}
        img="https://images.unsplash.com/photo-1763742150863-1e1ce92195bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
