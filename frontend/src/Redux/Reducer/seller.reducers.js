/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    seller: {},
    products: {},
    orders: {},
    transactions: {},
    errorAddProduct: "",
};

export default (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case "LOAD_SELLER_STATE":
            return {
                ...state,
                seller: action.seller,
            };
        case "LOAD_PRODUCTS":
            let sellerId = action.sellerId;
            let response;
            (async (event) => {
                try {
                    // fetch seller products here ...........................................................................................
                    const res = await fetch('http://localhost:5000/dokan.com/seller/'+sellerId);
                    response = await res.json();
                } catch (error) {
                    console.log(err);
                }
            })();
            return {
                ...state,
                //products: ,
            };
        case "ADD_PRODUCT":
            let name = action.name;
            let price = action.price;
            let category = action.category;
            let subCategory = action.subCategory;

            (async () => {
                try {
                    // add product functionality here .........................................................................................
                } catch (error) {}
            })();
            //errorAddProduct = "There is a problem adding the product";
            return {
                ...state,
                //errorAddProduct: ,
                //products: ,
            };
        case "LOAD_MY_ORDERS":
            //sellerId = action.sellerId;

            (async () => {
                try {
                    // load orders functionality here .........................................................................................
                } catch (error) {}
            })();

            return {
                ...state,
                //orders: ,
            };
        case "ACCEPT_ORDER":
            //let orderId = action.orderId;

            (async () => {
                try {
                    // accept orders functionality here .........................................................................................
                } catch (error) {}
            })();
            return {
                ...state,
            };
        case "REJECT_ORDER":
            (async () => {
                try {
                    // reject orders functionality here .........................................................................................
                } catch (error) {}
            })();
            return {
                ...state,
            };
        default:
            return state;
    }
};
