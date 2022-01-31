import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBook } from '../../actions/book.actions';
import BookCard from '../BookCard/BookCard';

const BookCardLayout = (props) => {

    const books = useSelector(state => state.book.books);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllBook())
    },[dispatch])

    return (
        <div>
            <Grid container 
                justifyContent={'center'} 
                spacing={3} 
                sx={{ minWidth:'580px' ,backgroundColor:'#f5f5f5', borderRadius:'10px',padding:'20px 50px' ,margin:'30px 0px',width:'100%'}} 
            >
                
                { books.map( (book,i) => {
                    return <Grid key={book._id} item xl={6} xs={12}>
                                <BookCard
                                    book={book}
                                />
                            </Grid>
                })}

            </Grid>
        </div>
    );
};

export default BookCardLayout;