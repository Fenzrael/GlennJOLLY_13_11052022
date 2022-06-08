import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendTokenAPI } from "../../feature/user.slice";
import "./InformationUser.css";

const InformationUser = () => {
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editForm, setEditForm] = useState(false);
  const dispatch = useDispatch();
  const dataSelectedUser = useSelector(({ user }) => user.user?.headerAuth);
  const token = useSelector(({ user }) => user.user.token);
  /* const data = {
    firstName: ,
    lastName: 
  } */

  const handleUpdateInfosUser = () => {
    /* setEditForm = true; */
    const data = {
      firstName: "glenn",
      lastName: "jolly",
    };
    axios.put("http://localhost:3001/api/v1/user/profile", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  return (
    <section className="header">
      <h1 className="header__title">
        Welcome back
        <br />
        <p>{dataSelectedUser?.firstName}</p> <p>{dataSelectedUser?.lastName}</p>
      </h1>
      <button className="header__editButton">Edit Name</button>
      {/* <div>
        {editForm ? (
          <>
            <input type="text" placeholder={dataSelectedUser.}
          </>
        )}
      </div> */}
      <button className="header__edits" onClick={handleUpdateInfosUser}>
        Save
      </button>
    </section>
  );
};

export default InformationUser;
