import {
  ADD_TO_CART_ADD_REQUEST,
  ADD_TO_CART_ADD_SUCCESS,
  ADD_TO_CART_REMOVE_REQUEST,
  ADD_TO_CART_REMOVE_SUCCESS,
  FETCH_CART_PRODUCTS_REQUEST,
  FETCH_CART_PRODUCTS_SUCCESS,
  CART_PRODUCT_PRICE_DETAILS,
  CART_PRODUCT_QUANTITY_DECREMENT,
  CART_PRODUCT_QUANTITY_INCREMENT,
  CART_PRODUCT_EMPTY,
  GET_CART_OFFER_PRICE,
  GET_CART_TOTAL_PRICE,
} from "../Actions/addToCartActions";

const inititalCartItem = {
  loading: false,
  cartItem: [],
  cartProductPrice: 0,
  cartProductOfferPrice: 0,
  cartProductTotalPrice: 0,
};

const deliveryCharge = 20;

//const quantity =1;

const addToCartReducer = (state = inititalCartItem, action) => {
  switch (action.type) {
    case ADD_TO_CART_ADD_REQUEST:
      return { ...state, loading: true };

    case ADD_TO_CART_ADD_SUCCESS: {
      state.cartItem = [
        ...state.cartItem,
        {
          CartItem: action.payload,
          quantity: 1,
        },
      ];

      return {
        ...state,

        loading: false,
      };
    }

    case ADD_TO_CART_REMOVE_REQUEST:
      return { ...state, loading: true };

    case ADD_TO_CART_REMOVE_SUCCESS: {
     
      state.cartItem = state.cartItem.filter(
        (carProduct) => carProduct.CartItem.id !== action.payload
      );
      return {
        ...state,
        loading: false,
      };
    }

    case FETCH_CART_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_CART_PRODUCTS_SUCCESS:
      return { ...state, loading: false };

    case CART_PRODUCT_PRICE_DETAILS: {
      

      state.cartProductPrice = state.cartItem.reduce(
        (preVal, currentValue) =>
          preVal + currentValue.CartItem.price * currentValue.quantity,
        0
      );
      return {
        ...state,
      };
    }

    case CART_PRODUCT_QUANTITY_INCREMENT: {
      const productIndex = state.cartItem.findIndex(
        (Item) => Item.CartItem.id === action.payload
      );

      
      state.cartItem[productIndex].quantity += 1;

      state.cartItem = [...state.cartItem];

      return {
        ...state,
      };
    }

    case CART_PRODUCT_QUANTITY_DECREMENT: {
      const productIndex = state.cartItem.findIndex(
        (Item) => Item.CartItem.id === action.payload
      );

      state.cartItem[productIndex].quantity -= 1;

      state.cartItem = [...state.cartItem];

      return {
        ...state,
      };
    }

    case CART_PRODUCT_EMPTY: {
      return {
        ...state,
        loading: false,
        cartItem: [],
        cartProductPrice: 0,
      };
    }

    case GET_CART_OFFER_PRICE: {
      

      state.cartProductOfferPrice = state.cartItem.reduce(
        (preVal, currentVal) =>
          Math.floor(
            preVal +
              (Math.floor(currentVal.CartItem.discountPercentage) / 100) *
                (currentVal.CartItem.price * currentVal.quantity)
          ),
        0
      );

      return {
        ...state,
      };
    }

    case GET_CART_TOTAL_PRICE: {
      state.cartProductTotalPrice =
        state.cartProductPrice - state.cartProductOfferPrice + deliveryCharge;

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export { addToCartReducer };
