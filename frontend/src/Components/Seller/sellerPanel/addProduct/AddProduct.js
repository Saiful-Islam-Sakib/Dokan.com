import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddProduct.css";

const Category = [
    {
        categoryName: "consumerFood",
        subCategories: {
            Flour: "flour",
            Rice: "rice",
            Oil: "oil",
            Milk: "milk",
            Spices_Pickles: "spicesPickles",
            Salt: "salt",
            Sugar: "sugar",
            Onion_Garlic_Potato: "onionGarlicPotato",
            Tea: "tea",
            Chocolate: "chocolate",
            Snacks: "snacks",
            Cooking_Backing: "cookingBacking",
        },
    },
    {
        categoryName: "toiletries",
        subCategories: {
            Washroom_Toiletries: "washroomToiletries",
            Home_Kitchen: "homeKitchen",
            Air_Freshener: "airFreshener",
        },
    },
    {
        categoryName: "healthCare",
        subCategories: {
            Toothbrush: "toothbrush",
            Toothpaste: "toothpaste",
            Soap: "soap",
            Shampoo: "shampoo",
            Skin_Care: "skinCare",
            Face_Mask: "faceMask",
        },
    },
];
const AddProduct = (props) => {
    const dispatch = useDispatch();
    const sellerStore = useSelector((state) => state.seller);

    const [productName, setProductName] = React.useState("");
    const [productBrand, setProductBrand] = React.useState("");
    const [productPrice, setProductPrice] = React.useState("");
    const [selectedCategory, setSelectedCategory] = React.useState(
        "consumerFood"
    );
    const [selectedSubCategory, setSelectedSubCategory] = React.useState(
        "flour"
    );
    const [error, setError] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");

    const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_PRODUCT",
            name: productName,
            brand: productBrand,
            price: productPrice,
            category: selectedCategory,
            subCategory: selectedSubCategory,
        });

        // if (sellerStore.errorAddProduct.length > 0) {
        //     setError(true);
        //     setErrorMsg(fullStore.errorAddProduct.length);
        // }
    };

    return (
        <div class="seller-AddProduct">
            <h2>ADD YOUR NEW PRODUCT</h2>
            <form class="seller-AddProduct-form">
                <label>Product Name</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setProductName(e.target.value);
                    }}
                />

                <label>Brand</label>
                <input
                    type="text"
                    required
                    onChange={(e) => {
                        setProductBrand(e.target.value);
                    }}
                />

                <label>Price</label>
                <input
                    type="number"
                    min="0"
                    required
                    onChange={(e) => {
                        setProductPrice(e.target.value);
                    }}
                />

                <label>Category</label>
                <select
                    onClick={(e) => {
                        setSelectedCategory(e.target.value);
                        console.log(e.target.value);
                    }}
                >
                    <option value={"consumerFood"}>Consumer_Food</option>
                    <option value={"healthCare"}>Health_Care</option>
                    <option value={"toiletries"}>Toiletries</option>
                </select>

                <label>Sub-Category</label>
                <select>
                    {(function () {
                        let keys = Object.keys(
                            Category.filter(
                                (cat) => cat.categoryName == selectedCategory
                            )[0].subCategories
                        );
                        let values = Object.values(
                            Category.filter(
                                (cat) => cat.categoryName == selectedCategory
                            )[0].subCategories
                        );

                        return keys.map((i, index) => (
                            <option
                                key={index}
                                value={values[index]}
                                onClick={(e) => {
                                    setSelectedSubCategory(e.target.value);
                                }}
                            >
                                {i}
                            </option>
                        ));
                    })()}
                </select>

                <label id="add-successfully-product">
                    {error ? errorMsg : "Your Product Added Successfully."}
                </label>

                <button
                    type="submit"
                    class="add-submit-button"
                    onClick={handleAddProduct}
                >
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
