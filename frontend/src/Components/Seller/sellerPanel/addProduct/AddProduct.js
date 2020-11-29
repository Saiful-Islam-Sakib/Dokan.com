import React from "react";
import "./AddProduct.css";

const AddProduct = (props) => {
    return (
        <div class="seller-AddProduct">
            <h2>ADD YOUR NEW PRODUCT</h2>
            <form class="seller-AddProduct-form">
                <label>Product Name</label>
                <input type="text" required />

                <label>Brand Name</label>
                <input type="text" required />

                <label>Price</label>
                <input type="number" min="0" required />

                <label>Category</label>
                <select>
                    <option>Consumer Food</option>
                    <option>{"Health & Care"}</option>
                    <option>Toiletries</option>
                </select>

                <label>Sub-Category</label>
                <select>
                    <option>sub-cat-1</option>
                    <option>sub-cat-2</option>
                    <option>sub-cat-3</option>
                </select>

                <label id="add-successfully-product">
                    Your Product Add Successfully.
                </label>
                <button type="submit" class="add-submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddProduct;

/** 
<label>Upload Product Photo</label>
<input type="file" accept="image/*" /> */
