import React, { Component } from "react";
import Product from "./Product";
import '../index.css';
import { ProductConsumer } from "../Context";
import Title from "./Title";
class ProductList extends Component {
  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="content-title">Our <strong>Product</strong></div>
        <div className="products">
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return <Product key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
