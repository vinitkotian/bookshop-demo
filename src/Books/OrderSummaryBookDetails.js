import React from "react";

export default function BookDetails(props) {
    return <div>
                <span>Name:</span> <span>{props.data.name}</span>
                <span>Author Name:</span> <span>{props.data.authorName}</span>
                <span>Quantity:</span> <span>{props.data.quantity}</span>
                <span>Price:</span> <span>{props.data.price.amount} {props.data.price.currency} </span>
               
           </div>
}