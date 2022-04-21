import React from "react";


export default function CartItem({item, value}) {
    const {id,name,img,price,total,count} = item;
    const {increase, decrease, removeItem} = value;
    return (
        <div className="container">

        
        <div className="row my-1 text-capitalize text-center border">
            <div className="col-10 mx-auto col-lg-2 py-4">
                <img 
                    src={img} 
                    style={{ width:"8rem", height:"5rem" }}
                    className="img-fluid"
                    alt="Produk"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-5">
                <span className="d-lg-none">Product : </span>
                {name}
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-5">
                <span className="d-lg-none">Price : </span>
                Rp. {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
                <div className="d-flex justify-content-center pt-5">
                    <div>
                        <span className="btn btn-black mx-1 badge bg-danger" onClick={() => {decrease(id)}}>-</span>
                        <span className="btn btn-black mx-1 border">{count}</span>
                        <span className="btn btn-black mx-1 badge bg-primary" onClick={() => {increase(id)}}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-5 ">
                <div className="cart-icon btn btn-danger text-white" onClick={() => {removeItem(id)}}>
                    <i class="fa-solid fa-trash"></i> Hapus
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 pt-5">
                <strong className="d-lg-none">Item Total: Rp. </strong>
                <strong className="text-dark">Rp. {total}</strong>
            </div>
        </div>
        </div>
    );
}