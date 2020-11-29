import React from "react";
import Data from "./data";
import "./Products.css";

const Products = (props) => {
    const editProductHandler = (p) => {
        const prod = Data.products.find((x) => x._id === p);
        console.log(prod);
    };
    const deleteProductHandler = (p) => {
        const prod = Data.products.find((x) => x._id === p);
        console.log(prod);
    };

    return (
        <ul className="all-products">
            {Data.products.map((product) => (
                <li className="product-details" key={product._id}>
                    <div className="product-info">
                        <div className="product-catagory">
                            {product.catagory}
                        </div>
                        <img
                            className="product-image"
                            src={product.image}
                            alt={product.name}
                        />
                        <div className="product-name">{product.name}</div>
                        <div className="product-price">
                            {" "}
                            {`৳ ${product.price}`}{" "}
                        </div>
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
            ))}
        </ul>
    );
};

export default Products;
