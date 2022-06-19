import React from "react";
import "./Instructions.css";

function Instructions({ name, neighbourhood, ...props }) {
    return (
        <div className="card">
            <div>shopping Cart : 0 total items</div>
            <div>Total : 0</div>
            <div className="products">
                <span role="img" aria-label="ice cream" />
            </div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    );
}

export default Instructions;
