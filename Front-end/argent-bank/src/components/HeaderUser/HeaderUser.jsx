import "./HeaderUser.css";

const HeaderUser = () => {
  return (
    <section className="header">
      <h1 className="header__title">
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="header__editButton">Edit Name</button>
    </section>
  );
};

export default HeaderUser;
