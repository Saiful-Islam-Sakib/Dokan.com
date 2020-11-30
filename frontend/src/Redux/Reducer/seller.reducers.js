/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    seller: {},
    products: [],
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
            (async (event) => {
                try {
                    const res = await fetch(
                        "http://localhost:5000/dokan.com/seller/" +
                            action.sellerId
                    );

                    const response = await res.json();
                    sessionStorage.setItem(
                        "products",
                        JSON.stringify(response.data.products)
                    );
                } catch (error) {
                    console.log(error);
                }
            })();
            return {
                ...state,
                products: JSON.parse(sessionStorage.getItem("products")),
            };
        case "ADD_PRODUCT":
            let name = action.name;
            let brand = action.brand;
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
            //orderId = action.orderId;
            (async () => {
                try {
                    // reject orders functionality here .........................................................................................
                } catch (error) {}
            })();
            return {
                ...state,
            };
        case "DELIVERED_ORDER":
            //orderId = action.orderId;
            (async () => {
                try {
                    // reject orders functionality here .........................................................................................
                } catch (error) {}
            })();
            return {
                ...state,
            };
        case "DELETE_PRODUCT":
            (async () => {
                try {
                    // delete orders functionality here .........................................................................................
                } catch (error) {}
            })();
            return {
                ...state,
            };
        default:
            return state;
    }
};
