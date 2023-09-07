import React from "react";
import ReactDOM from "react-dom/client";
import ResContainer from "./components/ResContainer"
import Header from "./components/Header";


const App = () => {
  return (
    <div className="app">
      <Header />
      <ResContainer />
    </div>
  );
};

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(<App />);
