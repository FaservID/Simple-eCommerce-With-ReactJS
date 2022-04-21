import React from "react";

export default function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-3 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong>{title}</strong>
                </h1>
            </div>
        </div>
    );
}