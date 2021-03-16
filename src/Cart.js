import React from "react";
import CartModal from "./CartModal";
import { Modal, Button, Overlay, Popover } from "react-bootstrap";
import { connect } from "react-redux";
import { RemoveCartItems } from "./actions/ProductActions";
import CheckoutModal from "./CheckoutModal";

import "./css/Cart.css";

const Cart = (props) => {
  const [SubTotal, setSubTotal] = React.useState(0);
  const [TotalItems, setTotalItems] = React.useState(0);

  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  React.useEffect(() => {
    let SubTotal = 0;
    let cartItems = props.cartItems.filter((e) => e.isAddedToCart === true);
    cartItems.forEach((element) => {
      SubTotal = SubTotal + element.price;
    });
    setSubTotal(SubTotal);
    setTotalItems(cartItems.length);
  }, [props.cartItems]);

  return (
    <section className="cart">
      <h1>Cart</h1>

      {props.cartItems.filter((e) => e.isAddedToCart === true).length > 0 ? (
        <div class="cart-row">
          <div class="column">
            <h1>Your Order</h1>
            <h5>Please select the quantity below</h5>

            {props.cartItems
              .filter((e) => e.isAddedToCart === true)
              .map((each) => {
                return (
                  <div class="cart-item" id="item2">
                    <img src={require(`./images/${each.image}`)} alt="Image not available" />
                    <p>{each.productName}</p>
                    <p>${each.price}</p>
                    <input type="number" name="quantity" id="no-of-items" value="1" min="1" max="6" step="1" />
                    <button id="remove3" class="remove" onClick={() => props.removeCartItems(each)}>
                      <i class="fas fa-trash fa-2x"></i>
                    </button>
                  </div>
                );
              })}

            <hr />
          </div>
          <div class="column2">
            <h3>Cart Totals</h3>
            <div class="cart-row1">
              <div class="col">
                <h5>Subtotals</h5>
                <h5>Shipping</h5>
              </div>
              <div class="col">
                <h5>${SubTotal}</h5>
                <div class="wrapper">
                  <span>
                    <input type="radio" name="shipping" id="" checked />
                    Flat rate:$10
                  </span>
                  <span>
                    <input type="radio" name="shipping" id="" />
                    Free Shipping
                    <br />
                  </span>
                  <span>
                    <input type="radio" name="shipping" id="" />
                    Local Pickup
                  </span>
                  <span>
                    Shipping options <br />
                    will be updated <br />
                    during checkout.
                  </span>
                </div>
              </div>
            </div>
            <h3>Totals &nbsp; &nbsp; ${SubTotal}</h3>
            <div
              class="buttons btn"
              onClick={() => {
                showModal();
              }}
            >
              Checkout
            </div>
          </div>
        </div>
      ) : (
        <h2> Your Cart is empty. </h2>
      )}
      {isOpen && <CheckoutModal SubTotal={SubTotal} TotalItems={TotalItems} hideModal={hideModal} />}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.ProductReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItems: (payload) => dispatch(RemoveCartItems(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
