import { Grid } from '@mui/material';
import React from 'react';
import BookCard from '../BookCard/BookCard';

const BookCardLayout = (props) => {
    return (
        <div>
            <Grid container justifyContent={'center'} spacing={3} style={{ minWidth:'580px' ,backgroundColor:'#f5f5f5', borderRadius:'10px',padding:'20px 50px' ,margin:'30px 0px',width:'100%'}} >
                <Grid item xl={5} xs={12}>
                    <BookCard />
                </Grid>
                <Grid item xl={5} xs={12}>
                    <BookCard />
                </Grid>
                <Grid item xl={5} xs={12}>
                    <BookCard />
                </Grid>
            </Grid>
        </div>
    );
};

export default BookCardLayout;