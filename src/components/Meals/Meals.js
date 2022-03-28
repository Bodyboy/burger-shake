import React from "react";
import AvalaibleMeals from "./AvalaibleMeals";
import MealsSummary from "./MealsSummary";
import nems from "../../assets/nems.png";
import nuggets from "../../assets/nuggets.png";
import tenders from "../../assets/tenders.png";
import stickMozza from "../../assets/stickMozza.png";

import sundae from "../../assets/sundae.png";
import milkshake from "../../assets/milkshake.png";
import topping from "../../assets/topping.png";

const DESSERT_MEALS = [
  {
    id: "sun",
    name: "Sundae",
    description: "",
    image: sundae,
    price: 3.5,
  },
  {
    id: "mil",
    name: "MilkShake",
    description: "",
    image: milkshake,
    price: 4.5,
  },
  {
    id: "top",
    name: "Topping",
    description: "",
    image: topping,
    price: 1,
  },
];

const TEXMEX_MEALS = [
  {
    id: "nug3",
    name: "Nuggets x3",
    description: "",
    image: nuggets,
    price: 6.0,
  },
  {
    id: "nug6",
    name: "Nuggets x6",
    description: "",
    image: nuggets,
    price: 12.0,
  },
  {
    id: "ten4",
    name: "Tenders x4",
    description: "",
    image: tenders,
    price: 7.0,
  },
  {
    id: "ten8",
    name: "Tenders x8",
    description: "",
    image: tenders,
    price: 12.0,
  },
  {
    id: "sti6",
    name: "StickMozza x6",
    description: "",
    image: stickMozza,
    price: 6.5,
  },
  {
    id: "sti9",
    name: "StickMozza x9",
    description: "",
    image: stickMozza,
    price: 9.0,
  },
  {
    id: "nem3",
    name: "Nem's x3",
    description: "",
    image: nems,
    price: 7.0,
  },
  {
    id: "nem5",
    name: "Nem's x5",
    description: "",
    image: nems,
    price: 9.5,
  },
];

const Meals = () => {
  return (
    <React.Fragment>
      {/*<MealsSummary />*/}
      <AvalaibleMeals title="Tex mex" meals={TEXMEX_MEALS} menuMode={true} />
      <AvalaibleMeals title="Desserts" meals={DESSERT_MEALS} menuMode={false} />
    </React.Fragment>
  );
};

export default Meals;
