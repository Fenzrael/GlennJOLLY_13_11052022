import React from "react";
import Banner from "../../components/Banner/Banner";
import EnterpriseFeatures from "../../components/EnterpriseFeatures/EnterpriseFeatures";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Banner />
        <EnterpriseFeatures />
      </main>
      <Footer />
    </>
  );
};

export default Home;
