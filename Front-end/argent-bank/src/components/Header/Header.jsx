import EnterpriseLogo from "../EnterpriseLogo/EnterpriseLogo";
import UserAvatar from "../UserAvatar/UserAvatar";
import "./Header.css";

const Header = () => {
  return (
    <nav className="nav">
      <EnterpriseLogo />
      <UserAvatar />
    </nav>
  );
};

export default Header;
