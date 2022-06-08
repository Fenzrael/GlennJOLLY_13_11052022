import React from "react";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import EnterpriseFeatures from "../../components/EnterpriseFeatures/EnterpriseFeatures";
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
