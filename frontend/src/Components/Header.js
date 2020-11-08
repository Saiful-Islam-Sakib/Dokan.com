import React from "react";
import "../mycss/Header.css";
import logo from "../logo2.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="logo" />
            <div className="header__search">
                {/* category button */}
                <input
                    className="header__searchInput"
                    type="text"
                    placeholder="Search"
                />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <div className="header__basket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;
