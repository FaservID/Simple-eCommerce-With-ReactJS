import React from "react";
import {Link} from 'react-router-dom';

export default function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row float-end">
                    <div className="col-12 mt-3 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=> {clearCart()}}>Clear Cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal: </span>
                            <strong className="text-dark">Rp. {cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax: </span>
                            <strong className="text-dark">Rp. {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total: </span>
                            <strong className="text-dark">Rp. {cartTotal}</strong>
                        </h5>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}