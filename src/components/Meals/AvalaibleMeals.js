import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import '../../fonts/InfinitS.ttf'; 

const AvalaibleMeals = (props) => {
  const mealList = props.meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <h2 className={classes.mealsTitle}>{props.title}</h2>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvalaibleMeals;
