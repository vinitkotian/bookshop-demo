import React, {useEffect} from "react";
import "../index.css";
import BookModel from "./BookModel"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Button} from "@mui/material";


export default function BookDetails(props) {
    const [bookDetailsFromApi, setBookDetailsFromApi] = React.useState({});
    const [loadingBookDetails, setLoadingBookDetails] = React.useState(true);
    const handleClose = () => {
        props.backToHomePage();
    }
    const fetchBookDetails = async () => {
        const response = await BookModel.fetchDetailsById(props.selectedBook.id);
        setBookDetailsFromApi(response);
        setLoadingBookDetails(false);
    }
    useEffect(() => {
        fetchBookDetails(props.selectedBook.id);
    }, [props.selectedBook.id])

    return (
        !loadingBookDetails ?
            <div className={"bookdetails-flex-ctn"}>
                <div className={"nav-bar-book-details"} onClick={handleClose}>
                    <ArrowBackIosNewIcon className={"home-arrow"}/>
                    <h3>Back To Results</h3>
                </div>
                <div className={"book-details-row-ctn"}>
                    <div className={"book-image-col"}>
                        <img
                            src={bookDetailsFromApi.bookImageUrl} style={{width:400,height:600}}/>
                    </div>
                    <div className={"book-details-col"}>
                        <h1>{bookDetailsFromApi.name}</h1>
                        <h2>{`Author Name: ${bookDetailsFromApi.authorName}`}</h2>
                        <h2>{`Price: ${bookDetailsFromApi.price.amount} ${bookDetailsFromApi.price.currency}`}</h2>
                        <Button variant="contained" style={{margin: "5px"}}>Buy Now</Button>
                    </div>
                </div>
            </div> :
            <h1>Loading...</h1>

    )
}

