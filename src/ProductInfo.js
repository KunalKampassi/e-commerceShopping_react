import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { AddCartItems } from "./actions/ProductActions";

import nike6 from "./images/nike-6.jpg";
import "./css/ProductInfo.css";
import CartModal from "./CartModal";

const ProductInfo = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    props.addProductToCart(props.selectedProduct);
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div class="product">
      <div class="row">
        <div class="col1">
          <img src={require(`./images/${props.selectedProduct.image}`)} alt="Image not available" />
        </div>
        <div class="col2">
          <h1>{props.selectedProduct.productName}</h1>
          <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <p>{props.selectedProduct.productDescription}</p>
          <h2>${props.selectedProduct.price}</h2>
          <br />

          <span className="btn" onClick={showModal}>
            Add to cart{" "}
          </span>
        </div>
      </div>

      {isOpen && <CartModal hideModal={hideModal} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.ProductReducer ? state.ProductReducer.selectedProduct : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (payload) => dispatch(AddCartItems(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
