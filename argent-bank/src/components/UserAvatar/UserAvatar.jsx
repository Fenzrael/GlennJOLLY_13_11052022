import React from "react";
import { NavLink } from "react-router-dom";
import "./UserAvatar.css";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sendLogout } from "../../feature/user.slice";

const UserAvatar = (props) => {
  // Verification du chemin
  const currentLocation = useLocation();
  const profileLocation = () => {
    if (currentLocation.pathname === "/profile") {
      return true;
    } else {
      return false;
    }
  };
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(sendLogout());
    localStorage.clear();
  };

  const user = useSelector(({ user }) => user.user);
  console.log(user);

  return (
    <div>
      {/* Si le chemin est "/profile" premier bout ternaire qui marche autrement c'est le second */}
      {profileLocation() ? (
        <>
          <span className="fa fa-user-circle nav__item avatar"></span>
          {props.firstname}
          <NavLink className="nav__item" to="/login" onClick={handleLogout}>
            <span className="fa-solid fa-right-from-bracket avatar"></span> Sign
            Out
          </NavLink>
        </>
      ) : (
        <>
          {user?.token ? (
            <NavLink className="nav__item" to="/profile">
              <span className="fa fa-user-circle nav__item avatar"></span>
              Profile
            </NavLink>
          ) : (
            <NavLink className="nav__item" to="/login">
              <span className="fa fa-user-circle nav__item avatar"></span>Sign
              In
            </NavLink>
          )}
        </>
      )}
    </div>
  );
};

export default UserAvatar;
