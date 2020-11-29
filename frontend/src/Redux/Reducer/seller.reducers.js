/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    seller: {},
    products: {},
    orders: {},
    transactions: {},
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "LOAD_SELLER_STATE":
            return {
                ...state,
            };
        default:
            return state;
    }
};
