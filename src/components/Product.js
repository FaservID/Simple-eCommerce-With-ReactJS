import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import "../index.css";
import {Link} from 'react-router-dom';

class Product extends Component {
  render() {
    const { id, name, img, price, inCart, rate, sold } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="product">
            <img src={img} alt="product" />
            <h2 className="title">{name}</h2>
            <p className="price">
              <span className="text-light text-black">Harga : </span>{" "}
              <span className="text-bold">Rp. {price}</span>
            </p>
            <p className="rate">
              <i class="fa-solid fa-star"></i> {rate} |{" "}
              <span className="text-light text-black">Terjual</span> {sold}+
            </p>
            <div className="buttons" onClick={() => {value.handleDetail(id)}}>
              <Link to="/details">
                <button type="submit" className="detail">
                  <i class="fa-solid fa-eye"></i> Detail
                </button>
              </Link>
              <button
                type="submit"
                className="addToCart"
                onClick={() => {
                  value.addToCart(id);
                }}
              >
                {inCart ? (
                  <p className="text-capitalize mb-0" disabled>
                    {" "}
                    in Cart
                  </p>
                ) : (
                  <span>
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Product;
