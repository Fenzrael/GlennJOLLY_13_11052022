import React from "react";
import Header from "../../components/Header/Header";
import InformationUser from "../../components/InformationUser/InformationUser";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <InformationUser />
        <TransactionCard />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
