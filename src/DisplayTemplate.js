import React from "react";
import { Link, NavLink } from "react-router-dom";
import TotalItemLists from "./JSON/TotalItemsLists.json";
import user2 from "./images/user-2.png";
import user1 from "./images/user-1.png";
import user3 from "./images/user-3.png";
import { connect } from "react-redux";
import { InitializeProductDetail } from "./actions/ProductActions";

const DisplayTemplate = (props) => {
  return (
    <>
      <div class="categories">
        <div class="small-container">
          <div class="row">
            {TotalItemLists.slice(0, 3).map((each) => {
              return (
                <div class="col-3">
                  <img src={require(`./images/${each.image}`)} class="childimage" onclick="imageCapture(this)" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div class="small-container">
        <h2 class="title">Featured Products</h2>
        <div class="row">
          {TotalItemLists.filter((e) => e.isFeatured === true)
            .slice(0, 4)
            .map((each) => {
              return (
                <div class="col-4">
                  <NavLink
                    to="/Products"
                    activeClassName="active"
                    onClick={() => {
                      props.addProductDetail(each);
                    }}
                  >
                    <img src={require(`./images/${each.image}`)} alt="" />
                    <h4>{each.productName}</h4>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                    <p>${each.price}</p>
                  </NavLink>
                </div>
              );
            })}
        </div>
      </div>

      {TotalItemLists.filter((e) => e.isExclusive === true)
        .slice(0, 1)
        .map((each) => {
          return (
            <div class="offer">
              <div class="small-container">
                <div class="row">
                  <div class="col-2">
                    <img src={require(`./images/${each.image}`)} class="offer-img" />
                  </div>
                  <div class="col-2">
                    <p>Exclusively Available on RedStore</p>
                    <h1>{each.productName}</h1>
                    <small> {each.productDescription}</small>
                    <br />

                    <NavLink
                      to="/Products"
                      activeClassName="active"
                      className=" btn"
                      onClick={() => {
                        props.addProductDetail(each);
                      }}
                    >
                      Buy Now &#8594;
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      <div class="testimonial">
        <div class="small-container">
          <div class="row">
            <div class="col-3">
              <i class="fa fa-quote-left"></i>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta aut velit molestias
                temporibus sed ea necessitatibus corporis iste repudiandae, unde esse, omnis perspiciatis? Doloremque
                tempora aperiam laborum officiis est?
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src={user1} />
              <h3> Sean Parker</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"></i>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta aut velit molestias
                temporibus sed ea necessitatibus corporis iste repudiandae, unde esse, omnis perspiciatis? Doloremque
                tempora aperiam laborum officiis est?
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src={user3} />
              <h3> Monika Parker</h3>
            </div>
            <div class="col-3">
              <i class="fa fa-quote-left"></i>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium dicta aut velit molestias
                temporibus sed ea necessitatibus corporis iste repudiandae, unde esse, omnis perspiciatis? Doloremque
                tempora aperiam laborum officiis est?
              </p>
              <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-o"></i>
              </div>
              <img src={user2} />
              <h3> Micheal Parker</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductDetail: (payload) => dispatch(InitializeProductDetail(payload)),
  };
};

export default connect("", mapDispatchToProps)(DisplayTemplate);
