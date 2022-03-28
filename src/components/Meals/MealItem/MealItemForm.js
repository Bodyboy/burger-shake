import React, { useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useRef } from "react";

const MealItemForm = (props) => {
  const [amoutIsValid, setamoutIsValid] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    if (isChecked) {
      setIsChecked(false);
      props.onMenuSelect(false);
    } else {
      setIsChecked(true);
      props.onMenuSelect(true);
    }
  };

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setamoutIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantité"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {props.menuMode && (
        <div className={classes.menuContainer}>
          <input
            type="checkbox"
            id="menu"
            name="menu"
            value="Menu"
            checked={isChecked}
            onChange={handleOnChange}
          />
          <span className={classes.menuText}>Menu</span>
        </div>
      )}

      <button>Ajouter</button>
      {!amoutIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
