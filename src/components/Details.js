import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value)=>{
                  const {
                    id,
                    title,
                    img,
                    price,
                    info,
                    inCart,
                    company
                } = value.detailProduct
                  
                  return(
                      <div className="container py-5">
                          {/** Title* */}
                          <div className="row">
                              <div className="col-10 mx-auto text-blue text-center text-slanted my-5">
                                  <h1>{title}</h1>
                              </div>
                          </div>
                          {/** End Title* */}
                          {/** Product info* */}
                          <div className="row">
                              <div className="col-10 mx-auto col-md-6 my-3 ">
                                  <img src={img}  className="img-fluid" alt="product"/>          
                              </div>
                              {/** Product text info* */}
                              <div className="col-10 mx-auto col-md-6 my-3  text-capitalize">
                                 <h2>model:{title}</h2>
                                 <h4 className="text-title text-uppercase mt-3 mb-2  text-muted">
                                    made by:<span className="text-uppercase">{company}</span>
                                 </h4>
                                 <h4 className="text-blue">
                                     price:<span>$</span>{price}
                                 </h4>
                                 <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                     some info about product:
                                 </p>
                                  <p className="text-muted lead">{info}</p>
                                  {/*button*/}
                                  <div>
                                      <Link to="/">
                                          <ButtonContainer>
                                              back to products
                                          </ButtonContainer>
                                      </Link>

                                      <ButtonContainer 
                                      cart
                                      disable={inCart?true:false}
                                      onClick={()=>{
                                          value.addToCart(id)
                                          value.openModal(id)
                                        }}
                                      >
                                          {inCart?"inCart":"add to cart"}
                                      </ButtonContainer>
                                  </div>
                              </div>
                          </div>
                      </div>
                    )

               }}
               
           </ProductConsumer>
        )
    }
}
