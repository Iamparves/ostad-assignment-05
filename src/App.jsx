import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header title="Quoteful" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
