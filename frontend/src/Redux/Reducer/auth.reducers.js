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
    cartCounter: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                user: action.payload.user,
                status: action.payload.status,
            };
            break;
        case authConstants.CART_COUNTER:
            state = {
                ...state,
                cartCounter: state.cartCounter + 1,
            };
        case authConstants.CART_SUBTRACT:
            state = {
                ...state,
                cartCounter: state.cartCounter - 1,
            };
        default:
            return state;
    }

    return state;
};
