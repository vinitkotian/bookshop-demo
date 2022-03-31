import React, {useEffect} from "react";
import "../../index.css";
import BookModel from "../../Books/BookModel"
import {useNavigate, useParams} from "react-router-dom";
import BookDetails from "../../Components/BookDetails/BookDetails";


export default function BookDetailsContainer(props) {
    let history = useNavigate();
    let { bookId } = useParams()
    const [bookDetailsFromApi, setBookDetailsFromApi] = React.useState('');
    const [loadingBookDetails, setLoadingBookDetails] = React.useState(true);
    const handleBackToHome = () => {
        history("/")
    }
    const fetchBookDetails = async (id) => {
        const response = await BookModel.fetchDetailsById(id);
        setBookDetailsFromApi(response);
        setLoadingBookDetails(false);
    }

    useEffect(() => {
        fetchBookDetails(bookId);
    }, [bookId])

    if(loadingBookDetails){
        return <div className={"bookdetails-flex-ctn"}><h1>Loading...</h1></div>
    }

    return (
        <div className={"bookdetails-flex-ctn"}>
            <BookDetails
                bookDetails = {bookDetailsFromApi}
            />
        </div>
    )
}

