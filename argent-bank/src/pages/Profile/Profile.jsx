import React from "react";
import Header from "../../components/Header/Header";
import InformationUser from "../../components/InformationUser/InformationUser";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import userAccountData from "../../assets/mockedData";
import "./Profile.css";

const Profile = () => {
  /* const dispatch = useDispatch(); */
  const test = useSelector(({ user }) => user.user);
  console.log(test);
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <InformationUser />
        <TransactionCard
          title={userAccountData[0].transactionId}
          amount={userAccountData[0].amount}
          description={userAccountData[0].balanceStatus}
        />
        <TransactionCard
          title={userAccountData[1].transactionId}
          amount={userAccountData[1].amount}
          description={userAccountData[1].balanceStatus}
        />
        <TransactionCard
          title={userAccountData[2].transactionId}
          amount={userAccountData[2].amount}
          description={userAccountData[2].balanceStatus}
        />
      </main>
      <Footer />
    </>
  );
};

export default Profile;
