import React, { Component } from 'react'

export default class Deafault extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-title text-uppercase pt-5 text-center">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>the requested URL 
                        <spna className="text-danger">{this.props.location.pathname}</spna>
                        {" "} was not found</h3>
                    </div>
                </div>
               
            </div>
        )
    }
}
