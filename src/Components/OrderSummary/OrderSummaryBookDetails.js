import React from "react";

export default function BookDetails(props) {

    return <div>
                <span>Book Name:</span> <span>{props.data.name}</span>&nbsp;
                <span>Author Name:</span> <span>{props.data.authorName}</span>&nbsp;
                <span>Quantity:</span> <span>{props.data.quantity}</span>&nbsp;
                <span>Price:</span> <span>{props.data.price.amount} {props.data.price.currency} </span>&nbsp;
               
           </div>
}