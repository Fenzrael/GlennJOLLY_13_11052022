import React from "react";
import { Navigate } from "react-router-dom";
import "./SignForm.css";
import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendHeaderAuthorization,
  sendTokenAPI,
  getRequestStatus,
} from "../../feature/user.slice";

const SignForm = () => {
  // Variables capturant les donnees tapees par l'utilisateur dans les input et le formulaire grace au hook redux "useRef"
  const inputEmail = useRef();
  const inputPassword = useRef();
  const formRef = useRef();

  const errorUser = document.querySelector(".errorUser");
  console.log(errorUser);
  const dispatch = useDispatch();
  const status = useSelector(({ user }) => user.user.status);
  console.log(status);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data taper dans les input mis dans un objet
    const data = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };

    // Appel axios (post)
    axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
      // Stockage du token dans le store
      dispatch(sendTokenAPI(res.data.body.token));
      dispatch(getRequestStatus(res.data.status));
      axios
        .post(
          "http://localhost:3001/api/v1/user/profile",
          {},
          {
            headers: { Authorization: `Bearer ${res.data.body.token}` },
          }
        )
        .then((res2) => {
          dispatch(sendHeaderAuthorization(res2.data.body));
        });
      /* formRef.current.reset(); */
    });

    if (status !== 200 || status === null || status === undefined) {
      errorUser.innerHTML = "veuillez bien renseigner un email valide";
    } else {
      return (errorUser.innerHTML = "");
    }
  };

  if (status === 200) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className="sign-in-content">
      <span className="fa fa-user-circle sign-in-icon"></span>
      <h1>Sign In</h1>
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={inputEmail} />
          <p className="errorUser"></p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={inputPassword} />
          <p className="errorPassword"></p>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        {/* static button form submit */}
        {/* <NavLink to="/profile" className="sign-in-button">
            Sign In
          </NavLink> */}
        {/* button for dynamic datas */}
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default SignForm;
