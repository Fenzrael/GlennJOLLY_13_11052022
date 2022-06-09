import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putUpdateInfos } from "../../feature/user.slice";

import "./InformationUser.css";

const InformationUser = () => {
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editForm, setEditForm] = useState(false);

  const dispatch = useDispatch();
  const dataSelectedUser = useSelector(({ user }) => user.user?.headerAuth);
  const token = useSelector(({ user }) => user.user?.token);

  const handleEdit = () => {
    setEditForm(true);
    const editButton = document.querySelector(".header__editButton");
    editButton.classList.add("invisible");
  };

  const handleCancel = () => {
    setEditForm(false);
    const editButton = document.querySelector(".header__editButton");
    editButton.classList.remove("invisible");
  };

  const handleUpdateInfosUser = () => {
    setEditForm(false);

    const data = {
      firstName: editFirstName,
      lastName: editLastName,
    };
    axios.put("http://localhost:3001/api/v1/user/profile", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(putUpdateInfos(dataSelectedUser));
  };

  return (
    <section className="header">
      <h1 className="header__title">
        Welcome back
        <p>
          {dataSelectedUser?.firstName} {dataSelectedUser?.lastName}
        </p>
      </h1>
      <button className="header__editButton" onClick={handleEdit}>
        Edit Name
      </button>
      <div className="header__infos">
        {editForm ? (
          <>
            <input
              type="text"
              placeholder={dataSelectedUser?.firstName}
              onChange={(e) => setEditFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder={dataSelectedUser?.lastName}
              onChange={(e) => setEditLastName(e.target.value)}
            />
            <button
              className="header__editButton2 button2"
              onClick={handleUpdateInfosUser}
            >
              Save
            </button>
            <button className="header__editButton2" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default InformationUser;
