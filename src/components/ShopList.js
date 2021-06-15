import React from "react";
import "./shopList.css";
import { connect } from "react-redux";
import { removeFromShopList } from "../actions";

const ShopList = ({ selectedItems, removeFromShopList }) => {
  const renderList = selectedItems.map((item) => {
    return (
      <div key={item.title} className="item">
        <div className="right floated content">
          <button
            onClick={() => removeFromShopList(item)}
            className="ui orange button"
          >
            Remove
          </button>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          {item.description}
        </div>
      </div>
    );
  });

  return (
    <div className="shop-list">
      <i className="icon shopping cart"></i>
      <div className="list-Container ui inverted segment">
        <div className="ui inverted relaxed divided list">
          {selectedItems.length === 0 ? "Your Shop List Is Empty!" : renderList}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedItems: state.shopList };
};
export default connect(mapStateToProps, {
  removeFromShopList,
})(ShopList);
