import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    console.log(props);
    // const transformedIngredients = Object.keys(props.ingredients)
    //     .map((igKey) => {
    //         return [...Array(props.ingredients[igKey])].map((_, i) => {
    //             return <BurgerIngredient key={igKey + i} type={igKey} />;
    //         });
    //     })
    //     .reduce((arr, el) => {
    //         return arr.concat(el);
    //     });
    // console.log(transformedIngredients);

    const ingredientNames = Object.keys(props.ingredients).map((igKey) => {
        return igKey;
    });
    let transformedIngredients = [];
    ingredientNames.map((name) => {
        const numberOfIngredients = props.ingredients[name];
        for (let i = 0; i < numberOfIngredients; i++) {
            transformedIngredients.push(
                <BurgerIngredient key={name + i} type={name} />
            );
        }
        return null;
    });
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Add ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
