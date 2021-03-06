import React from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";

const NavBar = (props) => (
  <div className={styles["nav-bar"]}>
    <label className={styles["title"]}>Google Maps Search App </label>
    <Button
      label={"Add Map"}
      className={styles["link"]}
      onClick={props.buttonFunctionality}
    />
  </div>
);


export default NavBar;
