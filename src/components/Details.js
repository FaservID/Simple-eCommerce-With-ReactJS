import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, desc, price, name, rate, sold } =
            value.detailProduct;
          return (
            <div className="container py-5">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={img}
                      className="img-fluid rounded-start"
                      alt="product"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">Harga : Rp. {price}</p>
                      <p className="card-text">Deskripsi Barang : {desc}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          <p className="rate">
                            <i class="fa-solid fa-star text-warning"></i> {rate} |{" "}
                            <span className="text-light text-black">
                              Terjual
                            </span>{" "}
                            {sold}+
                          </p>
                        </small>
                      </p>
                      <div className="buttons">
                        <Link to="/">
                          <button className="detail">Back To Home</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 text-center">
                        <img src={img} alt="Product" className="img-fluid"/>
                    </div>
                    <div className="col-10 mx-auto text-capitalize text-center text-slanted text-blue my-5">
                        <h1>Model : {name}</h1>
                        <h4 className="text-title text-uppercase texxt-mute mt-3 mb-2">Made by : <span className="text-uppercase">{company}</span></h4>
                        <h4 className="text-blue"><strong>price : <span>Rp. </span>{price}</strong></h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            Some Info About Product :
                        </p>
                        <p className="text-muted lead">{info}</p>
                        <div>
                            <Link to='/'>
                                <ButtonContainer>
                                    Back To Product
                                </ButtonContainer>
                            </Link>
                        </div>
                    </div>
                </div> */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
