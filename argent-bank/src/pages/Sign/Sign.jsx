import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SignForm from "../../components/SignForm/SignForm";
import "./Sign.css";

const Sign = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <SignForm />
      </main>
      <Footer />
    </>
  );
};

export default Sign;
