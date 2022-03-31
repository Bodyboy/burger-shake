import React, { useState } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

import { useContext } from "react";

const MealItem = (props) => {
  const [isMenu, setIsMenu] = useState(false);
  const cartCtx = useContext(CartContext);
  let price = `${props.price.toFixed(2)}`;
  price = price.replace(".", ",");

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      isMenu: isMenu,
    });
  };

  const addMenuPriceHandler = (isCheck) => {
    setIsMenu(isCheck);
  };

  return (
    <li className={classes.meal}>
      <h3>{props.name}</h3>
      <div className={classes.mealDetail}>
        <div className={classes.mealLeftColumn}>
          <img className={classes.imgMeal} src={props.image} alt="nems" />
          <div >
            <div className={classes.description}>{props.description}</div>
          </div>
        </div>
        <div className={classes.mealRightColumn}>
          {isMenu ? (
            <div className={classes.price}>
              {(parseFloat(price.replace(",", ".")) + 3)
                .toFixed(2)
                .replace(".", ",") + " €"}
            </div>
          ) : (
            <div className={classes.price}>
              {price.replace(".", ",") + " €"}
            </div>
          )}

          <MealItemForm
            id={props.id}
            onAddToCart={addToCartHandler}
            onMenuSelect={addMenuPriceHandler}
            menuMode={props.menuMode}
          />
        </div>
      </div>
    </li>
  );
};

export default MealItem;
