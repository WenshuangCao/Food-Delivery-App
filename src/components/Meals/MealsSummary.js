import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Delicious Dessert, Delivered To You</h2>
      <p>
        Choose your favorite dessert and enjoy a great dessert time at home.
      </p>
      <p>
        All desserts are made with high-quality ingredients and by chef Ainsley!
      </p>
    </section>
  );
};

export default MealsSummary;
