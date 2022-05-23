import "./EnterpriseLogo.css";
import { NavLink } from "react-router-dom";

const EnterpriseLogo = () => {
  return (
    <>
      <NavLink to="/" className="nav__logo logo">
        <img
          className="logo__image"
          src="../img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
    </>
  );
};

export default EnterpriseLogo;
