import React from "react";
import { NavLink } from "react-router-dom";
import "./UserAvatar.css";

const UserAvatar = () => {
  return (
    <div>
      <NavLink className="nav__item" to="/login">
        <span className="fa fa-user-circle nav__item avatar"></span>Sign In
      </NavLink>
    </div>
  );
};

export default UserAvatar;
