import React from 'react'
import {Link} from 'react-router-dom'
import PayPalButton from './PayPalButton'

export default function CartTotals({value,history}) {
const {cartSubTotal,cartTax,cartTotal,clearCart}=value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 col-sm-8 ml-md-auto text-capitalize text-right ">
                        <Link to="/">
                            <button 
                            className="btn btn-outline-danger text-uppercase px-5 mb-3"
                            type="button"
                            onClick={()=>clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>
                        <h5>
                         <span className="text-title">subtotal:</span>
                         <strong>$ {cartSubTotal}</strong>
                        </h5>
                        <h5>
                         <span className="text-title">tax:</span>
                         <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                         <span className="text-title">total:</span>
                         <strong>$ {cartTotal}</strong>
                        </h5>
                        <PayPalButton
                        total={cartTotal}
                        clearCart={clearCart}
                        history={history}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
