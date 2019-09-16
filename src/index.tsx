import React from "react";
import ReactDOM from "react-dom";

const App = () => <p>Hello, World!</p>;

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
