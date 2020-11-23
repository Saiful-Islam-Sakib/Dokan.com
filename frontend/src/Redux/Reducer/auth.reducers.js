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
        default:
            return state;
    }

    return state;
};
