import React from "react";
import PropTypes from "prop-types";


const Product = ({imageUrl, name, price, quantity}) => (
    <div>
        <img src={imageUrl} alt="Tacos With Lime" width="640" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <p>Quantity: { quantity < 20 ? "Few left" : "In stock"}</p>
        <button type="button" >Add to card</button>
    </div>
)

Product.propTypes = {
    imageUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
}
export default Product;