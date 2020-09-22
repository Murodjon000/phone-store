import React from 'react'

export default function Title({name,title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                      {name} <storng className="text-blue">{title}</storng>
                </h1>
            </div>
        </div>
    )
}