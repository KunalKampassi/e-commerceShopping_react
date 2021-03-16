import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/CartModal.css";

const CheckoutModal = (props) => {
  return (
    <>
      <Modal show={true} className="valueRealization-Confirmation-modal" onHide={props.hideModal}>
        <Modal.Header className="" closeButton>
          <Modal.Title>
            {" "}
            <div className="cartModal-header">
              {" "}
              <p>Your Order Summary</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="body-container">
            <div class="container-col1">
              <img src={require(`./images/checkout.jpg`)} alt="Image not available" />
            </div>

            <div class="container-col1">
              <h2>Total Items: {props.TotalItems}</h2>
              <h2>Total Cost:{props.SubTotal} </h2>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="footer-btns">
            <div className="btns-right"></div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CheckoutModal
