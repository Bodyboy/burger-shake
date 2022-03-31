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

import bs1 from "../../assets/formules/bs1.png";
import bs2 from "../../assets/formules/bs2.png";
import bs3 from "../../assets/formules/bs3.png";
import bs4 from "../../assets/formules/bs4.png";
import bs5 from "../../assets/formules/bs5.png";
import bs6 from "../../assets/formules/bs6.png";
import bs7 from "../../assets/formules/bs7.png";
import bs8 from "../../assets/formules/bs8.png";
import bs9 from "../../assets/formules/bs9.png";


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

const FORMULES = [
  {
    id: "bs1",
    name: "BS1",
    description: "2 Cheeses",
    image: bs1,
    price: 5.5,
  },
  {
    id: "bs2",
    name: "BS2",
    description: "1 Double Cheese + 1 Cheese",
    image: bs2,
    price: 6.5,
  },
  {
    id: "bs3",
    name: "BS3",
    description: "1 Biggy + 1 Cheese",
    image: bs3,
    price: 8.0,
  },
  {
    id: "bs4",
    name: "BS4",
    description: "1 Biggy + 1 Milkshake",
    image: bs4,
    price: 9.5,
  },
  {
    id: "bs5",
    name: "BS5",
    description: "1 Méga + 1 Sundae",
    image: bs5,
    price: 10,
  },
  {
    id: "bs6",
    name: "BS6",
    description: "1 Méga + 1 Cheese",
    image: bs6,
    price: 9.5,
  },
  {
    id: "bs7",
    name: "BS7",
    description: "1 Biggy + 1 Chicken",
    image: bs7,
    price: 10.0,
  },
  {
    id: "bs8",
    name: "BS8",
    description: "1 Biggy + 1 Long au choix",
    image: bs8,
    price: 11,
  },
  {
    id: "bs9",
    name: "BS9",
    description: "2 Longs au choix",
    image: bs9,
    price: 12,
  },
];

const Meals = () => {
  return (
    <React.Fragment>
      {/*<MealsSummary />*/}
      <AvalaibleMeals title="Formules" meals={FORMULES} menuMode={true} />
      <AvalaibleMeals title="Tex mex" meals={TEXMEX_MEALS} menuMode={true} />
      <AvalaibleMeals title="Desserts" meals={DESSERT_MEALS} menuMode={false} />
    </React.Fragment>
  );
};

export default Meals;
