import { Grid } from '@mui/material';
import React from 'react';
import BookCard from '../BookCard/BookCard';

const BookCardLayout = (props) => {
    return (
        <div style={{background:'',padding:'20px 20px',borderRadius:'10px',opacity:'90%'}} >
            <Grid container justifyContent={'center'} spacing={3} >
                <Grid item xl={4} xs={12}>
                    <BookCard />
                </Grid>
                <Grid item xl={4} xs={12}>
                    <BookCard />
                </Grid>
                <Grid item xl={4} xs={12}>
                    <BookCard />
                </Grid>
            </Grid>
        </div>
    );
};

export default BookCardLayout;