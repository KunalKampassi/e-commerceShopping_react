import {
  PRODUCT_DETAIL_SELECTED_ITEM,
  ADD_PRODUCT_TO_CART,
  INITIALIZE_PRODUCT_ITEM_LIST,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/ProductActions";
import TotalItemLists from "../JSON/TotalItemsLists.json";

const initialProductState = {
  cartItems: [],

  selectedProduct: TotalItemLists.filter((e) => e.isExclusive === true).slice(0, 1) || {
    productName: "Mi fit band",
    productDescription:
      "The Mi Smart band allows you the ultimate experience of high tech health monitor. Super Amoled screen gives the crispy resolution. Water resistent makes your sweat to go waste.",
    productID: 55114,
    productType: "Watches",
    totalRatings: 4,
    price: 200,
    isAvailable: true,
    isFeatured: true,
    isExclusive: true,

    capacity: 1,
    userReviews: [
      { userName: "", userReview: "" },
      { userName: "", userReview: "" },
      { userName: "", userReview: "" },
      { userName: "", userReview: "" },
      { userName: "", userReview: "" },
    ],
    image: "exclusive.png",
  },
};

export let ProductReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_SELECTED_ITEM: {
      state = { ...state };
      state["selectedProduct"] = action.payload;
      return state;
    }

    case ADD_PRODUCT_TO_CART: {
      state = { ...state };
      let index = state["cartItems"].findIndex((x) => x.productID === action.payload.productID);
      if (index >= 0) {
        ///AVOID STATE MUTATION WHILE EDITING
        let data = [...state["cartItems"]];
        data[index].isAddedToCart = true;
        state["cartItems"] = data;
      } else {
        let updatedPayload = { ...action.payload, isAddedToCart: true };
        let data = [updatedPayload, ...state["cartItems"]];
        state["cartItems"] = data;
      }
      return state;
    }

    case REMOVE_PRODUCT_FROM_CART: {
      state = { ...state };
      let index = state["cartItems"].findIndex((x) => x.productID === action.payload.productID);
      if (index >= 0) {
        ///AVOID STATE MUTATION WHILE EDITING
        let data = [...state["cartItems"]];
        data[index].isAddedToCart = false;
        state["cartItems"] = data;
      } else {
        let updatedPayload = { ...action.payload, isAddedToCart: true };
        let data = [updatedPayload, ...state["cartItems"]];
        state["cartItems"] = data;
      }
      return state;
    }

    default:
      return state;
  }
};
