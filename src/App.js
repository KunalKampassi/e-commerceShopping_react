import React, { Component } from "react";
import Layout from "./Layout";
import Category from "./Category";
import { connect } from "react-redux";
import { InitializeProductList } from "./actions/ProductActions";
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import ErrorWrapper from "./ErrorWrapper/ErrorWrapper";

import DisplayTemplate from "./DisplayTemplate";
import ProductInfo from "./ProductInfo";
import TotalItemLists from "./JSON/TotalItemsLists.json";
import Cart from "./Cart";
import CartModal from "./CartModal";
import "./css/styles.css";

class App extends Component {
  componentDidMount() {
    if (this.props.history.action === "POP") {
      this.props.history.push("/Home");
    }
  }

  render() {
    return (
      // <div>
      <Layout>
        <ErrorWrapper>
          <Route
            exact
            path="/Home"
            render={() => {
              return <DisplayTemplate />;
            }}
          />
          <Route
            exact
            path="/Products"
            render={() => {
              return <ProductInfo />;
            }}
          />
          <Route
            exact
            path="/CartItems"
            render={() => {
              return <Cart />;
            }}
          />

          <Route
            exact
            path="/Categories"
            render={() => {
              return <Category />;
            }}
          />
        </ErrorWrapper>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    InitializeProductList: (payload) => dispatch(InitializeProductList(payload)),
  };
};

export default connect("", mapDispatchToProps)(App);
