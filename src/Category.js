import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import TotalItemLists from "./JSON/TotalItemsLists.json";
import nikeZoom from "./images/nike-zoom.gif";
import { connect } from "react-redux";
import { InitializeProductDetail } from "./actions/ProductActions";

import "./css/Category.css";

const Category = (props) => {
  const [filteredItems, setFilteredItems] = useState(TotalItemLists);
  const [price, setPrice] = useState();
  const [itemType, setItemType] = useState();
  const [selectedProduct, setSelectedProduct] = useState();

  const handleSelectedProduct = (priceId) => {
    setPrice(priceId);
    handleFiltering(priceId, itemType);
  };

  const handlePrice = (priceId) => {
    setPrice(priceId);
    handleFiltering(priceId, itemType);
  };

  const handleItemType = (type) => {
    setItemType(type);
    handleFiltering(price, type);
  };

  const handleFiltering = (price, itemType) => {
    let modifiedTotalItemLists = JSON.parse(JSON.stringify(TotalItemLists));

    if (price) {
      switch (price) {
        case "1":
          modifiedTotalItemLists = modifiedTotalItemLists.filter((e) => e.price <= 100);
          break;

        case "2":
          modifiedTotalItemLists = modifiedTotalItemLists.filter((e) => e.price >= 100 && e.price <= 200);
          break;
        case "3":
          modifiedTotalItemLists = modifiedTotalItemLists.filter((e) => e.price >= 200);
          break;
      }
    }

    if (itemType) {
      modifiedTotalItemLists = modifiedTotalItemLists.filter((e) => e.productType === itemType);
    }

    setFilteredItems(modifiedTotalItemLists);
  };

  return (
    <section class="items">
      <div class="row">
        <div class="col">
          <h2>SORT BY</h2>
          <h3>PRICE</h3>
          <hr />
          <input type="radio" name="price" id="1" onChange={() => handlePrice("1")} /> Under $100 <br />
          <input type="radio" name="price" id="2" onChange={() => handlePrice("2")} /> Between $100 and $200 <br />
          <input type="radio" name="price" id="3" onChange={() => handlePrice("3")} /> Over 200 <br />
          <h3>Type</h3>
          <hr />
          <input type="radio" name="size" id="Garments" onChange={() => handleItemType("Garments")} /> Garments <br />
          <input type="radio" name="size" id="Footwear" onChange={() => handleItemType("Footwear")} /> Footwear <br />
          <input type="radio" name="size" id="Watches" onChange={() => handleItemType("Watches")} /> Watches <br />
        </div>
        <div class="col2">
          <img class="header-img" src={nikeZoom} alt="" />
          <div class="items2">
            {filteredItems.map((each) => {
              return (
                <NavLink to="/Products" activeClassName="active">
                  <div
                    class="category-card"
                    onClick={() => {
                      props.addProductDetail(each);
                    }}
                  >
                    <img src={require(`./images/${each.image}`)} alt="Image not available" />
                    <h4>{each.productName}</h4>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                    <p class="price">${each.price}</p>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductDetail: (payload) => dispatch(InitializeProductDetail(payload)),
  };
};

const mapStateToProps = (state) => {
  return {
    TotalItemLists: state.ProductReducer.TotalItemLists,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
