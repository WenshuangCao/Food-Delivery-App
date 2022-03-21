import MealForm from "./MealForm";
import styles from "./MealItem.module.css";
import { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({ id, name, amount, price });
  };

  return (
    <li key={id} className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
