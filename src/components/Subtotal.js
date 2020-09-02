// MODULES
import React from 'react';
import '../assets/Subtotal.css';
import { useStateValue } from '../StateProvider';

// EXTERNAL PACKAGES
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';

function Subtotal(props) {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            >
            </CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;