import React from "react";
import classes from "./header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import logo from "../../assets/burger-shake-logo.png";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <img className={classes.logo} src={logo} alt="logo burger & shake" />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table food of delicious food !" />
      </div>
    </React.Fragment>
  );
};

export default Header;
