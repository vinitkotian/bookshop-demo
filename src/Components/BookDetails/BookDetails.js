import React, {useEffect} from "react";
import "../../index.css";
import BookModel from "../../Books/BookModel"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate, useParams} from "react-router-dom";


export default function BookDetails(props) {
    let history = useNavigate();
    let { bookId } = useParams()
    const [bookDetailsFromApi, setBookDetailsFromApi] = React.useState('');
    const [loadingBookDetails, setLoadingBookDetails] = React.useState(true);
    const handleClose = () => {
        history("/")
    }
    const fetchBookDetails = async (id) => {
        const response = await BookModel.fetchDetailsById(id);
        setBookDetailsFromApi(response);
        setLoadingBookDetails(false);
    }
    const areReviewsPresent = (reviewList) => {
        return reviewList && reviewList.length > 0
    }
    const generateStockDetails = ()=>{
        if(bookDetailsFromApi.quantityAvailable == 0 ){
            return <div className={"warning out-of-stock"}> ! Out Of Stock</div>
        }else if(bookDetailsFromApi.quantityAvailable > 0){
            return <div className={"warning in-stock"} >In Stock</div>
        }
    }
    useEffect(() => {
        fetchBookDetails(bookId);
    }, [bookId])

    if (!loadingBookDetails) {
        return (
            <div className={"bookdetails-flex-ctn"}>
                <div className={"book-details-row-ctn"}>
                    <div className={"book-image-col"}>
                        <img
                            src={bookDetailsFromApi.bookImageUrl} style={{width: 400, height: 600}}/>
                    </div>
                    <div className={"book-details-col"}>
                        <h1>{bookDetailsFromApi.name}</h1>
                        <h2>{`Author Name: ${bookDetailsFromApi.authorName}`}</h2>
                        <h2>{`Price: ${bookDetailsFromApi.price.amount} ${bookDetailsFromApi.price.currency}`}</h2>
                        {
                            generateStockDetails()
                        }
                        <h2>Reviews:</h2>
                        {
                            areReviewsPresent(bookDetailsFromApi["bookReviewList"]) ? (
                                bookDetailsFromApi["bookReviewList"].map((review,index) => (
                                        <div className={"reviews"} key={index}>
                                            <h4> User:{review.user.email}</h4>
                                            <div className={"review-desc"}><h4>Review: {review["reviewDescription"]}</h4>
                                            </div>
                                            <h4>Rating: {review["rating"]} <span
                                                className={"rating-span"}><StarIcon/></span></h4>
                                        </div>
                                    )
                                )
                            ) : <div className={"warning no-reviews-warning"}> ! No reviews yet</div>
                        }
                    </div>
                </div>
            </div>
        )
    }else {
        return <div className={"bookdetails-flex-ctn"}><h1>Loading...</h1></div>
    }
}
