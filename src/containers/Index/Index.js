import { Grid } from '@mui/material';
import React from 'react';
import BookCardLayout from '../../components/Layout/BookCardLayout';
import Layout from '../../components/Layout/Layout';


const Index = () => {
    return (
        <div style={{background:'#fff',minHeight:'100vh',minWidth:'600px'}} >
            <Layout searchBar >
                <Grid container justifyContent={'center'} sx={{margin:'30px 0px'}} >
                    <Grid item xs={11}>
                        <BookCardLayout />
                    </Grid>
                </Grid>
            </Layout>
        </div>
    );
};

export default Index;