import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {productListReducer, productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer, productReviewCreateReducer, productTopRatedReducer} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

import { userLoginReducer } from "./reducers/userReducers";
import { userRegisterReducer } from "./reducers/userReducers";
import { userDetailsReducer } from "./reducers/userReducers";
import { userUpdateProfileReducer } from "./reducers/userReducers";
import { userListReducer } from "./reducers/userReducers";
import { userDeleteReducer } from "./reducers/userReducers";
import { userUpdateReducer } from "./reducers/userReducers";

import { orderCreateReducer } from "./reducers/orderReducers";
import { orderDetailsReducer } from "./reducers/orderReducers";
import { orderPayReducer } from "./reducers/orderReducers";
import { orderListMyReducer } from "./reducers/orderReducers";
import { orderListReducer } from "./reducers/orderReducers";
import { orderDeliverReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    cart: cartReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,


});

const cartItemsFromStorage = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
    ? JSON.parse(localStorage.getItem("shippingAddress"))
    : {};
 
export const initialState = {
    cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
    
    
};
 
 
const middleware = [thunk];
 
const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    middleware: middleware,
});
 
export default store;