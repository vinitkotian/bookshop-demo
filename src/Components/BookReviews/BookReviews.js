import StarIcon from "@mui/icons-material/Star";
import React from "react";

export default function BookReviews(props) {
    const bookDetails = props.bookDetails;
    const checkIfNoReviewsPresent = (reviewList) => {
        return !(reviewList && reviewList.length > 0)
    }

    if (checkIfNoReviewsPresent(bookDetails["bookReviewList"])) {
        return (
            <div className={"review-ctn"}>
                <h2>Reviews:</h2>
                <div className={"warning no-reviews-warning"}> ! No reviews yet</div>
            </div>
        )
    }
    return (
        <div className={"review-ctn"}>
            <h2>Reviews:</h2>
            {
                bookDetails["bookReviewList"].map((review,index) => (
                        <div className={"reviews"} key={index}>
                            <h4> User:{review.user.email}</h4>
                            <div className={"review-desc"}><h4>Review: {review["reviewDescription"]}</h4>
                            </div>
                            <h4>Rating: {review["rating"]} <span
                                className={"rating-span"}><StarIcon/></span></h4>
                        </div>
                    )
                )
            }
        </div>
    );
}