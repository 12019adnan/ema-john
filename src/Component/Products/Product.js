import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    const {name, img, ratings, seller, price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'><p>Add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;