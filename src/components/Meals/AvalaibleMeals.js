import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import nems from "../../assets/nems.png"
import nuggets from "../../assets/nuggets.png"
import tenders from "../../assets/tenders.png"
import stickMozza from "../../assets/stickMozza.png"


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Nuggets x3",
    description: "",
    image: nuggets,
    price: 6.0,
  },
  {
    id: "m1",
    name: "Nuggets x6",
    description: "",
    image: nuggets,
    price: 12.0,
  },
  {
    id: "m1",
    name: "Tenders x4",
    description: "",
    image: tenders,
    price: 7.0,
  },
  {
    id: "m1",
    name: "Tenders x8",
    description: "",
    image: tenders,
    price: 12.0,
  },
  {
    id: "m12",
    name: "StickMozza x6",
    description: "",
    image: stickMozza,
    price: 6.5,
  },
  {
    id: "m12",
    name: "StickMozza x9",
    description: "",
    image: stickMozza,
    price: 9.0,
  },
  {
    id: "m12",
    name: "Nem's x3",
    description: "",
    image: nems,
    price: 7.0,
  },
  {
    id: "m12",
    name: "Nem's x5",
    description: "",
    image: nems,
    price: 9.5,
  },
];

const AvalaibleMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
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
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvalaibleMeals;
