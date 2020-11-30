import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Data from "./data";

export default function SingleProduct({ product }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const editProductHandler = (productId) => {
        console.log(productId);
    };

    const deleteProductHandler = (productId) => {
        console.log("deleting product (id): " + productId);
        dispatch({
            type: "DELETE_PRODUCT",
            productId: productId,
        });

        //history.push("/seller-panel/");
    };

    return (
        <li className="product-details" key={product._id}>
            <div className="product-info">
                <div className="product-catagory">{product.category}</div>
                <img
                    className="product-image"
                    src={product.img?.slice(2, product.img.length)}
                    alt={product.name}
                />
                <div className="product-name">{product.name}</div>
                <div className="product-price"> {`৳ ${product.price}`} </div>
            </div>
            <div className="product-buttons">
                <button
                    className="edit-button"
                    onClick={() => editProductHandler(product._id)}
                >
                    EDIT
                </button>
                <button
                    className="delete-button"
                    onClick={() => deleteProductHandler(product._id)}
                >
                    DELETE
                </button>
            </div>
        </li>
    );
}
