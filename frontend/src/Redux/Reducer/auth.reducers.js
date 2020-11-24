/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../Actions/Constants";

const initialState = {
    _init: "###   My Store   ##",
    user: {
        f_name: "",
        l_name: "",
        email: "",
        phone: "",
        address: "",
        birthday: "",
        gender: "",
        orders: [],
    },
    status: false,
    cart: [],
    quantity: [],
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload.user,
                status: action.payload.status,
            };

        case "ADD_TO_CART":
            const serial = state.cart.findIndex(
                (signleProduct) => signleProduct.id === action.item.id
            );

            if (serial >= 0) {
                const newq = [...state.quantity];
                newq[serial] = newq[serial] + action.quantity;
                return {
                    ...state,
                    cart: [...state.cart],
                    quantity: newq,
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, action.item],
                    quantity: [...state.quantity, action.quantity],
                };
            }

        case "REMOVE_FROM_CART":
            const index = state.cart.findIndex(
                (signleProduct) => signleProduct.id === action.id
            );

            let newCart = [...state.cart];
            let newQuantity = [...state.quantity];

            console.log(index);
            console.log(newCart);

            if (index >= 0) {
                newCart.splice(index, 1);
                newQuantity.splice(index, 1);
            }

            console.log(newCart);

            return {
                ...state,
                cart: newCart,
                quantity: newQuantity,
            };
        default:
            return state;
    }
};
