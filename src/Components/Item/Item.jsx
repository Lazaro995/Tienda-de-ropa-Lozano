import React from 'react'

export default function item({id, title, price, stock}) {
    return (
        <div className="card-container">
            <h1>{id}</h1>
            <span>{title}</span>
            <span>{price}</span>
        </div>
    )
}