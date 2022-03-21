import { Fragment } from "react";
import mealsImage from "../assets/meals2.jpg";
import HeaderCart from "./HeaderCart";
import styles from "./Header.module.css";

const Header = ({ showCart }) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>🍡Ainsley's Dessert Cabin🍡</h1>
        <HeaderCart showCart={showCart}></HeaderCart>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
