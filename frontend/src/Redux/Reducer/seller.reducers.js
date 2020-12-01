/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    seller: {},
    products: [],
    orders: [],
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
                    let res = await fetch(
                        "http://localhost:5000/dokan.com/seller/" +
                            action.sellerId
                    );

                    let response = await res.json();
                    console.log(response);
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
            (async () => {
                let sellerId = state.seller._id;
                let name = action.name;
                let brand = action.brand;
                let price = action.price;
                let category = action.category;
                let subCategory = action.subCategory;
                try {
                    let res = await fetch(
                        "http://localhost:5000/dokan.com/products/newProduct",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                s_id: sellerId,
                                name: name,
                                brand: brand,
                                price: price,
                                category: category,
                                sub_category: subCategory,
                            }),
                        }
                    );
                    let response = await res.json();
                    console.log(response);
                    if (res.status !== 201) {
                        sessionStorage.setItem(
                            "err",
                            "There is a problem adding the product"
                        );
                    } else {
                        sessionStorage.setItem("err", "");
                    }
                } catch (error) {
                    console.log(error);
                }
            })();
            return {
                ...state,
                errorAddProduct: sessionStorage.getItem("err"),
            };
        case "LOAD_MY_ORDERS":
            (async (event) => {
                try {
                    let res = await fetch(
                        "http://localhost:5000/dokan.com/seller/orders/" +
                            action.sellerId
                    );
                    let response = await res.json();
                    console.log(response);
                    sessionStorage.setItem(
                        "orders",
                        JSON.stringify(response.data)
                    );
                } catch (error) {
                    console.log(error);
                }
            })();

            return {
                ...state,
                orders: JSON.parse(sessionStorage.getItem("orders")),
            };
        case "ACCEPT_ORDER":
            (async (event) => {
                try {
                    let res = await fetch(
                        "http://localhost:5000/dokan.com/order/seller/orderConf",
                        {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                o_id: action.orderId,
                                order_confirmation: true,
                            }),
                        }
                    );
                    let response = await res.json();
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            })();
            return {
                ...state,
            };
        case "REJECT_ORDER":
            (async (event) => {
                try {
                    const res = await fetch(
                        "http://localhost:5000/dokan.com/order/seller/orderRejected",
                        {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                o_id: action.orderId,
                                order_rejected: true,
                            }),
                        }
                    );
                    const response = await res.json();
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            })();
            return {
                ...state,
            };
        case "DELIVERED_ORDER":
            (async () => {
                try {
                    const res = await fetch(
                        "http://localhost:5000/dokan.com/order/seller/orderDeli",
                        {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                o_id: action.orderId,
                                order_delivered: true,
                            }),
                        }
                    );
                    const response = await res.json();
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            })();
            return {
                ...state,
            };
        case "DELETE_PRODUCT":
            (async () => {
                try {
                    let res = await fetch(
                        "http://localhost:5000/dokan.com/products/deleteProd/" +
                            action.productId,
                        {
                            method: "DELETE",
                        }
                    );
                    let response = await res.json();
                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
            })();
            return {
                ...state,
            };
        default:
            return state;
    }
};
