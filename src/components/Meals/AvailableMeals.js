import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheesecake",
    description: "Japanese Light Cheesecake",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Tiramisu",
    description: "A coffee-flavoured Italian dessert!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Cream Puffs",
    description: "Homemade cream puff, all kinds of flavours",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Mango Mousse",
    description: "Sweet, creamy, and perfectly tangy!",
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
