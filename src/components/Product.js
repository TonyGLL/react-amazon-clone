// MODULES
import React from 'react';
import '../assets/Product.css';
import { useStateValue } from '../StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐️</p>
                        ))
                    }
                </div>
            </div>

            <img
                src={image}
                alt="The Lean Startup"
            />
            <button
                onClick={addToBasket}
                className="product__button"
            >Add to basket
            </button>
        </div>
    );
}

export default Product;