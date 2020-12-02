/* eslint-disable import/no-anonymous-default-export */
import { authConstants } from "../Actions/Constants";

const initialState = {
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
    selectedSubCatProduct: [],
    selectedProduct: [],
    consumerCat: [],
    healthCareCat: [],
    toiletriesCat: [],
    searchCategory: "",
    comment: [],
};

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "SAVE_CURRENT_REDUX_STATE":
            return {
                ...state,
            };
        case authConstants.LOGIN_REQUEST:
            return {
                ...state,
                user: action.payload.user,
                status: action.payload.status,
            };

        case "ADD_TO_CART":
            let serial = state.cart.findIndex(
                (signleProduct) => signleProduct.id === action.item.id
            );

            if (serial >= 0) {
                let newq = [...state.quantity];
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
            let index = state.cart.findIndex(
                (signleProduct) => signleProduct.id === action.id
            );

            let newCart = [...state.cart];
            let newQuantity = [...state.quantity];

            if (index >= 0) {
                newCart.splice(index, 1);
                newQuantity.splice(index, 1);
            }

            return {
                ...state,
                cart: newCart,
                quantity: newQuantity,
            };
        case "SELECTED_SUB_CAT_PRODUCT":
            sessionStorage.setItem("products", JSON.stringify(action.product));
            return {
                ...state,
                selectedSubCatProduct: action.product,
            };
        case "SELECTED_PRODUCT":
            let sortedComments = action.comment;
            sortedComments.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });

            return {
                ...state,
                selectedProduct: action.product,
                comment: sortedComments,
            };

        case "CONSUMER_CAT":
            let selectedCategoryProducts = JSON.parse(
                sessionStorage.getItem("allProduct")
            )
                ?.filter((p) => p.category == "consumerFood")
                .slice(0, 7);

            return {
                ...state,
                consumerCat: selectedCategoryProducts,
            };
        case "HEALTH_CARE_CAT":
            let selectedCategoryProducts2 = JSON.parse(
                sessionStorage.getItem("allProduct")
            )
                ?.filter((p) => p.category == "healthCare")
                .slice(0, 7);
            return {
                ...state,
                healthCareCat: selectedCategoryProducts2,
            };
        case "TOILETRIES_CAT":
            let selectedCategoryProducts3 = JSON.parse(
                sessionStorage.getItem("allProduct")
            )
                ?.filter((p) => p.category == "Toiletries")
                .slice(0, 7);
            return {
                ...state,
                toiletriesCat: selectedCategoryProducts3,
            };
        case "SEARCH_CATEGORY":
            return {
                ...state,
                searchCategory: action.searchCategory,
            };
        case "SEARCH":
            let searchForName = JSON.parse(
                sessionStorage.getItem("allProduct")
            )?.filter((p) => p.name.toLowerCase().includes(action.searchFor));

            let searchForTag = JSON.parse(
                sessionStorage.getItem("allProduct")
            )?.filter((p) =>
                p.tag.some((t) => t.toLowerCase().includes(action.searchFor))
            );

            let finalResult = searchForName.concat(searchForTag);
            finalResult = [
                ...new Map(
                    finalResult.map((item) => [item["id"], item])
                ).values(),
            ];

            if (state.searchCategory == "All") {
                return {
                    ...state,
                    selectedSubCatProduct: finalResult,
                };
            } else if (state.searchCategory == "consumerFood") {
                return {
                    ...state,
                    selectedSubCatProduct: finalResult.filter(
                        (p) => p.category == "consumerFood"
                    ),
                };
            } else if (state.searchCategory == "Toiletries") {
                return {
                    ...state,
                    selectedSubCatProduct: finalResult.filter(
                        (p) => p.category == "Toiletries"
                    ),
                };
            } else if (state.searchCategory == "healthCare") {
                return {
                    ...state,
                    selectedSubCatProduct: finalResult.filter(
                        (p) => p.category == "healthCare"
                    ),
                };
            }

            return {
                ...state,
                selectedSubCatProduct: finalResult,
            };
        case "CHECKOUT":
            return {
                ...state,
                cart: [],
                quantity: [],
            };
        case "UPDATE_PRODUCT":
            (async () => {
                let city = sessionStorage.getItem("city");
                let area = sessionStorage.getItem("area");
                let place = sessionStorage.getItem("place");

                const res = await fetch(
                    "http://localhost:5000/dokan.com/products/ploc",
                    {
                        method: "POST",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify({
                            city: city,
                            area: area,
                            place: place,
                        }),
                    }
                );
                const data = await res.json();

                if (
                    city?.length > 0 &&
                    area?.length > 0 &&
                    place?.length > 0 &&
                    res.status === 200
                ) {
                    sessionStorage.setItem(
                        "allProduct",
                        JSON.stringify(data.product)
                    );
                }
            })();
            return {
                ...state,
            };
        case "FETCH_ORDER_HISTORY":
            async function fetchOrderHistory() {
                try {
                    let res = await fetch(
                        "http://localhost:5000/dokan.com/order/customer/" +
                            JSON.parse(localStorage.getItem("user"))._id
                    );
                    let response = await res.json();

                    response.data.orders.sort(function (a, b) {
                        return new Date(b.date) - new Date(a.date);
                    });

                    sessionStorage.setItem(
                        "orderHistory",
                        JSON.stringify(response.data.orders)
                    );
                } catch (err) {
                    console.log(err);
                }
            }
            fetchOrderHistory();

            return {
                ...state,
            };
        default:
            return state;
    }
};
