import React, { Component, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import nike6 from "./images/nike-6.jpg";
import "./css/CartModal.css";

const CartModal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Modal show={true} className="valueRealization-Confirmation-modal" onHide={props.hideModal}>
        <Modal.Header className="" closeButton>
          <Modal.Title>
            {" "}
            <div className="cartModal-header">
              {" "}
              <p>Item added to your cart</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="body-container">
            <div class="container-col1">
              <img src={require(`./images/${props.selectedProduct.image}`)} alt="Image not available" />
            </div>

            <div class="container-col1">
              <h1>{props.selectedProduct.productName}</h1>
              <h2>${props.selectedProduct.price}</h2>
              <h2>{props.selectedProduct.productDescription}</h2>
            </div>
          </div>
          <div className="tax-alert">
            <p>All prices are in US dollars and exclude sales tax</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="footer-btns">
            <div className="btns-right">
              {/* <button className="btn">Go to Checkout </button> */}

              <NavLink to="/CartItems" activeClassName="active">
                <button className="btn">Go to Checkout </button>
              </NavLink>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.ProductReducer.selectedProduct,
  };
};

export default connect(mapStateToProps, "")(CartModal);
