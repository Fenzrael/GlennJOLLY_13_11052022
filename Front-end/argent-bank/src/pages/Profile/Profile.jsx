import React from "react";
import Header from "../../components/Header/Header";
import HeaderUser from "../../components/HeaderUser/HeaderUser";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <HeaderUser />
        <TransactionCard />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
