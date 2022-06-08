import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Error.css";

const Error = () => {
  return (
    <>
      <Header />
      <h1>404</h1>
      <p>La page n'est pas accessible</p>
      <Footer />
    </>
  );
};

export default Error;
