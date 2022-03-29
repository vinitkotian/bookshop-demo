import React from "react";
import BookModel from "./BookModel";
import BooksTable from "./BooksTable";
import "../index.css"

export default class ListBooksContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            books: [],
            isBookDetailsOpen:false
        }
        this.openBookDetailsView = this.openBookDetailsView.bind(this);
        this.backToHomePage = this.backToHomePage.bind(this);
    }
    openBookDetailsView(){
        this.setState({isBookDetailsOpen:true});
    }
    backToHomePage(){
        this.setState({isBookDetailsOpen:false});
    }

    componentDidMount() {
        BookModel.fetchAll().then((books) => {
            this.setState({books: books});
        })
    }

    render() {
        return <div>
            <BooksTable
                books={this.state.books}
                openBookDetailsView = {this.openBookDetailsView}
                isBookDetailsOpen = {this.state.isBookDetailsOpen}
                backToHomePage = {this.backToHomePage}
            />
        </div>
    }
}