import React from "react";

export default function CartColumn() {
    return (
        <div>
            <div className="container text-center d-none d-lg-block border">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2 bg-dark">
                        <p className="text-uppercase text-white pt-3">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 bg-dark">
                        <p className="text-uppercase text-white pt-3">Product Name</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 bg-dark">
                        <p className="text-uppercase text-white pt-3">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 bg-dark">
                        <p className="text-uppercase text-white pt-3">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 bg-dark">
                        <p className="text-uppercase text-white pt-3">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2 bg-dark">
                        <p className="text-uppercase text-white pt-3">Total</p>
                    </div>
                </div>
            </div>
        </div>
    );
};