import React from "react";
import BookModel from "../../BooksModel/BookModel";
import BooksTable from "../../Components/BooksTable/BooksTable";
import "../../index.css"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

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

    searchItems(value) {
        BookModel.fetchAllBySearch(value).then((books) => {
            this.setState({books: books});
        })
    }

    render() {

        return (
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                ThoughtWorks Book Shop
                            </Typography>
                            <Search hidden={this.state.isBookDetailsOpen}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search???"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={(e) => this.searchItems(e.target.value)}
                                />
                            </Search>
                        </Toolbar>
                    </AppBar>
                </Box>
                <BooksTable
                    books={this.state.books}
                    openBookDetailsView = {this.openBookDetailsView}
                    isBookDetailsOpen = {this.state.isBookDetailsOpen}
                    backToHomePage = {this.backToHomePage}
                />
            </div>
        )
    }
}