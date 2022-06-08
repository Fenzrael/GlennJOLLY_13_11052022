import React from "react";
import { useSelector } from "react-redux";
/* import { useSelector } from "react-redux"; */
import EnterpriseLogo from "../EnterpriseLogo/EnterpriseLogo";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Header.css";

const Header = () => {
  // recuperation data firstName du store
  const identity = useSelector(
    ({ user }) => user.user?.headerAuth?.firstName ?? ""
  );

  return (
    <nav className="nav">
      <EnterpriseLogo />
      <UserAvatar firstname={identity} />
    </nav>
  );
};

export default Header;
