import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";

const logging = () => {
  console.log("Hi!");
};

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={logging} />
  </div>,
  document.getElementById("root")
);
