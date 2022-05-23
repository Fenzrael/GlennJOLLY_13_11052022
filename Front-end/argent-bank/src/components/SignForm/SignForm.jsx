import { NavLink } from "react-router-dom";
import "./SignForm.css";

const SignForm = () => {
  return (
    <section className="sign-in-content">
      <span className="fa fa-user-circle sign-in-icon"></span>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label>
            Username:
            <input type="text" id="username" />
          </label>
          <p className="errorUser"></p>
        </div>
        <div className="input-wrapper">
          <label>
            Password:
            <input type="password" id="password" />
          </label>
          <p className="errorPassword"></p>
        </div>
        <div className="input-remember">
          <label>
            <input type="checkbox" id="remember-me" />
            Remember Me
          </label>
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
