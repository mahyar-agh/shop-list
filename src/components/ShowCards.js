import React from "react";
import { connect } from "react-redux";
import { addToShopList } from "../actions";

import Card from "./Card";

const ShowCards = ({ foods, addToShopList }) => {
  const renderList = foods.map((food) => {
    return (
      <div className="four wide column" key={food.title}>
        <Card onButtonClick={() => addToShopList(food)} food={food} />
      </div>
    );
  });

  return <div className="ui grid">{renderList}</div>;
};

const mapStateToProps = (state) => {
  return { foods: state.foods };
};
export default connect(mapStateToProps, {
  addToShopList,
})(ShowCards);
