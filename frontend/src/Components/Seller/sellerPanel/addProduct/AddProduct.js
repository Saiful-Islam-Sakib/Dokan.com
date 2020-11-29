import React from "react";
import "./AddProduct.css";

const Category = {
    Consumer_Food: [
        "Flour",
        "Rice",
        "Oil",
        "Milk",
        "Spices & Pickles",
        "Salt",
        "Sugar",
        "Onion-Garlic-Potato",
        "Tea",
        "Chocolate",
        "Snacks",
        "Cooking & Backing",
    ],
    Toiletries: ["Washroom Toiletries", "Home & Kitchen", "Air Freshener"],
    Health_Care: [
        "Toothbrush",
        "Toothpaste",
        "Soap",
        "Shampoo",
        "Skin-care",
        "Face Mask",
    ],
};
const AddProduct = (props) => {
    const [selectedCategory, setselectedCategory] = React.useState("Consumer_Food");
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
                <select
                    selected
                    onClick={(e) => {
                        setselectedCategory(e.target.value);
                    }}
                >
                    <option>Consumer_Food</option>
                    <option>Health_Care</option>
                    <option>Toiletries</option>
                </select>

                <label>Sub-Category</label>
                <select>
                    {Category[selectedCategory].map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                    {/* <option>sub-cat-1</option>
                    <option>sub-cat-2</option>
                    <option>sub-cat-3</option> */}
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
