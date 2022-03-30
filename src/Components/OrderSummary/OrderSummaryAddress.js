import React from "react";

export default function Address(props) {
    return <div>
                <span>Address Line 1:</span> <span>{props.data.lineNoOne}</span>
                <span>Address Line 2:</span> <span>{props.data.lineNoTwo}</span>
                <span>City:</span> <span>{props.data.city}</span>
                <span>State:</span> <span>{props.data.state}</span>
                <span>PIN Code:</span> <span>{props.data.pinCode}</span>
                <span>Country:</span> <span>{props.data.country}</span>
           </div>
}