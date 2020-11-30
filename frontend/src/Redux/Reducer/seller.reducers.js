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
            let products;
            (async (event) => {
                try {
                    const res = await fetch(
                        "http://localhost:5000/dokan.com/seller/" +
                            action.sellerId
                    );

                    const response = await res.json();
                    products = response.data.products;
                } catch (error) {
                    console.log(error);
                }
            })();
            return {
                ...state,
                products: products,
            };
        case "ADD_PRODUCT":
            let p_name = action.name;
            let p_price = action.price;
            let p_category = action.category;
            let p_subCategory = action.subCategory;

            (async (event) => {
                try {
                    // add product functionality here .........................................................................................
                    const res = await fetch(
                        "http://localhost:5000/dokan.com/products/newProduct",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                name : p_name,   //brand : brand er naam,  
                                price : p_price,  category : p_category,
                                sub_category : p_subCategory, //s_id : seller id dio
                            }),
                        }
                    );
                } catch (error) {
                    console.log(error);
                }
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
        default:
            return state;
    }
};
