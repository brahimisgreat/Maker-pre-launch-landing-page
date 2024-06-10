import { Section } from "../Section";
import logo from "../../assets/logo.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="header-img-container">
        <img src={logo} />
      </div>
      <Section />
    </header>
  );
};
