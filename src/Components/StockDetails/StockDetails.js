import React from "react";

export default function StockDetails(props){
    const bookDetails = props.bookDetails;

    if(bookDetails.quantityAvailable == 0 ){
        return <div className={"warning out-of-stock"}> ! Out Of Stock</div>
    }

    return <div className={"warning in-stock"} >In Stock</div>
}