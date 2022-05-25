import { NavLink } from "react-router-dom";
import "./SignForm.css";

const SignForm = () => {
  return (
    <section className="sign-in-content">
      <span className="fa fa-user-circle sign-in-icon"></span>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <p className="errorUser"></p>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <p className="errorPassword"></p>
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        {/* static button form submit */}
        <NavLink to="/user" className="sign-in-button">
          Sign In
        </NavLink>
        {/* button for dynamic datas
        <button className="sign-in-button">Sign In</button> */}
      </form>
    </section>
  );
};

export default SignForm;
